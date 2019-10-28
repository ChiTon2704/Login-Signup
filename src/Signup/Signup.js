import React from 'react';
import './Signup.scss';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Signup = (props) => {
    return (
        <div className="background">
            <div className=" bg-white from container text-center col-xl-6 col-md-8 " >
                <Form  >
                    <Label style={{ fontSize: "38px" }}>Sign up</Label>

                    <FormGroup row >
                        <Col >
                            <Input placeholder="User name" />
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Col  >
                            <Input type="email" name="email" id="exampleEmail" placeholder="Your email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Col >
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Col  >
                            <Input type="password" name="password" id="examplePassword" placeholder="Comfrom password" />
                        </Col>
                    </FormGroup>

                    <FormGroup check style={{ textAlign: "left" }}>
                        <Label check>
                            <Input type="checkbox" />{' '}I agree all statements in Terms or Service
                        </Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col >
                            <Button style={{ backgroundColor: "dodgerblue", width: "100%", border: "white 1px solid" }}>Sign up</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default Signup;