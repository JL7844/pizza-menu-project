import React from 'react'
// import Pizza from './pizza.jsx'
import pizzaData from './data.js'
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
  const pizzas = pizzaData;
  return (
<main className='menu'>
  <p className=''>OUR MENU</p>
   {pizzas.length > 0 ?  <>
   <p>authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
   <ul  className='pizzas'> 
    {pizzas.map(pizza => (
       <Pizza pizzaObj = {pizza}/>
      
    ))}
    
   </ul> 
   </>: <p className='notWorking'>we are still working on the menu. come back later!!!</p>}
 
  </main>
  );
  
}
function Pizza({pizzaObj}){
  // if(pizzaObj.soldOut) return null;
 
  return(
      <li className ={`pizza ${pizzaObj.soldOut ? 'sold-out': ''}`} >
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
             {/* {pizzaObj.soldOut ? (<span>SOLD OUT</span>) : <span>{pizzaObj.price}</span>} */}
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </div>
       
        
    </li>
  );

}
function Footer(){
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return(
 <div className='footer'>

     {isOpen ?
       <Order open={openHour} close={closeHour}/> : <p className='notWorking'>we're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
          
          }
        
  </div>
  );
 

}

function Order({close, open}){
  return (
<div className='order'>
            <p>
            we're open from {open}:00 to {close}:00. come visit us or order online.
            </p>
              <button className='btn'>order now</button>
        </div>

  );
 
}
 

export default App