import React from 'react';

import { 
  SalesGraphics_Sales, 
  SalesGraphics_SalesHeader, 
  SalesGraphics_SalesDetail 
} from "../../../interfaces/SalesGraphics"

const SalesGraphicsCard = (
  sales: SalesGraphics_Sales,
  salesHeader: SalesGraphics_SalesHeader,
  salesDetail: SalesGraphics_SalesDetail,
) => {
  return (
    <>
      <div key={sales._id}>
        <h5>
          {salesHeader._id}
        </h5>
        <p>
          {salesDetail._id}
        </p>
      </div>
    </>
  )
};

export default SalesGraphicsCard;