import React from 'react';
import './Product.css';
import bubuk_cabai from '../assets/bubuk_cabai.png';
import sambal_ayam from '../assets/sambal_ayam.png';
import chili_oil from '../assets/chili_oil.png';
import whatsapp from '../assets/logo_wa.png';
import shopee from '../assets/logo_shopee2.png';
import tokopedia from '../assets/logo_tokped.png';
import gmail from '../assets/logo_gmail.png';

const products = [
    {
        id: 1,
        image: bubuk_cabai,
        price: 'Rp10.000',
        location: 'Dawarblaondong, Mojokerto',
        name: 'Bubuk Cabai',
        weight: '100 gram',
        packaging: 'Food-grade, tahan lama'
    },
    {
        id: 2,
        image: chili_oil,
        price: 'Rp10.000',
        location: 'Dawarblaondong, Mojokerto',
        name: 'Chili Oil',
        weight: '100 gram',
        packaging: 'Food-grade, tahan lama'
    },
    {
        id: 3,
        image: sambal_ayam,
        price: 'Rp10.000',
        location: 'Dawarblaondong, Mojokerto',
        name: 'Sambal Ayam Suwir',
        weight: '100 gram',
        packaging: 'Food-grade, tahan lama'
    }
];

const Product = () => {
    return (
        <div className="product-display">
            <h2>Produk Unggulan BUMDes Bangeran</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <p className="product-price">{product.price}</p>
                            <p className="product-location">Diproduksi di: BUMDes Bangeran, Kec. {product.location}</p>
                            <h3 className="product-name">{product.name}</h3>
                            <p>Berat: {product.weight} &nbsp; | &nbsp; Kemasan: {product.packaging}</p>
                            <div className="icon-buttons">
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsapp} alt="WhatsApp" className="icon" />
                                </a>
                                <a href="https://shopee.co.id/" target="_blank" rel="noopener noreferrer">
                                    <img src={shopee} alt="Shopee" className="icon" />
                                </a>
                                <a href="https://tokopedia.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={tokopedia} alt="Tokopedia" className="icon" />
                                </a>
                                <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src={gmail} alt="Gmail" className="icon-gmail" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;