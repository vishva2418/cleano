import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, setServiceType, setPrice } from '../fetures/bookingSlices';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import "../css/Bookingpage.css";

function BookingPage() {
  const dispatch = useDispatch();
  const { bookingDetails } = useSelector((state) => state.booking);

  // Example service types and prices
  const servicePrices = {
    homeCleaning: 100,
    officeCleaning: 150,
    carpetCleaning: 200,
  };

  // Define the quantity state
  const [quantity, setQuantity] = useState(bookingDetails.quantity);

  // Set service type and price
  const handleServiceChange = (service) => {
    dispatch(setServiceType(service));
    dispatch(setPrice(servicePrices[service]));
  };

  // Handle submit and confirmation
  const handleSubmit = () => {
    alert(`Booking Confirmed!\nService: ${bookingDetails.serviceType}\nQuantity: ${bookingDetails.quantity}\nTotal Cost: $${bookingDetails.price * bookingDetails.quantity}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Book Your Cleaning Service</h1>

          {/* Booking Success Alert */}
          {bookingDetails.serviceType && bookingDetails.quantity > 0 && (
            <Alert variant="success">
              <h5>Your selection:</h5>
              <p>
                Service: {bookingDetails.serviceType}<br />
                Quantity: {bookingDetails.quantity} <br />
                Total Cost: ${bookingDetails.price * bookingDetails.quantity}
              </p>
            </Alert>
          )}

          <Form>
            {/* Service Selection */}
            <Form.Group controlId="serviceSelect" className="mb-3">
              <Form.Label>Select Service</Form.Label>
              <Form.Control
                as="select"
                value={bookingDetails.serviceType}
                onChange={(e) => handleServiceChange(e.target.value)}
              >
                <option value="homeCleaning">Home Cleaning</option>
                <option value="officeCleaning">Office Cleaning</option>
                <option value="carpetCleaning">Carpet Cleaning</option>
              </Form.Control>
            </Form.Group>

            {/* Service Details */}
            <Form.Group className="mb-3">
              <Form.Label>Selected Service: {bookingDetails.serviceType}</Form.Label>
              <Form.Text className="text-muted">
                Price per service: ${bookingDetails.price}
              </Form.Text>
            </Form.Group>

            {/* Quantity Controls */}
            <Form.Group className="mb-3 d-flex align-items-center">
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(decrementQuantity())}
                disabled={bookingDetails.quantity <= 1}
                className="me-2"
              >
                -
              </Button>
              <Form.Control
                type="number"
                value={bookingDetails.quantity}
                onChange={(e) => dispatch(setQuantity(Number(e.target.value)))}
                min={1}
                className="w-auto text-center"
              />
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(incrementQuantity())}
                className="ms-2"
              >
                +
              </Button>
            </Form.Group>

            {/* Total Cost */}
            <Form.Group className="mb-3">
              <Form.Label>Total Cost: ${bookingDetails.price * bookingDetails.quantity}</Form.Label>
            </Form.Group>

            {/* Submit Booking */}
            <Button
              variant="primary"
              onClick={handleSubmit}
              block
            >
              Confirm Booking
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default BookingPage;
