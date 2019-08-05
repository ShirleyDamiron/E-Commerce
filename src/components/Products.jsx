import React from 'react';
import products from '../products'

class Products extends React.Component {
    render () {
        return (
            <>
            <div>
                <h1>{products.caption}</h1>
            </div>
            </>
        )
    }
}
export default Products