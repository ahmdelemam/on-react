import React from 'react';
import Dealer from './Dealer';

export default function DealerList({ dealers }) {
  return (
    <main role="main" className="container">
    <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
      <div className="lh-100 w-100">
        <h6 className="mb-0 lh-100border-bottom border-gray">Dealers</h6>
        <div className="my-3 p-3 bg-white rounded box-shadow">
          {
            dealers.map(dealer => {
              return <Dealer key={dealer.id} dealer={dealer}/>
            })
          }
        </div>
      </div>
    </div>
    </main>
  )
}
