import axios from "axios";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import confirmSvg from '../Allimages/confirm.svg';
import Payment from "../Payment/Payment";
import "./PurchaseForm.css";

const PurchaseForm = () => {

    const {
        register,
        handleSubmit,
    } = useForm();
    const [userData, setUserData] = useState({});
    const [stepOver, setStepOver] = useState(false);
    const [step, setStep] = useState(0);
    const [order, setOrder] = useState(null);

    const onSubmit = (data,) => {
        setStep(step + 1);
        setStepOver(true)
        setUserData(data)
    };

    const handlePayment = async (paymentId) => {
        console.log('click me')
        setOrder(paymentId);
        setStep(step + 1);
        const newOrder = { ...userData, paymentId };
        try {
            const response = await axios.post(
                "https://https://secure-ridge-21693.herokuapp.com/order",
                newOrder
            );
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Container className="YYY">

                {!order ? (
                    <>
                        {!stepOver ? (
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <Row className="row-cols-1 row-cols-sm-2">
                                    <Col>
                                        <label className="RRR" htmlFor="firstName">First Name</label>
                                        <input
                                            className="form-control"
                                            {...register("firstName", {
                                                required: true,
                                            })}
                                            type="text"
                                        />
                                    </Col>
                                    <Col>
                                        <label className="RRR" htmlFor="lastName">Last Name</label>
                                        <input
                                            className="form-control"
                                            {...register("lastName", {
                                                required: true,
                                            })}
                                            type="text"
                                        />
                                    </Col>

                                    <Col>
                                        <label className="RRR" htmlFor="number">Mobile Number</label>
                                        <input
                                            className="form-control"
                                            {...register("phone", {
                                                required: true,
                                                valueAsNumber: true,
                                            })}
                                            type="number"
                                        />
                                    </Col>

                                    <Col>
                                        <label className="RRR">Gender</label>
                                        <select
                                            className="form-control"
                                            {...register("gender", { required: true })}
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <label className="RRR" htmlFor="address">Address:</label>
                                        <input
                                            className="form-control"
                                            {...register("address", { required: true })}
                                            type="text"
                                        />
                                    </Col>

                                    <Row className="mt-5">
                                        <Col className="text-right">
                                            <input className="submit-btn" type="submit" value="Next" />
                                        </Col>
                                    </Row>
                                </Row>
                            </form>
                        ) : (
                            <Payment handlePayment={handlePayment} />

                        )}
                    </>
                ) : (
                    <Row className='justify-content-center mt-5'>
                        <Col xs={8}>
                            <Alert className='mb-4' variant='success'>Order Place Successfully</Alert>
                            <img style={{ height: '300px' }} className='w-100' src={confirmSvg} alt='' /></Col>
                    </Row>
                )}
            </Container>
        </>
    );
};

export default PurchaseForm;
