import React from 'react'


function AddExpenseForm({handleSubmit, handleChange, formData}) {
  
  return (
    <form onSubmit={handleSubmit} >
        <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='name'>Name</label>
                    <input onChange={handleChange} name='name' required='required' type='text' className='form-control' id='name' value={formData.name}></input>

                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor ='cost'>Cost</label>
                    <input onChange={handleChange} name = 'cost'required='required' type='text' className='form-control' id='cost' value={formData.cost}></input>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
    </form>
    
  )
}

export default AddExpenseForm