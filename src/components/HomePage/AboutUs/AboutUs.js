import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import aboutImg from "../Allimages/wells-chan-H-vAxuWxmi8-unsplash.jpg";

const AboutUs = () => {
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center mb-4 about-title">About Us</h1>
        <Row className="row-cols-1 row-cols-md-2 g-4 ">
          <Col>
            <Card className="h-70">
              <img
                style={{
                  width: "100%",
                  height: "525px",
                  objectFit: "cover",
                }}
                src="https://tattoodo-mobile-app.imgix.net/images/posts/nodes_Jw5rhRxLYr.jpg"
                alt=""
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }} className="h-100 work-card ">
              <Card.Body>
                <h4
                  style={{
                    color: "#FCD842",
                    fontSize: "25px",
                    marginTop: "20px",
                  }}
                >
                  Your Dream Our Responsibility
                </h4>
                <h5 style={{ color: "black", fontSize: "25px" }}>
                  We are 24/7 open
                </h5>
                <p style={{ color: "black" }}>
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. it has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. it was
                  popularised in the 1960s with the release of
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
