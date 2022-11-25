import React from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { fetchLights } from '../../utils/api-client';
import { SeparatorRow } from '../Utils';

export function TrafficLights() {
  const trafficLights = [
    {
      id: 1,
      name: 'Santa Cruz',
      steps: 4,
    },
    {
      id: 2,
      name: 'Parque de las Madres',
      steps: 2,
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
      <Row>
        <Col xs="auto">
          <Table dark>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Steps</th>
              </tr>
            </thead>
            <tbody>
              {trafficLights.map(({ id, name, steps }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{steps}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col xs="auto">
              <Button color="primary" onClick={fetchLights}>
                Reload data
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
