import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import styled from 'styled-components';
import ProductCard from '../../components/Produtos/ProductsCard';
import { ProductService } from '../../service/mokProduct/ProductService';


const StyleHome = styled.main`
padding: 0;
margin: 0;

.section1{
background-color:"#F5F5F5";
 width: 100%;
 padding: 40px;
}
.contentProduct{
    display: flex;
    background-color: #e61515;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
}

.contentSection2{
    background-image: url("/Rectangle-3761.png");
    width:300px;
    height:420px;
    margin: 15px;
}`;



const imagensSection1 = [
    {
        src: "/home-slide-0.png",
        altText: 'Slide 0',
        caption: 'Slide 0'
    },
    {
        src: "/home-slide-1.jpeg",
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: "/home-slide-2.jpeg",
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: "/home-slide-3.jpeg",
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: "/home-slide-4.jpeg",
        altText: 'Slide 4',
        caption: 'Slide 4'
    },
    {
        src: "/home-slide-5.jpeg",
        altText: 'Slide 5',
        caption: 'Slide 5'
    },
    {
        src: "/home-slide-6.jpeg",
        altText: 'Slide 6',
        caption: 'Slide 6'
    },
    {
        src: "/home-slide-7.jpeg",
        altText: 'Slide 7',
        caption: 'Slide 7'
    }
]
const imagensSection2 = [
    {
        src: "/collection-1.png",
        altText: 'collection1',
        caption: 'collection1'
    },
    {
        src: "/collection-2.png",
        altText: 'collection2',
        caption: 'collection2'
    },
    {
        src: "/collection-3.png",
        altText: 'colections3',
        caption: 'colections3',
    },
];

const Home = () => {
    //const [products, setProducts] = useState([]);
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
            <StyleHome>
                <div className='flex'>
                    <div className=" flex-1 mt-4 line-height-1 flex-wrap ">
                        <div className='text-orange-500 text-left text-center font-bold'>
                            Melhores ofertas personalizadas
                        </div>
                        <div className='text-4xl w-10 text-left text-center font-bold'>
                            <h1>Queima de estoque Nike 🔥</h1>
                        </div>
                        <div className='text-1xl w-8 text-left line-height-4 font-light '>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </div>
                        <div className='text-2xl w-5 text-left p-4'>
                            <Button label='Ver Ofertas' size='small' className="bg-pink-500 p-button-raised" />
                        </div>
                    </div>
                    <div className=" w-5 mt-2 w-5 pr-8 mr-8 s">
                        <Image style={{ backgroundColor: "#F5F5F5" }} className="w-100" src={product.src} alt={product.altText} height='400' width="600"> </Image>
                    </div>
                </div>
            </StyleHome>
        );
    };
    const productSection2 = (product) => {
        return (
            <StyleHome>
                <div className="flex-inline">
                    <div className='grid justify-content-center'>
                        <h2 className='col-6  text-dark-500 font-bold'>Coleções em destaque</h2>
                        <div className=' grid'>
                            <div className='col-4 contentSection2'>
                                <Button className='col-4 ' text size='small' style={{ color: 'black', backgroundColor: "#E7FF86", width: "80px", height: "30px" }} label='30% OFF' />
                                <Image className='col pl-8' src="/collection-1.png"
                                    alt={product.altText} height='130'
                                    width="210" />
                                <Button size='small' className='col-6' style={{ backgroundColor: "#ffffff", color: "#C92071", width: "80px", height: "30px" }} text label='Comprar'></Button>
                            </div>
                            <div className='col-4 contentSection2'>
                                <Button className='col-4 ' text size='small' style={{ color: 'black', backgroundColor: "#E7FF86", width: "80px", height: "30px" }} label='30% OFF' />

                                <Image className='col pl-8' src="/collection-2.png"
                                    alt={product.altText} height='130'
                                    width="210" />
                                <Button size='small' className='col-6' style={{ backgroundColor: "#ffffff", color: "#C92071", width: "80px", height: "30px" }} text label='Comprar'></Button>
                            </div>
                            <div className='col-4 contentSection2'>
                                <Button className='col-4 ' text size='small' style={{ color: 'black', backgroundColor: "#E7FF86", width: "80px", height: "30px" }} label='30% OFF' />
                                <Image className='col pl-8' src="/collection-3.png"
                                    alt={product.altText} height='130'
                                    width="210" />
                                <Button size='small' className='col-6' style={{ backgroundColor: "#ffffff", color: "#C92071", width: "80px", height: "30px" }} text label='Comprar'></Button>
                            </div>

                        </div>
                    </div>
                </div>
            </StyleHome>
        );
    };

    return (
        <StyleHome>
            <div style={{ backgroundColor: "#F5F5F5" }} className="card">
                <Carousel value={imagensSection1} numVisible={1} numScroll={2} responsiveOptions={responsiveOptions} className="custom-carousel" circularProgress
                    autoplayInterval={5000} itemTemplate={productSection1} />
            </div>
            <div className='card'>
                <Carousel value={imagensSection2} numVisible={3} numScroll={0} orientation="vertical"
                    itemTemplate={productSection2} />
            </div>
            <div className='block'>
                <div className='flex-1'>
                    <h2>Coleções em destaque</h2>
                </div>
                <div className='flex-1 '>
                    <a className='' href="#">
                        <Image className='' src='/sesction3-1.png' height='100'
                                    width="120" ></Image>
                    </a>
                    <a className='' href="#">
                        <Image src='/sesction3-2.png' height='100'
                                    width="100"></Image>
                    </a>
                    <a href="#">
                        <Image src='/sesction3-3.png' height='100'
                                    width="100"></Image>
                    </a>
                    <a href="#">
                        <Image src='/sesction3-4.png' height='100'
                                    width="100"></Image>
                    </a>
                    <a href="#">
                        <Image src='/sesction3-5.png' height='100'
                                    width="100"></Image>
                    </a>
                </div>
            </div>
            <div >
                <ProductCard  props={ProductService}></ProductCard>
                
                {/* <ProductCard image ={Produtos.image} name={Produtos.name} title={"imagem1"} priceDiscount={Produtos.priceDiscount} price={Produtos.price}></ProductCard> */}

            </div>
        </StyleHome>
    );
}

export default Home;