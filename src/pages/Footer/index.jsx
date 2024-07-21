import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo-footer.svg';
import rede1 from '../../assets/facebook.svg';
import rede2 from '../../assets/instagram.svg';
import rede3 from '../../assets/twitter.svg';


const StyleFooter = styled.footer`

background-color: #000000;
display: flex;
color: #ffffff;
width: 100%;
height: auto;

.textcontent{
    text-align: justify;
}
`;

const Footer = () => {
    return (<>
        <StyleFooter>
            <div className='grid align-items-center justify-content-around '>
                <div className='col-2 grid '>
                    <div className='col-6'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='col-12 textcontent'>

                        vitae excepturi quo voluptatum cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </div>
                    <div className='col-12 flex justify-content-around'>
                        <div>
                            <img src={rede1} alt="rede1" />
                        </div>
                        <div>
                            <img src={rede2} alt="rede2" />
                        </div>
                        <div>
                            <img src={rede3} alt="rede3" />
                        </div>
                    </div>
                </div>
                <div className='col-2  w-2 grid'>
                    <div className='col-12 textcontent'>
                        vitae excepturi quo voluptatum cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum velit a quaerat
                        vitae excepturi quo voluptatum cupiditate?
                    </div>

                </div>
                <div className='col-4 grid'>
                    <div className='col-12 textcontent'>
                        Lorem ipsum dolor sit amet consectetur
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        vitae excepturi quo voluptatum cupiditate?
                    </div>
                </div>
            </div>
        </StyleFooter>
    </>);
}

export default Footer;