import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"
import "./Contact.css";

export default function Contact(){
    return(
        <div>
            <Navbar />
           <p className="about-text"> Contact Page </p> 
            <Footer/>
        </div>
    )
}