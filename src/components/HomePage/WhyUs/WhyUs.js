import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const WhyUs = () => {
  return (
    <Container className="mt-5">
      <h2
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 700,
          marginBottom: "40px",
        }}
      >
        <span style={{ color: "#fcd842"}}>why</span> choose us
      </h2>
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col className="pb-4">
          <Card className="work-card text-center shadow">
            <Card.Body>
              <img src="https://www.pngitem.com/pimgs/m/92-923547_gym-stickers-hd-png-download.png" alt=""  width="100" height="140" />
              <h5 style={{ color: "black" }}>Free Fitness Training</h5>
              <p style={{ color: "black" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-4">
          <Card className="work-card text-center shadow">
            <Card.Body>
              <img className="work-img pb-3" src="https://previews.123rf.com/images/vaseninadaria/vaseninadaria1801/vaseninadaria180100009/94237853-bodybuilder-logo-template-vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design-embl.jpg" alt=""  width="120" height="140" />
              <h5 style={{ color: "black" }}>Tons of Cardio & Strength</h5>
              <p style={{ color: "black" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-4">
          <Card className="work-card text-center shadow">
            <Card.Body>
              <img  src="https://images-eu.ssl-images-amazon.com/images/I/41AC-C3PEPL.jpg" alt="" width="100" height="112.5" />
              <h5 style={{ color: "black" }}>Variety in Memberships With Facilities</h5>
              <p style={{ color: "black" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;