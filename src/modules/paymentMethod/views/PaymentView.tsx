import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';



interface FormData {
  bank: 'Agricola' | 'Promerica';
  transactionId: string;
  amount: number;
}

const DepositForm = ({ onSubmit }: any) => {
  const [formData, setFormData] = useState<FormData>({
    bank: 'Agricola',
    transactionId: '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'bank') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value === 'Agricola' ? 'Agricola' : 'Promerica',
      }));
    } else if (name === 'transactionId') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if (name === 'amount') {
      const parsedAmount = parseFloat(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: parsedAmount >= 0 ? parsedAmount : 0,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="bank">
            <Form.Label>Banco</Form.Label>
            <Form.Control as="select" name="bank" value={formData.bank} onChange={handleChange}>
              <option value="Agricola">Banco Agricola</option>
              <option value="Promerica">Banco Promerica</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="transactionId">
            <Form.Label>ID Transaccion </Form.Label>
            <Form.Control type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Deposito</Form.Label>
            <Form.Control type="number" name="amount" value={formData.amount} onChange={handleChange} isInvalid={formData.amount < 0} />
            <Form.Control.Feedback type="invalid">Por favor ingrese un Numero positivo</Form.Control.Feedback>
            <Form.Text className="text-muted">
                El monto debe ser mayor a $0.00 y en dolares
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Container>
  );
};

export default DepositForm;
