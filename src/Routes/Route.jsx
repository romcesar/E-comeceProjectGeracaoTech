import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from "../pages/Home";
import Products from '../pages/Products';
import PageNotFound from '../pages/DefaultPageNotFound';
import LayoutPage from '../pages/LayoutPage';
import About from '../pages/About';
import Contact from '../pages/Contact';


const Routers = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutPage />}>
                    <Route index path='/Home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default Routers;