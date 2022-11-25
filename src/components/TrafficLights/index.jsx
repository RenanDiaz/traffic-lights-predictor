import React, { useEffect } from 'react';
import { Col, Row, Table } from 'reactstrap';
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
  useEffect(() => {
    fetchLights();
  }, []);
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
        </Col>
      </Row>
    </>
  );
}
