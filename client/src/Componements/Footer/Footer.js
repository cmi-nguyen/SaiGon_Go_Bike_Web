import React from "react";
import "./Footer.css";
import { Col, Container, List, ListInlineItem, Row } from "reactstrap";

function Footer() {
  return (
    <div className="main-footer">
      <Container>
        <Row>
          <Col className="col-lg-10">
            <List type="inline">
              <ListInlineItem>Follow us on</ListInlineItem>
              <ListInlineItem>
                <a href="">Facebook</a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="">Instagram</a>
              </ListInlineItem>
            </List>
          </Col>
          <Col >
            <a href="">Back to top</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Made by Nguyen Trieu</p>
            <List type="inline">
              <ListInlineItem>Code release by Nguyen Trieu</ListInlineItem>
              <ListInlineItem>
                <a href="">GitHub</a>.
              </ListInlineItem>
              <ListInlineItem>
                <a href="">Buy me a Coffee</a>
              </ListInlineItem>
            </List>
            <p>
              Based on{" "}
              <a href="https://getbootstrap.com/" rel="nofollow">
                Bootstrap
              </a>
              . Icons from{" "}
              <a href="https://fontawesome.com/" rel="nofollow">
                Font Awesome
              </a>
              . Web fonts from{" "}
              <a href="https://fonts.google.com/" rel="nofollow">
                Google
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
