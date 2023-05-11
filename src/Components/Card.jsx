import React from 'react'
import '../App.css'
function Card(props) {
  return (
    <>
    <div className="cards">
      <div className="card " >
  <img src="image1.jpg"  alt="image"/>
  <div className="card-body">
    <h5 className="card-title">image</h5>
    <p className="card-text">here we have multiple card</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    </>
  )
}

export default Card
