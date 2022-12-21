import React from 'react';
import { Col, Row } from 'reactstrap';

export function LottoFrame() {
  return (
    <Row>
      <Col>
        <iframe
          id="iframeLotto"
          width="100%"
          height="100%"
          frameborder="0"
          src="https://f892-186-74-45-112.ngrok.io/auth/player/callback?session_state=9545f60a-d2cb-48e0-8bdf-f6eaa04b3140&code=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..pE2OQ_XhX-WX7DaOzW32hg.VVzH1yP9jwxGNFALIqlabbKoa-O8Ev3DVWeg1JQaoD47R44RPMWWrcZv2QyQ0Vj8tmiESLPURnb4fxqGP-MCY6i9dFICW5afuP8K3EXmzw-8PTGFZCj0NL4chxnWLBFTC0hvuwxRf2CqFG0tgBFqImZmCgrcljZUypxu2CfnckMArs08nS7VU8s6iiQ5vLjO2mP-SQXADGK2XIZDH6KyjrXl0jJ0Sxg70QnmfBDSvHA5BTrfTbzfBW8RI7jq5F42.BGn5jbwVH9OCCqfEc6kiRQ"
        />
      </Col>
    </Row>
  );
}
