import React, { useState } from 'react'

const AddUser = () => {
    const {user, setUser}= useState({
        name:"",
        uesrname:"",
        email:""
    })

    const {name, username,email} = user;

    const onInputChange=(e)=>{
        setUser(...user,{e.target.name}:e.target.value)

    }
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
                    value= {name}
                    onChange={(e)=>onInputChange(e)}
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
                    value= {username}
                    onChange={(e)=>onInputChange(e)}

                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>
                        Email
                    </label>
                    <input
                    type={'text'}
                    placeholder='enter your email'
                    name='email'
                    className='form-control'
                    value= {email}
                    onChange={(e)=>onInputChange(e)}

                    />
                </div>
                <button type='submit' className='btn btn-outline-primary'> submit</button>
                <button type='submit' className='btn btn-outline-danger mx-2'> cancel</button>

            </div>

        </div>
      
      
    </div>
  )
}

export default AddUser
