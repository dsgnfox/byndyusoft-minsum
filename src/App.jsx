import { useState } from 'react';
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import sumFirstTwoSmallNumbers from './helpers/sumFirstTwoSmallNumbers';

const App = () => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      numbers: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { numbers } = values;
      const numbersArray = numbers.split(',').map((i) => parseInt(i)).filter((i) => Number.isInteger(i));
      const result = sumFirstTwoSmallNumbers(numbersArray);

      if (Number.isInteger(result)) {
        setResult(result);
        handleShow();
      } else {
        setResult('Введите 2 числа');
        handleShow();
      }

      resetForm({ value: '' });
    },
  });

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={5}>
            <Form onSubmit={formik.handleSubmit} data-testid="form">
              <Form.Group className="mb-3" controlId="numbers">
                <Form.Label>Введите набор чисел</Form.Label>
                <Form.Control type="text" className="mb-2" onChange={formik.handleChange} value={formik.values.numbers} />
                <Form.Text className="text-muted">
                  Числа должны быть перечислены через запятую.<br />В результате вы получите сумму двух наименьших из них.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">GO!</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} backdrop="static" data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Ответ:</Modal.Title>
        </Modal.Header>
        <Modal.Body>{result}</Modal.Body>
      </Modal>
    </>
  )
};

export default App;
