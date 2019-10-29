import React from 'react';
import './Login.scss';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';


const Login = (props) => {
    return (
        <div className="background">
            <div className=" bg-white from container text-center col-xl-4 col-md-6 col-sm-8 col-xs-8 " >
                <Form  >
                    <Label style={{ fontSize: "38px" }}>Log in</Label>
                    <FormGroup row >
                        <Col >
                            <Input placeholder="User name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Col >
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Row >
                            <Col style={{ textAlign: "left" }}>
                                <Label check style={{ paddingLeft: "20px" }}>
                                    <Input type="checkbox" />{' '}Remember me
                                </Label>
                            </Col>
                            <Col style={{ textAlign: "right" }}>
                                <Label >Forgot your password ?</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup row>
                        <Col >
                            <Button style={{ backgroundColor: "dodgerblue", width: "60%", border: "white 1px solid" }}>Log in</Button>
                        </Col>
                    </FormGroup>
                    <Label style={{ borderBottom: "1px solid dodgerblue", width: "100%" }}>Or</Label>
                    <FormGroup row>
                        <Col >
                            <Button style={{ backgroundColor: "dodgerblue", width: "60%", border: "white 1px solid" }}>Sign up</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default Login;