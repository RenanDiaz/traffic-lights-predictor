import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { fetchLights } from '../../utils/api-client';
import { SeparatorRow } from '../Utils';

export function TrafficLights() {
  const [trafficLights, setTrafficLights] = useState([]);

  const updateTrafficLights = async () => {
    const response = await fetchLights();
    setTrafficLights(response);
  };

  useEffect(() => {
    updateTrafficLights();
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
              {trafficLights.map(({ _id, name, steps }, index) => (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{steps}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col xs="auto">
              <Button color="primary" onClick={updateTrafficLights}>
                Reload data
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
