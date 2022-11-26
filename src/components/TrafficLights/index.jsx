import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { fetchLights } from '../../utils/api-client';
import { Loader, SeparatorRow } from '../Utils';

export function TrafficLights() {
  const [trafficLights, setTrafficLights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const updateTrafficLights = () => {
    setIsLoading(true);
    fetchLights().then((response) => {
      setTrafficLights(response);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    updateTrafficLights();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Row>
        <Col>
          <h1>Traffic lights</h1>
        </Col>
      </Row>
      <SeparatorRow height={15} />
      <Row>
        <Col xs="auto">
          <Row className="justify-content-end mb-3">
            <Col xs="auto">
              <Link to="new">
                <Button color="primary">New light</Button>
              </Link>
            </Col>
          </Row>
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
                <tr key={_id} onClick={() => navigate(`${_id}/view`)}>
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
