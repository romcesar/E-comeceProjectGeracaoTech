import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../../service/ProductService';
import { Image } from 'primereact/image';

// import logo1 from "./../../public/home-slide-1.jpeg"
// import logo2 from "./../../public/home-slide-2.jpeg"


const imagens = [
    {
        src: "/home-slide-0.png",
        altText: 'Slide 1',
        caption: 'Slide 1'
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

const Home = () => {
    const [products, setProducts] = useState([]);
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

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);

    const productTemplate = (product) => {
        console.log(product)
        return (
            <div className='flex'>
                <div className=" flex-1 line-height-1 flex-wrap">
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
                        <Button label='Ver Ofertas' className="bg-pink-500 p-button-raised"  />
                    </div>
                </div>
                <div className="w-5 pr-8 mr-8">
                    <Image  className="w-100 shadow-2" src={product.src} alt={product.altText} height='500' width="600"> </Image>
                </div>
               
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={imagens} numVisible={1} numScroll={2} responsiveOptions={responsiveOptions} className="custom-carousel" circularProgress
                autoplayInterval={5000} itemTemplate={productTemplate} />
        </div>
    );
}

export default Home;