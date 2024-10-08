import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import styled from 'styled-components';


const StyleProduct = styled.main`

/* margin:10px;
padding:10px;

.contentProduct{
    /* display: grid;
    background-color: #e61515;
   
    justify-content:space-around;
    align-items: center; */
} */
`;

const ProductCard = ({ props }) => {
  console.log(props)
  return (<div>
    <StyleProduct>
      {
        props.map((v, i) => {
          return (
            <div key={i} className='grid inline-block'>
              <div className='p-card p-4 m-4'>
                <div className=' p-card'>
                  <div hidden={v.hasOff} className=' text-left col'>
                  <Button className='' text size='small' style={{ color: 'black', backgroundColor: "#E7FF86", width: "80px", height: "30px" }} label='30% OFF' />
                  </div>
                  <div className='col'>
                  <Image className='' src={v.image} alt={v.title} width="200" height="150" />
                  </div>
                </div>
                <div className="text-left p-card-content line-height-1">
                  <span className='text-xs'>Tênis</span>
                  <p className="text-lg p-card-title">{v.name}</p>
                  <p className="line-through m-2 text-base inline p-card-text">${v.price}</p>
                  <p className="text-base font-bold inline p-card-text">${v.priceDiscount}</p>
                </div>
              </div>
            </div>
          )

        })

      }
    </StyleProduct>
  </div>)

}

export default ProductCard;