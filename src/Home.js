import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""  className="home__image"/>
                
         <div className="home__row">
              <Product id="12321341"
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={39999.00 }
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71SxKcUeSDL._SL1500_.jpg"/>
            <Product
            id="49538094"
            title="Nike Men's Dilatta Leather Sneakers"
            price={4797.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61Lh9cacT8L._UL1500_.jpg"
          />
           </div>
           <div className="home__row">
           <Product
            id="4903850"
            title="HONOR Magic Watch 2 (42 mm, Agate Black) Always On AMOLED Display"
            price={8999.00 }
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81FzzY-c4eL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Blue)"
            price={5999.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61WhKTrn3kL._SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 512GB) - Silver (2nd Generation)"
            price={112900.00 }
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81gEWsabIYL._SL1500_.jpg"
          />

           </div>
           <div className="home__row">
           <Product
            id="90829332"
            title="PS4 1TB Slim Bundled with Spider-Man, GTaSport, Ratchet & Clank And PSN 3Month"
            price={ 27990.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BA7WnJDWL._SL1500_.jpg"
          />
           </div>
           </div>
          
           
           

        </div>
    )
}

export default Home
