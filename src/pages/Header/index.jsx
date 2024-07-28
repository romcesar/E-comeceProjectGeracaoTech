import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo-header.svg';
import carrinho from '../../assets/mini-cart.svg';

const StyleHeader = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
        border: 1px solid #474747; /* Cor da borda */
        border-radius: 5px;
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
        list-style: none;
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 10px;
    }

    .nav-menu li {
        margin-right: 20px;
    }

    .nav-menu li a {
        color: #474747;
        text-decoration: none;
    }

    .nav-menu li a.active {
        color: #fa58a9; /* Cor do link ativo */
        text-decoration: underline; /* Adiciona sublinhado */
    }

    .nav-menu li a:hover {
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
                    <img src={logo} alt="Digital Store" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Pesquisar produtos..." />
                </div>
                <div className="botao-cadastro">
                    <button className="btn signup-button">Cadastre-se</button>
                </div>
                <div className="botao-entrar">
                    <button className="btn login-button">Entrar</button>
                </div>
                <div className="carrinho">
                    <img src={carrinho} />
                </div>
            </div>
            <ul className="nav-menu">
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
                        to="/Produtos"
                        className={activeLink === 'Produtos' ? 'active' : ''}
                        onClick={() => handleLinkClick('Produtos')}
                    >
                        <span>Produtos</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Categorias"
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
        </StyleHeader>
    );
}

export default Header;