import React from 'react';
import {Link} from 'react-router-dom';

function Articles() {
  return (
    <div>
        <h3 className="mt-3">Articles will be here</h3>
        <p className='flexbox justify-content-start ml-2 mt-3'>
          Budgeting is all about keeping your expenses low. We all want to get a grip on our finances, don't we?{"\n"}
          To live comfortably and within our means, to make sure we do not constantly end up in debt and possibly have some money left to take into our savings. 
          So what do we do to try to be sure that we get a good handle on our finances? We create a budget. Budgets provide a true image of what money comes in and how it is spent. But sometimes, creating a budget doesn't mean you already have a good handle on your finances.</p>
    <Link to='/'>Go Back</Link>
    </div>

  )
}

export default Articles