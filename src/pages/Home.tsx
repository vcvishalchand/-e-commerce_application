import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Container, CssBaseline
} from '@mui/material';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Banner from '../component/Banner';
import ItemList from '../component/ItemList';
import getProductData from '../APIcall/service';
import { Spiner } from '../component/Spiner';
import { Product } from '../type/types';
import { products } from '../mockdata/data';
import { json } from 'stream/consumers';
import { SEE_MORE } from '../constant/constant';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    // const [products, setProducts] = useState<Product[]>([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getProductData();
    //             setLoading(false);
    //             setProducts(data);
    //         } catch (error) {
    //             // Handle error (e.g., show an error message)
    //             console.log('Error', error)
    //         }
    //     };

    //     fetchData();
    // }, []);


    const handleSearch = (event: any, searchQuery: any) => {
        if (searchQuery) {
            navigate('/product', { state: searchQuery });
        }
    }

    return (
        <>  <CssBaseline />
            <Header handleSearch={handleSearch} />
            <Banner title="Special Offer!" />
            <Container>
                {false ? <Spiner /> : <ItemList items={products} btnLabel={SEE_MORE} />}
            </Container>
            <Footer />
        </>
    );
};

export default Home;
