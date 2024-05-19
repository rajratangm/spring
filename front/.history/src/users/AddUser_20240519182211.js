import React from 'react'

const AddUser = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Register User</h2>
                <div className='mb-3'>
                    <label htmlFor="Name" className='form-label'>
                        Name
                    </label>
                    <input
                    type={'text'}
                    placeholder='enter your name'
                    name='name'
                    className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="username" className='form-label'>
                        UserName
                    </label>
                    <input
                    type={'text'}
                    placeholder='enter your username'
                    name='username'
                    className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>
                        Email
                    </label>
                    <input
                    type={'text'}
                    placeholder='enter your name'
                    name='name'
                    className='form-control'
                    />
                </div>
            </div>

        </div>
      
      
    </div>
  )
}

export default AddUser
