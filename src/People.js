import React from 'react'
import {data} from './peoples'


import './index.css'

const People = () => {
const [peoples, setPeoples] = React.useState(data);
const [number, setNumber] = React.useState(5);

const removeItem =(id)=>{
 let newItem = peoples.filter((person)=> person.id !== id);
 setPeoples(newItem);
 setNumber(number - 1)
}
 return (
  <div className="container">

   <h1>{number} birthdays today</h1>

    {peoples.map((person)=>{
     const {id, img, name, age} = person;

     return<div className="items">

         <img src={img} alt="" />

         <div className="details">
          <h2>{name}</h2>
          <h3>{age}</h3>
         </div>
         <button className = "remove" onClick={()=> removeItem(id)}>remove me</button>

         </div>
    })}

    <button type="button" className="btn" onClick={()=> {setPeoples([]); setNumber([0])}}>Clear All</button>

  </div>
 )
}

export default People
