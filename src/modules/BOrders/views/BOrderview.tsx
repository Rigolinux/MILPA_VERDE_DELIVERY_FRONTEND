import React, { useRef }  from 'react';
import PrintComponent from '../../printModule/views/Print';
import ReactToPrint from 'react-to-print';
import { BOrders, Status } from '../../../interfaces/BOrders';

const BOrderview = () => {
  const dummyData: BOrders = 
    {
      _id: '1',
      status: Status.PENDING,
      provider: 'Proveedor 1',
      OrderDate: new Date(),
      total: 100,
      details: [
        {
          _id: '1',
          ID_Product: 'Producto 1',
          quantity: 2,
          price: 50,
          total: 100,
          ID_Header: '1',
        },
        {
          _id: '2',
          ID_Product: 'Producto 2',
          quantity: 2,
          price: 50,
          total: 100,
          ID_Header: '1',
        },
      ],
    }
    
 const show = false;
  const componentRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Imprimir</button>}
        content={() => componentRef.current}
      />
      
      <div ref={componentRef}  >
      <PrintComponent Details={dummyData} />
      </div>

    </div>
   
  );
};

export default BOrderview;
