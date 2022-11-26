import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { fetchLight } from '../../utils/api-client';
import { Loader } from '../Utils';

export function TrafficLight() {
  const [trafficLight, setTrafficLight] = useState({ name: 'Traffic light', steps: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [stepActive, setStepActive] = useState(0);

  const { id } = useParams();

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
                  <Button color="danger" onClick={() => setStepActive(step)}>
                    Activate
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </>
  );
}
