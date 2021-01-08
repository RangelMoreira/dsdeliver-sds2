
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepHeadres';
import './styles.css';
import { OrderLocationdata, Product } from './types';

function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  console.log(products);
  
  useEffect(()=>{
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
    
  }, []);

  return(
    <div className="orders-container">
      <StepsHeader/>
      <ProductList products={products}/>
      <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
    
  );
}

export default Orders;