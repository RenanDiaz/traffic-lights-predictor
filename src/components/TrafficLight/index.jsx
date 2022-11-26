import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Button, Col, Row } from 'reactstrap';
import { fetchLight, fetchStepsFor, postStepChange } from '../../utils/api-client';
import { Loader } from '../Utils';

export function TrafficLight() {
  const [trafficLight, setTrafficLight] = useState({ name: 'Traffic light', steps: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [stepActive, setStepActive] = useState(0);
  const [stepsDetails, setStepsDetails] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const { id } = useParams();

  const addError = (newError) => {
    const newErrors = errors.concat([newError]);
    setErrors(newErrors);
  };

  const removeError = (index) => {
    const newErrors = [...errors];
    newErrors.splice(index, 1);
    setErrors(newErrors);
  };

  const activateStep = (step) => {
    const datetime = Date.now();
    const body = { lightId: id, step, datetime };
    setIsLoading(true);
    postStepChange(body)
      .then(() => setStepActive(step))
      .catch((error) => addError(error.message))
      .finally(() => setIsLoading(false));
  };

  const toggleDetails = () => {
    const newValue = !detailsOpen;
    setDetailsOpen(newValue);
    if (newValue) {
      fetchStepsFor(id)
        .then((response) => setStepsDetails(response))
        .catch((error) => addError(error));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchLight(id).then((response) => {
      setTrafficLight(response);
      setIsLoading(false);
    });
  }, []);

  const steps = [];

  for (let i = 0; i < trafficLight.steps; i++) {
    const step = i + 1;
    steps.push({ step });
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      {errors.map((error, index) => (
        <Alert color="danger" isOpen toggle={() => removeError(index)} className="mt-3">
          {error}
        </Alert>
      ))}
      <Row>
        <Col>
          <h1>{trafficLight.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={5} lg={3}>
          {steps.map(({ step }) => (
            <Row key={step} className="align-items-center mb-3">
              <Col>Step {step}</Col>
              <Col xs="auto">
                {stepActive === step ? (
                  <Button color="success" disabled>
                    Activate
                  </Button>
                ) : (
                  <Button color="danger" onClick={() => activateStep(step)}>
                    Activate
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={toggleDetails}>
            {detailsOpen ? 'Hide details' : 'Show details'}
          </Button>
        </Col>
      </Row>
      {detailsOpen && (
        <Row>
          <Col>
            {stepsDetails.map(({ _id, step, datetime }) => (
              <tr key={_id}>
                <td>Step {step}</td>
                <td>{datetime}</td>
              </tr>
            ))}
          </Col>
        </Row>
      )}
    </>
  );
}
