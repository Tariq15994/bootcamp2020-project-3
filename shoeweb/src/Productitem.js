import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './shoe.json';
import './App.css';


export default function ProductItem() {
    let { id } = useParams();
    const shoe = Shoes[id];
    console.log(shoe)
    if (!shoe)
        return <div> <h3>peoduct not found</h3></div>

    return (
        <div className='product-item'>

            <div className="product-detail">
                {/* <h3>{shoe.name}</h3> */}
                <img src={shoe.img1} alt=' not found' height={550} width={500} />
                <img src={shoe.img2} alt='not found' height={550} width={500} />
            </div>
            <div className='product-desc-con'>
                <div className="product-desc" >
                    <p>Mens's Running Shoe</p>
                    <h2 class='h2'>{shoe.name}</h2>
                    <div id='price-con'>
                        <p id='price'>$200</p>
                        <p id='price-detail'>incl, of taxes and duties</p>
                    </div>
                </div>
                <button id='button'>Add to Bag</button>
                <h2 class='h2'>Detail:</h2>
                <div className='detail' >For the first time, the Air Max 96 2 returns with a 1-of-
                a-kind remake.Bringing back the era-defining sha
                pe first imagined by one of Nike's most decorated designers, it's an essential wardrobe staple that boasts an athletics-inspired look.The large Nike Air unit keeps the perfect amount of casual while adding lasting comfort.</div>
            </div>

        </div>
    )
}