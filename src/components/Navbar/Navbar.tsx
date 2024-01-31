import { Link } from "react-router-dom"

function Navbar() {
    // Criamos uma constante que recebe o hook useNavigate, para podermos redirecionar o usuário


    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Farmatia</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar