import React from 'react'

import { History } from '../../../interfaces/history'

const HistoryCard = (
    history: History
) => {
  return (
    <>
    <div key={history._id}>
        <h5>{history.ID_USER}</h5>
        <p>{history.TransferNumber}</p>
    </div>
        <br />
    </>
  )
}

export default HistoryCard
