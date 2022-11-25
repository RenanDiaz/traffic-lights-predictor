import React from 'react';
import PropTypes from 'prop-types';
import { Col, Modal, ModalBody, Row, Spinner } from 'reactstrap';
import styled from 'styled-components';

export const SeparatorRow = styled(Row).attrs((props) => ({
  style: {
    height: `${props.height}px`,
  },
}))`
  user-select: none;
`;

export function Loader({ isLoading }) {
  return (
    <Modal centered isOpen={isLoading} contentClassName="bg-transparent">
      <ModalBody>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner color="light" />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
