import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo-header.svg';
import carrinho from '../../assets/mini-cart.svg';
import { Button  } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
        

const StyleHeader = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;

    .top-bar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 20px;
        font-weight: bold;
        color: #ff69b4;
        width: 212px;
        height: 44px;
        left: 41px;
        gap: 0px;
        opacity: 0px;
 }

    .carrinho {
        width: 33px;
        height: 23px;
        top: 47px;
        left: 1307px;
        gap: 0px;
        opacity: 0px;
        }    

    .search-bar {
    width: 559px;
    height: 35px;
    top: 34px;
    left: 384px;
    gap: 0px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0.04px;

    }

    .search-bar input {
        width: 80%;
        padding: 10px 40px 10px 10px; /* Adiciona espaço para o ícone */
       // border: 1px solid #474747; /* Cor da borda */
       // border-radius: 5px;
        background-color: #fcfcfc; /* Cor de fundo da barra de pesquisa */
    }
    .signup-button {
       color:#696969;
       background-color: #fdfdfd;
       text-decoration: underline;
    }

    .login-button {
        width: 114px;
        height: 40px;
        top: 44px;
        left: 1123px;
        gap: 0px;
        opacity: 0px;
        background: #C92071;
    }

    .nav-menu {
        display: flex;
        //align-content: start;
        justify-content: start;
        width: 100%;
        margin-top: 10px;
    }
    div ul {
        display: flex;
        list-style: none;
    }

    div ul li {
        margin-right: 20px;
    }

    div ul li a {
        color: #474747;
        text-decoration: none;
    }

    div ul li a.active {
        color: #fa58a9; /* Cor do link ativo */
        text-decoration: underline; /* Adiciona sublinhado */
    }

    div ul  li a:hover {
        color: black;
    }
    `;

const Header = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <StyleHeader>
            <div className="top-bar">
                <div className="logo">
                <Link to="/Home">
                    <img src={logo} alt="Digital Store" />
                    </Link>
                </div>
                <div className="search-bar">
                    <InputText  type="text" className="p-inputtext-sm" placeholder="Pesquisar produtos..." />
                </div>
                <div className="botao-cadastro">
                    <Button size="small" className="signup-button" label="Cadastre-se" link onClick={() =>  window.open('#')}/>
                </div>
                <div className="">
                    <Button size="small" label='Entrar' raised className="bg-pink-400 "></Button>
                </div>
                <div>
                    <Button size="small" className='flex-1' text >
                        <img className='relative bg' src={carrinho} />
                        <svg className='absolute top-0 right-0 bg' xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="20px" fill="#ec0a15"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312ZM360-288h240v-72H432v-84h96q29.7 0 50.85-21.15Q600-486.3 600-516v-84q0-29.7-21.15-50.85Q557.7-672 528-672H360v72h168v84h-96q-29.7 0-50.85 21.15Q360-473.7 360-444v156Z" /></svg>
                    </Button>
                </div>
            </div>
            <div className='nav-menu'>
                <ul >
                    <li>
                        <Link
                            to="/Home"
                            className={activeLink === 'Home' ? 'active' : ''}
                            onClick={() => handleLinkClick('Home')}
                        >
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Products"
                            className={activeLink === 'Produtos' ? 'active' : ''}
                            onClick={() => handleLinkClick('Produtos')}
                        >
                            <span>Produtos</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Categoria"
                            className={activeLink === 'Categorias' ? 'active' : ''}
                            onClick={() => handleLinkClick('Categorias')}
                        >
                            <span>Categorias</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Pedidos"
                            className={activeLink === 'Pedidos' ? 'active' : ''}
                            onClick={() => handleLinkClick('Pedidos')}
                        >
                            <span>Meus Pedidos</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </StyleHeader>
    );
}

export default Header;