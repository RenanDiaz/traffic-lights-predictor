import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchLight, fetchStepsFor, postStepChange } from '../../utils/api-client';
import { millisecondsToTime } from '../../utils/commons';
import { Loader } from '../Utils';

function timeDifference(datetime, nextStep) {
  if (nextStep) {
    const diff = nextStep.datetime - datetime;
    return millisecondsToTime(diff);
  }
  return '';
}

export function TrafficLight() {
  const [trafficLight, setTrafficLight] = useState({ name: 'Traffic light', steps: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [stepActive, setStepActive] = useState(0);
  const [stepsDetails, setStepsDetails] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const addError = (newError) => {
    const newErrors = errors.concat([newError]);
    setErrors(newErrors);
  };

  const removeError = (index) => {
    const newErrors = [...errors];
    newErrors.splice(index, 1);
    setErrors(newErrors);
  };

  const updateSteps = () => {
    fetchStepsFor(id)
      .then((response) => setStepsDetails(response))
      .catch((error) => addError(error));
  };

  const activateStep = (step) => {
    const datetime = Date.now();
    const body = { lightId: id, step, datetime };
    setIsLoading(true);
    postStepChange(body)
      .then(() => {
        setStepActive(step);
        updateSteps();
      })
      .catch((error) => addError(error.message))
      .finally(() => setIsLoading(false));
  };

  const toggleDetails = () => {
    const newValue = !detailsOpen;
    setDetailsOpen(newValue);
    if (newValue) {
      updateSteps();
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
      <Row className="align-items-center">
        <Col xs="auto" onClick={() => navigate('/lights')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Col>
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
      <Row className="mb-3">
        <Col>
          <Button color="primary" onClick={toggleDetails}>
            {detailsOpen ? 'Hide details' : 'Show details'}
          </Button>
        </Col>
      </Row>
      {detailsOpen && (
        <Row className="mb-3">
          <Col xs="auto">
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Step</th>
                  <th>Datetime</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {stepsDetails.map(({ _id, step, datetime }, index) => (
                  <tr key={_id}>
                    <td>{stepsDetails.length - index}</td>
                    <td align="right">{step}</td>
                    <td>
                      {new Date(datetime).toLocaleString('es-ES', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </td>
                    <td align="right">{timeDifference(datetime, stepsDetails[index - 1])}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  );
}
