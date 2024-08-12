import styled from 'styled-components';
import logo from '../../assets/logo-footer.svg';
import rede1 from '../../assets/facebook.svg';
import rede2 from '../../assets/instagram.svg';
import rede3 from '../../assets/twitter.svg';

const StyleFooter = styled.footer`
color: white;
background-color: #000000;
width: 100%;
height: 500px;

ul{
    list-style: none;
    padding-left: 10px;
}

`;

const Footer = () => {
    return (<>
        <StyleFooter>
            <div className='flex'>
                <div className='flex-1 pl-8 pt-8 pr-4'>
                    <div className=' text-center p-3   font-bold'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className=' text-left text-center p-3 font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur
                        nullat ab officia modi culpa nobis.
                    </div>
                    <div className='grid col text-center p-3   font-bold'>
                        <div className='col-2'>
                            <a href="#">
                                <img src={rede1} alt="facebook" />
                            </a>
                        </div>
                        <div className='col-2'>
                            <a href="#">
                                <img src={rede2} alt="instagram" />
                            </a>
                        </div>
                        <div className='col-2'>
                            <a href="#">
                                <img src={rede3} alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex-1 p-7'>
                    <div className='col text-left text-center p-3  font-bold'>
                        <h3>Informação</h3>
                        <div >
                            <ul>
                                <li>
                                    <a href="#">Sobre Drip Store</a>
                                </li>
                                <li>
                                    <a href="#">Segurança</a>
                                </li>
                                <li>
                                    <a href="#">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Trabalhe conosco</a>
                                </li>
                                <li>
                                    <a href="#">Meus Pedidos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex-1 p-7'>
                    <div className='col text-left text-center p-3  font-bold'>
                        <div>
                            <h3>Categorias</h3>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">Camisetas</a>
                                </li>
                                <li>
                                    <a href="#">Calças</a>
                                </li>
                                <li>
                                    <a href="#">Bonés</a>
                                </li>
                                <li>
                                    <a href="#">Headphones</a>
                                </li>
                                <li>
                                    <a href="#">Tênis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex-1 p-7 pr-10'>
                    <div className='col text-left text-center p-3  font-bold'>
                        <div>
                            <h3>Contato</h3>
                        </div>
                        <div>
                            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                            <p>(85) 3051-3411</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className=' flex-inline  justify-content-center' >
                <hr style={{ width: "900px" }}></hr>
                <h4>@2024 Digital College</h4>
            </div>


        </StyleFooter >
    </>);
}

export default Footer;