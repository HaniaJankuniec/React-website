import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [status, setStatus] = useState('');

  function calculateBMI() {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  }

  return (
    <Container className="calculator">
      <h2>BMI Calculator</h2>
      <div className="calculatorForm"><Row>
        <Col>
          <Form.Group>
            <Form.Label>Weight (kg):</Form.Label>
            <Form.Control
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Height (cm):</Form.Label>
            <Form.Control
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Button onClick={calculateBMI}>Calculate BMI</Button>
      {bmi && (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>Status: {status}</p>
        </div>
      )}
    </div> 
    </Container>
  );
}