import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import "./index.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: 'contact',
    element: <Contact/>
  },
  {
    path: 'home',
    element: <Home/>
  }
])

root.render(
  <>
    <RouterProvider router={router}/>
  </>
);

/*
function Navigate()
{
  const path = window.location.pathname;
  switch(path){
    case "/" : return (<Home/>)
    
    case "/about" : return (<About/>)
    
    case "/home" : return (<Home/>)
    
    case "/contact" : return (<Contact/>)
    
    default: return <h1>404</h1>
  }
}*/
/*
function DisplayMobiles({imge, version, ram, price, color}){
  return(
    <div className="mble-card">
      <img src={imge}/>
      <h4>Galaxy {version} 5G  {ram} GB RAM </h4>
      <h5>₹ {price}</h5>
      <p>Color: {color}</p>
    </div>
  )
}
*/
/*function GreetCard(props)
{
  return(
    <div>
      <h3>Internship {props.type} Program {props.version} {props.date} {props.location}</h3>
    </div>
  )
}

root.render(
  <>
    <GreetCard type="cohort" version="5.0" date="Jan-2023" location="Online"/>
    <GreetCard type="cohort" version="6.0" date="Sep-2023" location="Online"/>
    <GreetCard type="guranty" version="1.0" date="Aug-2023" location="Offline"/>
  </>
);
*/
