import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Heder";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Service from "./pages/Services/Services"
import ServiceID from "./pages/ServiceID/ServiceID"
import Price from "./pages/Price/Price"
import NewsLetter from "./pages/NewsLetter/NewsLetter";
import NewsLetterId from "./components/NewsLetterId/NewsLetterId"
import Footer from "./components/Footer/Footer";


export default function App () {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="medecouvrir" element={<About />} /> 
                <Route path="prestations" element={<Service />} />
                <Route path="prestations/:id" element={<ServiceID />} />
                <Route path="tarifs" element={<Price />} />
                <Route path="newsletter" element={<NewsLetter />} />
                <Route path="newsletter/:id" element={<NewsLetterId />} />
            </Routes>
            <Footer />
        </div>    
    )
}
