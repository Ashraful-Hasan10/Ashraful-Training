import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import "./PricingPlan.css";

const check = <FontAwesomeIcon icon={faCheck} />;
const PricingPlan = () => {
  //   const renderHeader = {
  //     showHeader: "price",
  //     text: "pricing plan",
  //   };
    let history = useHistory();
  const [pricePlan, setPricePlan] = useState([{
    plan: 'beginners',
    price: 90
  },
  {
    plan: 'basic',
    price: 120
  },
  {
    plan: 'advance',
    price: 190
  }]);
    const handlePurchase = (plan) => {
      history.push(`/checkOut/${plan}`)
    }
  return (
    <>

      <Container className="text-center">
        <h3
          style={{
            textTransform: "uppercase",
            fontWeight: 700,
            marginTop: "100px",
            marginBottom: "50px",
            color: "#fcd842",
            textAlign: "center",
          }}
        >
          choose the offer{" "}
          <span style={{ color: "black" }}>that suits you</span>
        </h3>
        {/* <p
          style={{
            display: "inline-block",
            width: "300px",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p> */}
        <Row className="row-cols-1 row-cols-sm-3">
          <Col className="pb-4">
            <Card className="advance-plan price-card">
              <Card.Body>
                <p>billed monthly</p>
                <h6>{pricePlan[0].plan}</h6>
                <h6 style={{ color: "#fcd842", fontSize: "35px" }}>
                  ${pricePlan[0].price}
                </h6>
                <div>
                  <ul className="price-plan">
                    <li>
                      <span>{check}</span>Mobile-Optimized
                    </li>
                    <li>
                      <span>{check}</span>Best Hosting
                    </li>
                    <li>
                      <span>{check}</span>Free Custom
                    </li>
                    <li>
                      <span>{check}</span>Oustanding
                    </li>
                    <li>
                      <span>{check}</span>Happy Customers
                    </li>
                  </ul>
                </div>
                <button
                    onClick={() => {
                      handlePurchase(pricePlan[0].plan);
                    }}
                  className="purchase-btn"
                >
                  purchase
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-4">
            <Card className="basic-plan price-card">
              <Card.Body>
                <p>billed monthly</p>
                <h6>{pricePlan[1].plan}</h6>
                <h6 style={{ color: "#fcd842", fontSize: "35px" }}>
                  ${pricePlan[1].price}
                </h6>
                <ul className="price-plan">
                  <li>
                    <span>{check}</span>Mobile-Optimized
                  </li>
                  <li>
                    <span>{check}</span>Best Hosting
                  </li>
                  <li>
                    <span>{check}</span>Free Custom
                  </li>
                  <li>
                    <span>{check}</span>Oustanding
                  </li>
                  <li>
                    <span>{check}</span>Happy Customers
                  </li>
                </ul>
                <button
                    onClick={() => {
                      handlePurchase(pricePlan[1].plan);
                    }}
                  className="purchase-btn"
                >
                  purchase
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-4">
            <Card className="beginner-plan price-card">
              <Card.Body>
                <p>billed monthly</p>
                <h6>{pricePlan[2].plan}</h6>
                <h6 style={{ color: "#fcd842", fontSize: "35px" }}>
                  ${pricePlan[2].price}
                </h6>
                <ul className="price-plan">
                  <li>
                    <span>{check}</span>Mobile-Optimized
                  </li>
                  <li>
                    <span>{check}</span>
                    Best Hosting
                  </li>
                  <li>
                    <span>{check}</span>Free Custom
                  </li>
                  <li>
                    <span>{check}</span>Oustanding
                  </li>
                  <li>
                    <span>{check}</span>Happy Customers
                  </li>
                </ul>
                <button
                    onClick={() => {
                      handlePurchase(pricePlan[2].plan);
                    }}
                  className="purchase-btn"
                >
                  purchase
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PricingPlan;
