import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Home from './Home'
import About from './About'
import Travels from './Travels'
import Personal from './Personal'


function AllComponents(props) {
    const location = useLocation()
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/travels" element={<Travels />} />
                <Route path="/travels/details/:id" element={<About />} />
                <Route path="/personal" element={<Personal />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;