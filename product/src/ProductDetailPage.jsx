import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment } from 'home/store/counterSlice';

const ProductDetailPage = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='container'>

        <div>Name: product</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  )
}

export default ProductDetailPage