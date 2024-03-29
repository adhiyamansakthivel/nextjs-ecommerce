import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Image from 'next/image';
import { Store } from '../../utils/Store';

function ProductScreen() {
    const { state, dispatch } = useContext(Store);

    const router = useRouter();

    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find((x) => x.slug === slug);
    if(!product){
        return <div>Product Item not found</div>
    }

    const addToCartHandler = () => {
      const existingItem = state.cart.cartItems.find((x) => x.slug === product.slug);
      const quantity = existingItem ? existingItem.quantity + 1 : 1;
      if (product.countInStock < quantity) {
        alert('sorry. Product is out of stock');
        return;
      }
      dispatch({ type: 'CART_ADD_ITEM', payload: {...product, quantity} });
      router.push('/cart');
    }

  return (
    <Layout title={product.name}>
        <Link href="/">Home</Link><a>{'>'} {product.name}</a>
        <div className='grid md:grid-cols-4 md:gap-3'>
          <div className='md:col-span-2'>
            <Image 
                src={product.image}
                alt={product.name}
                height={640}
                width={640}
                layout="responsive"
            />
          </div>
          <div>
            <ul>
              <li>
                <h1 className='text-lg'>{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>{product.rating} of {product.numReviews} reviews</li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className='card p-5'>
              <div className='mb-2 flex justify-between'>
                <div>Price</div>
                <div>₹{product.price}</div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>Status</div>
                <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
              </div>
              <button className='primary-button w-full' onClick={addToCartHandler}>Add to cart</button>
            </div>
          </div>
        </div>
       
    </Layout>
  )
}

export default ProductScreen;