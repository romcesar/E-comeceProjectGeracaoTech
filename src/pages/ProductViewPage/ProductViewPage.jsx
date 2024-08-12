import { BreadCrumb } from 'primereact/breadcrumb';
import styled from 'styled-components';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import ProductCard from '../../components/Produtos/ProductsCard';
import { ProductService } from '../../service/mokProduct/ProductService';


const StyleHeader = styled.main`
   // background-color: #ececec;
`;

const imagensSection1 = [
    {
        id: 1,
        src: "/home-slide-0.png",
        altText: 'Slide 0',
        caption: 'Slide 0',
        cor: '#E2E3FF'
    },
    {
        id: 2,
        src: "/home-slide-0.png",
        altText: 'Slide 0',
        caption: 'Slide 0',
        cor: '#FFE8BC'
    },
    {
        id: 3,
        src: "/home-slide-0.png",
        altText: 'Slide 0',
        caption: 'Slide 0',
        cor: '#FFC0BC'

    },
    {
        id: 4,
        src: "/home-slide-0.png",
        altText: 'Slide 0',
        caption: 'Slide 0',
        cor: '#DEC699'
    },
    {
        id: 5,
        src: "/home-slide-0.png",
        altText: 'Slide 0',
        caption: 'Slide 0',
        cor: '#E8DFCF'
    },
]

const ProductViewPage = () => {
    const items = [{ label: 'Produtos', url: '/Products' }, { label: 'Tênis' }, { label: 'Nike' }, { label: 'Tênis Nike Revolution 6 Next Nature Masculino' }];
    const home = { icon: 'pi pi-home', url: '/Home' }

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];




    const productSection1 = (product) => {
        console.log(product);
        return (

            <div className='flex'>
                <div style={{ width: "120.73px", height: "471px", backgroundColor: "#E2E3FF" }} className=" flex-1 ">
                    <Image className="" src={product.src} alt={product.altText} height='400' width="600"> </Image>
                </div>
            </div>
        );
    };

    return (<>
        <BreadCrumb model={items} home={home} />
        <div className='text-left flex p-8'>
            <div className="col card">
                <Carousel

                    value={imagensSection1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel" circularProgress
                    numVisible={1} numScroll={4}
                    itemTemplate={productSection1} />
            </div>
            <div>
                <h2>Tênis Nike Revolution
                    6 Next Nature Masculino
                </h2>
                <p>Casual | Nike | REF:38416711</p>
                <div>
                    <Image className='pr-5' src='/Stars.png'></Image>
                    <Image src='/notaAvaliacao.png' alt='img1'></Image>
                </div>
                <div className='flex'>
                    <p className='col'>R$ <b className='text-4xl'> 219,00</b></p>
                    <p className='col text-gray-400 pr-5 text-base line-through'> 219,00</p>
                </div>
                <p className='text-gray-400 font-bold'>Descrição do produto</p>
                <span className='pb-6 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </span>
                <div className='mt-4'>
                    <span className='m-2 font-bold text-gray-400'>Tamanho</span>
                    <div>
                        <Button className='text-black-alpha-90 m-2' style={{ backgroundColor: "#ffffff", borderStyle: "none" }} label='39' />
                        <Button className='text-black-alpha-90 m-2' style={{ backgroundColor: "#ffffff", borderStyle: "none" }} label='40' />
                        <Button className='m-2' style={{ backgroundColor: "#C92071", borderStyle: "none" }} label='41' />
                        <Button className='m-2 text-black-alpha-90' style={{ backgroundColor: "#ffffff", borderStyle: "none" }} label='43' />
                    </div>
                </div>
                <div className='mt-4'>
                    <span className='font-bold text-gray-400'>Tamanho</span>
                    <div>
                        <Button size='small' className='m-2' rounded outlined style={{ backgroundColor: "#6FEEFF" }} />
                        <Button size='small' className='m-2' rounded outlined style={{ backgroundColor: "#FF6969" }} />
                        <Button size='small' className='m-2' rounded outlined style={{ backgroundColor: "#5E5E5E" }} />
                        <Button size='small' className='m-2' rounded outlined style={{ backgroundColor: "#6D70B7" }} />
                    </div>
                </div>
                <div className='m-4'>
                    <Button style={{ backgroundColor: "#FFB31F" }} className='rounded' label='Comprar'></Button>
                </div>

            </div>
        </div>
        <div >
            <h2 className='text-left m-4'>Produtos Relacionados</h2>

            <ProductCard props={ProductService}></ProductCard>
        </div>


    </>)
}

export default ProductViewPage;
