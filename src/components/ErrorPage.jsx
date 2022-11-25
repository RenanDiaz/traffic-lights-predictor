import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;

export function ErrorPage() {
  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <Row>
          <Col>
            <h1>Oops!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Sorry, an unexpected error has occurred.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <Button type="button" color="primary" onClick={() => navigate('/')}>
                Go home
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}
