import { useState,useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { User } from '../../../interfaces/User';

enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DELIVERED = 'DELIVERED',
}


interface FormData {
  bank: 'Agricola' | 'Promerica';
  transactionId: string;
  amount: number;
  dateOfbuy: string;
  status: Status;
  ID_USER: string;
}

const DepositForm = ({ onSubmit }: any) => {

  

  function obtenerFechaActual(): string {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son base 0, por eso se suma 1
    const anio = fechaActual.getFullYear().toString();
  
    return `${dia}-${mes}-${anio}`;
  }
  const getUser = ():string => {
    const storedUser = localStorage.getItem('user');
    let user:User = storedUser ? JSON.parse(storedUser).user : {_id: ""};
    return user._id ?? "";
  };
  useEffect(() => {
    // obtener los datos de compra

  }, []);  

  const [formData, setFormData] = useState<FormData>({
    
    bank: 'Agricola',
    transactionId: '',
    amount: 0,
    dateOfbuy: obtenerFechaActual(),
    status: Status.PENDING,
    ID_USER: getUser(),
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
        <Form onSubmit={handleSubmit}> <Form.Group controlId="transactionId">
            <Form.Label>Realizar un deposito en el banco agricola y escribir dicho numero de transaccion:
                asdasfpsldferdsf96
               </Form.Label>
            
          </Form.Group>
          {/* <Form.Group controlId="bank">
            <Form.Label>Banco</Form.Label>
            <Form.Control as="select" name="bank" value={formData.bank} onChange={handleChange}>
              <option value="Agricola">Banco Agricola</option>
              <option value="Promerica">Banco Promerica</option>
            </Form.Control>
          </Form.Group> */}
          <Form.Group controlId="transactionId">
            <Form.Label>ID Transaccion </Form.Label>
            <Form.Control type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Deposito</Form.Label>
            <Form.Control readOnly type="number" name="amount" value={formData.amount} onChange={handleChange} isInvalid={formData.amount < 0} />
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
