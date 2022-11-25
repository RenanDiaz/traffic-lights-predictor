import React from 'react';
import { Col, Row } from 'reactstrap';
import { SeparatorRow } from '../Utils';

export function TrafficLights() {
  const trafficLights = [
    {
      id: 1,
      name: 'Test',
    },
    {
      id: 2,
      name: 'Test 2',
    },
  ];
  return (
    <>
      <Row>
        <Col>
          <h1>Traffic lights</h1>
        </Col>
      </Row>
      <SeparatorRow height={15} />
      {trafficLights.map(({ id, name }) => (
        <Row>
          <Col xs="auto">{id}</Col>
          <Col>{name}</Col>
        </Row>
      ))}
    </>
  );
}
