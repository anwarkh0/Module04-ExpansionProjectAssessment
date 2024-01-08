import Dashboad from '../Pages/Dashboard/Dashboad';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom';
import Product from '../Pages/Product/Product'


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboad />} />
            <Route path="/product/:id" element={<Product />} />

            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;