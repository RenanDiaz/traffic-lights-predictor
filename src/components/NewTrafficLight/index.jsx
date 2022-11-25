import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import { postLight } from '../../utils/api-client';
import { SeparatorRow } from '../Utils';

export function NewTrafficLight() {
  const [name, setName] = useState('');
  const [steps, setSteps] = useState(1);

  const postNewLight = () => {
    const body = { name, steps };
    postLight(body).then(() => {
      setName('');
      setSteps(1);
    });
  };

  return (
    <>
      <Row>
        <Col>
          <h1>New traffic light</h1>
        </Col>
      </Row>
      <SeparatorRow height={15} />
      <Row>
        <Col xs={12} sm={6} md={5} lg={3}>
          <Row className="align-items-center mb-3">
            <Col xs="auto">Name</Col>
            <Col>
              <Input value={name} onChange={({ target }) => setName(target.value)} />
            </Col>
          </Row>
          <Row className="align-items-center mb-3">
            <Col xs="auto">Steps</Col>
            <Col>
              <Input
                type="number"
                value={steps}
                onChange={({ target }) => setSteps(target.value)}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button color="primary" onClick={postNewLight}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
