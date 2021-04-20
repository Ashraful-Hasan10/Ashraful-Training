import React, { useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import './CheckoutForm.css';


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CheckoutForm = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("click me");

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentError(null);
      payment(paymentMethod.id);
    }
  };

  return (
    <Row className="row-cols-1 justify-content-center mt-5">
      <Col xs={10} md={8}>
        <form onSubmit={handleSubmit}>
          <label className="w-100">
            <span className="RRR">Card number</span>
            <CardNumberElement className="ooo" options={options} />
          </label>
          <label className="w-100">
            <span className="RRR">Expiration date</span>
            <CardExpiryElement className="ooo" options={options} />
          </label>
          <label className="w-100">
            <span className="RRR">CVC</span>
            <CardCvcElement className="ooo" options={options} />
          </label>
          <button className="payment-btn" type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        {paymentError && <p style={{ color: 'red', marginTop: '20px' }}>{paymentError}</p>}
      </Col>
    </Row>
  );
};
export default CheckoutForm;