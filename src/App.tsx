import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategoria'
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias'


function App() {
    return (
            <>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>  
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/Categorias" element={<ListaCategorias />} />
                        <Route path="/cadastroCategoria" element={<FormularioCategoria />} /> 
                        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
            </>
    )
}

export default App