import React, { useRef }  from 'react';
import PrintComponent from '../../printModule/views/Print';
import ReactToPrint from 'react-to-print';
import { BOrders, Status } from '../../../interfaces/BOrders';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Sales,Detail } from '../../../interfaces/Sales';
import { getAllSalesDetailsById, getSalesDetailById, getSalesHeaderById } from '../../../api/SalesGraphics';

import { getUserById } from '../../../api/users';
import { User } from '../../../interfaces/User';
import { Recipes } from '../../../interfaces/Recipes';
import { getRecipeById } from '../../../api/Recipes';
import { Invoice } from '../../../interfaces/invoice';

const BOrderview = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [invoice, setInvoice] = React.useState<Invoice>();
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
    const getInvoniceValues = async (id: string) => {
      try {
        setLoading(true);
        const saleHeader: Sales = await getSalesHeaderById(id);
        console.log(saleHeader);
        const saleDetails: Detail[]  = await getAllSalesDetailsById(id);
        console.log(saleDetails);
        let productsRes: Recipes[] = []; 

        await saleDetails.forEach(async (detail) => {
          
          const product: Recipes = await getRecipeById(detail.ID_recipe);
          
          productsRes.push(product);
        });
        
        const user: User = await getUserById(saleHeader.ID_USER);
        const invoice: Invoice = {
          sale : saleHeader,
          user: user,
          details: saleDetails,
          recipes: productsRes

        }
        setInvoice(invoice);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  
    const { id } = useParams();

    useEffect(() => {
      setLoading(true);
      if(id){
        getInvoniceValues(id);
      }
      else {
        setLoading(false);
        navigate('/history');
      
      }
    }, []);

 const show = false;
  const componentRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      
    
    <div>
      <ReactToPrint
        trigger={() => <button>Imprimir</button>}
        content={() => componentRef.current}
      />
      
      <div ref={componentRef}  >
      <PrintComponent Details={invoice} />
      </div> 

    </div>
    
  
  </div>
  );
};

export default BOrderview;


