import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleHeader = styled.header`
display: flex;
background-color: #0e5b72;

.div1{
    width:100%;
    height: 200px;
    align-content: center;
}
.div1 ul{
    list-style: none;
    display: flex;
    gap: 30px;
    justify-content: flex-start; 
}
.div1 h1{
    color: #c7cacc;
    display: flex;
    align-content: center;
    justify-content: center;
}
.div1 ul li span{
    color: #a19e9e;
}
.div1 ul li span:hover{
    color: black;
}
`;


const Header = () => {
    return (<>
        <StyleHeader>
            <div className='div1'>
                <h1>Bem-vindo</h1>
                <ul>
                    <li>
                        <Link to={"/Home"}><span>Home</span></Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}><span>Contato</span></Link>
                    </li>
                    <li>
                        <Link to={"/About"}><span>Sobre</span></Link>
                    </li>
                    <li>
                        <Link style={{ color: "gray" }} to={"/Products"}><span>Produtos</span></Link>
                    </li>
                </ul>
            </div>
        </StyleHeader>
    </>);
}

export default Header;
