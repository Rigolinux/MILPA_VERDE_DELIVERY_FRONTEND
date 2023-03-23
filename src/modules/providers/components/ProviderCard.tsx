import React from 'react'

import { Provider } from '../../../interfaces/provider';

const ProviderCard = (
    provider: Provider
) => {
  return (
    <>
    <div key={provider._id}>
        <h5>{provider.ProviderName}</h5>
        <p>{provider.mail}</p>
    </div>
        <br />
    </>
  )
}

export default ProviderCard