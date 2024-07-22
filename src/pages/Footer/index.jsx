import styled from 'styled-components';
import logo from '../../assets/logo-footer.svg';
import rede1 from '../../assets/facebook.svg';
import rede2 from '../../assets/instagram.svg';
import rede3 from '../../assets/twitter.svg';

const StyleFooter = styled.footer`
color: white;
background-color: #000000;
display: flex;
justify-content: center;

.div1{
    width: 100%;
    height: 200px;
    align-content: center;
}
.div1 h2{
    color: #c7cacc;
    display: flex;
    align-content: center;
    justify-content: center;
}
`;

const Footer = () => {
    return (<>
        <StyleFooter>
            <div className='grid justify-content-center'>
                <div className='col-8 '>
                    <div className='col text-center p-3 border-round-sm bg-primary font-bold'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='col text-left text-center p-3 border-round-sm bg-primary font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur quo doloribus ducimus nulla? Explicabo quas
                        blanditiis aliquid rerum deserunt ab officia modi culpa nobis, sequi quasi dignissimos maxime dolores.
                    </div>
                    <div className='grid col text-center p-3 border-round-sm bg-primary font-bold'>
                        <div className='col-2'>
                            <img src={rede1} alt="facebook" />
                        </div>
                        <div className='col-2'>
                            <img src={rede2} alt="instagram" />
                        </div>
                        <div className='col-2'>
                            <img src={rede3} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='col-8 '>
                <div className='col text-left text-center p-3 border-round-sm bg-primary font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur quo doloribus ducimus nulla? Explicabo quas
                        blanditiis aliquid rerum deserunt ab officia modi culpa nobis, sequi quasi dignissimos maxime dolores.
                    </div>
                    
                    <div className='col text-left text-center p-3 border-round-sm bg-primary font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur quo doloribus ducimus nulla? Explicabo quas
                        blanditiis aliquid rerum deserunt ab officia modi culpa nobis, sequi quasi dignissimos maxime dolores.
                    </div>

                </div>

            </div>
            <div className='grid'>
                <div className='col-8'>
                <div className='col text-left text-center p-3 border-round-sm bg-primary font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur  
                        i quasi dignissimos maxime dolores.
                    </div>
                    
                    <div className='col text-left text-center p-3 border-round-sm bg-primary font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur quo 
                        modi culpa nobis, sequi quasi dignissimos maxime dolores.
                    </div>

                </div>

            </div>
        </StyleFooter>
    </>);
}

export default Footer;