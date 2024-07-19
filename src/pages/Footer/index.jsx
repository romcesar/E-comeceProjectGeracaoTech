import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.footer`

background-color: #1f87a7;
display: flex;
justify-content: center;

.div1{
    width: 86em;
    height: 100px;
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
            <div className='div1'>
                <h2>Footer</h2>
            </div>
        </StyleFooter>
    </>);
}

export default Footer;