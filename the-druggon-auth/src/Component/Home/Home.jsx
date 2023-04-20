import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Left_side from '../Left_side/Left_side';
import Right_side from '../Right_side/Right_side';
const Home = () => {
    return (
        <Container>
        <Row >
        <Col  lg="3"className=''>
         <Left_side></Left_side>
        </Col>
        <Col  lg="6"className=''>Variable width content</Col>
        <Col  lg="3"className=''>
          <Right_side></Right_side>
        </Col>
      </Row>
      </Container>
    );
};

export default Home;