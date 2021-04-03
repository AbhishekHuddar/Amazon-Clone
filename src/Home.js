import React from 'react';
import './Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                className="home__image" 
                src="https://wallpaper.dog/large/17282149.jpg" 
                alt="" 
                />

                

                <div className="home__row">
                <Product 
                    id="4903850"
                    title="Come, Fly the World"
                    price={19.9}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91mV69zlqqL.jpg"
                    
                     />

                    <Product
                    id="23445930"
                    title="Ortizon Bluetooth Wireless Speaker- 24W Stero Sound"
                    price={34.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81kvd3hsuqL._AC_UL480_FMwebp_QL65_.jpg"
                   
                     />
                </div>

                <div className="home__row">
                
                <Product
                id="3254354345"
                    title="Under Armour Adult Backpack, Academy Blue"
                    price={24.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/6183M66pKEL._AC_UL480_FMwebp_QL65_.jpg"
                    
                     />

                    <Product
                    id="48028561"
                    title="FitBit Surge Fitness Superwatch"
                    price={189.49}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61fzD-cU2ML._AC_UL480_FMwebp_QL65_.jpg"
                    
                     />
                     
                    <Product
                    id="844796587"
                    title="Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel"
                    price={1196.49}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/511kDQY-kgL.jpg"
                    />
                </div>

                

                <div className="home__row">
                    <Product
                    id="49314677"
                    title="LG OLED65CXPUA Alexa Built-in CX 65-inch 4K Smart OLED TV (2020 Model)"
                    price={1640.99}
                    rating={3}
                    image="https://www.lg.com/us/images/tvs/md07500045/gallery/medium01.jpg"
                        />
                </div>
                </div>
        </div>
    );
}

export default Home;
