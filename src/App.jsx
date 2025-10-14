import React from 'react'
import Pizaa from './pizza.jsx'
import './data.js'
const App = () => {
  return (

<div className='container'>
<Header />
 <Menu />
 <Footer />
</div>
        

  );
}
 function Header(){
  return(
 <header className='header footer'>
     <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
   
    
}
function Menu(){
  return (
<main className='menu'>
   {/* <p>---------</p> */}
  <p className=''>OUR MENU</p>
  {/* <p>---------</p> */}
   <p>authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
   <div className='pizzas'>
 <Pizaa type="Focaccia" component="bread with italian olive oil and rosinnary" number={6} src="pizzas/focaccia.jpg"/>
  <Pizaa type="Pizza spinaci" component="tomato, mozarila, spinach, and recotta cheese" number={12} src="pizzas/funghi.jpg"/>
  <Pizaa type="Pizza solamino" component="tomato, mozarila, and pepperoni" number="SOLD OUT" src="pizzas/margherita.jpg"/>
   <Pizaa type="Pizza morgharita" component="tomato and morzarita" number={10}src="pizzas/prosciutto.jpg"/>
  <Pizaa type="Pizza funghi" component="tomato, mozarila, mushrooms and onion" number={12} src="pizzas/salamino.jpg"/>
  <Pizaa type="Pizza prosciutto" component="tomato, mozarila, and pepperoni" number={18} src="pizzas/spinaci.jpg"/>
   </div>
 
  </main>
  );
  
}
function Footer(){
  const hours = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;
  console.log(isOpen);
  return(
 <div className='footer'>

     <p>{new Date().toLocaleTimeString()}.we're open till 22:00. come visit us or order online.</p>
        <button className='btn'>order now</button>
  </div>
  );
 

}

 

export default App