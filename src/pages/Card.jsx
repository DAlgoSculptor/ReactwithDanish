import React from 'react'

const Card = (roja) => {
  return (
    <div className='parent'>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1762949857645-ed7b3e2e68cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1>{roja.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
        
    </div>
  )
}

export default Card