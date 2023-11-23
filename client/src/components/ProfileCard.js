import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard(props) {
  return (
    <section className="vh-100">
      <Container className="py-5 h-100 bg-dark">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="mb-4 mb-lg-0">
            <Card
              className="mb-3 gradient-custom text-bg-dark"
              style={{ borderRadius: ".5rem" }}
            >
              <Row className="g-0">
                <Col
                  md="4"
                  className="text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <CardImg
                    src={process.env.PUBLIC_URL + props.imgURL}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "100px", borderRadius: "50%" }}
                    fluid
                  />
                  <h5>{props.name}</h5>
                  <CardText>{props.title}</CardText>
                </Col>
                <Col md="8">
                  <CardBody className="p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col size="12" className="mb-3">
                        <h6>Email</h6>
                        <CardText className="text-muted">{props.mail}</CardText>
                      </Col>
                      <Col size="12" className="mb-3">
                        <h6>Phone</h6>
                        <CardText className="text-muted">
                          {props.phone}
                        </CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
              </Row>
              <Row>
                <hr className="mt-4 mb-2 col-4 mx-auto" />
                <h6 className="text-center">Education</h6>
                <hr className="mt-0 mb-4 col-4 mx-auto" />
                <Row className="pt-1 m-2 text-center text-light">
                  <Col size="6" className="mb-3">
                    <h6>{props.university}</h6>
                    <CardText className="text-muted">
                      {props.programme}
                    </CardText>
                  </Col>
                  <Col size="6" className="mb-3">
                    <h6>{props.school}</h6>
                    <CardText className="text-muted">{props.board}</CardText>
                  </Col>
                </Row>
                <Row className="mb-4 justify-content-center mx-0">
                  <div className="d-flex justify-content-center">
                    <a href={props.instagramLink} target="blank">
                      {/* <FaInstagram className="me-3 instagram fa-instagram" /> */}
                      <div className="insta-icon me-3"></div>
                    </a>
                    <a href={props.gitHubLink} target="blank">
                      <FaGithub className="me-3 github" />
                    </a>
                    <a href={props.linkedinLink} target="blank">
                      <FaLinkedin className="me-3 linkedin" />
                    </a>
                  </div>
                </Row>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
