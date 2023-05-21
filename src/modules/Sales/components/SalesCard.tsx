import React from "react";

import { Sales } from "../../../interfaces/Sales";

const SalesCard = (
  sales: Sales,
) => {
  return (
    <>
      <div key={sales.ID_USER}>
        <h5>
          {sales.ID_USER}
        </h5>
        <p>
          {sales.ID_USER}
        </p>
      </div>
    </>
  )
};

export default SalesCard;
