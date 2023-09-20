import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"
import "./About.css";

export default function About(){
    return(
        <div>
            <Navbar />
           <p className="about-text"> About Page </p> 
            <Footer/>
        </div>
    )
}