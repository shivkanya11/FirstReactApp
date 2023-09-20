import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"
import "./Home.css";

export default function Home(){
    return(
        <div>
            <Navbar />
           <p className="about-text"> Home Page </p> 
            <Footer/>
        </div>
    )
}