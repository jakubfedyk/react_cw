import React from 'react';
import {Grid, Row, Col, Button, Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox} from 'react-bootstrap';

const Home = () => {
    const handleClick = () => {
        alert('handle click');
    };
    return (
        <div>
            <Button bsStyle="warning" bsSize="large" onClick={handleClick}>Button</Button>
            <Grid>
                <Row>
                    <Col xs={6} md={8}>Column 1</Col>
                    <Col xs={6} md={4}>Column 2</Col>
                </Row>
            </Grid>

            <Form>
                <FormGroup>
                    <ControlLabel>label</ControlLabel>
                    <FormControl type='text' placeholder='Type text'></FormControl>
                    <HelpBlock>Help block</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <Checkbox inline>1</Checkbox>
                </FormGroup>
                <FormGroup>
                    <FormControl componentClass='select' placeholder='select'>
                        <option value='select'>select</option>
                        <option value='other'>...</option>
                    </FormControl>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Home