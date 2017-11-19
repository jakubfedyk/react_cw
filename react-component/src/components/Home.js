import React from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';

const Home = () => {
    const handleClick = () => {
        alert('handle click');
    };
    return  (
        <div>
            <Button bsStyle="warning"  bsSize="large" onClick={handleClick}>Button</Button>
            <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            </Row>
            </Grid>

        </div>
    );
};

export default Home