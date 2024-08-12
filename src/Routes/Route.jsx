import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "../pages/Home";
import Products from '../pages/Products/index';
import ProductView from '../pages/ProductViewPage/ProductViewPage';
import PageNotFound from '../pages/DefaultPageNotFound';
import LayoutPage from '../pages/LayoutPage';
import About from '../pages/Pedidos';
import Categoria from '../pages/Categoria';
import Pedidos from '../pages/Pedidos';




const Routers = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutPage />}>
                    <Route index path='/Home' element={<Home />} />
                    {/* <Route path='/About' element={<About />} /> */}
                    {/* <Route path='/Categoria' element={<Categoria />} /> */}
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Products/:id' element={<ProductView />} />
                    {/* <Route path='/Pedidos' element={<Pedidos />} /> */}
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default Routers;