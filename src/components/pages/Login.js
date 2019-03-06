import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='with a placeholder'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='examplePassword'
                placeholder='password placeholder'
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color='primary'>Login</Button>
        <FormGroup className='ml-2' inline check>
          <Input type='checkbox' name='check' id='rememberMe' />
          <Label for='rememberMe' check>
            Remember Me
          </Label>
        </FormGroup>
      </Form>
    );
  }
}
