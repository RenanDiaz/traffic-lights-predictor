import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { Header } from './Header';
import { SeparatorRow } from './Utils';

const Background = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;

export function Layout() {
  return (
    <>
      <Header />
      <Background>
        <Container>
          <SeparatorRow height={56} />
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  );
}
