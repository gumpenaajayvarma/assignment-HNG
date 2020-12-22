import React from 'react'
import { Col } from 'react-bootstrap';
import Product from './Product';

function ProductsList(props) {
    const {products} = props

    return <ul className='flex-container-horizontal'>
        {
            products.map(p => {
                return <li className='product-container' key={p.skuId}>
                    <Col xs={6}>
                        <Product
                            deepLinkUrl={p.deepLinkUrl}
                            skuImageUrl={p.skuImageUrl}
                            skuName={p.skuName}
                            defaultPrice={p.defaultPrice}
                        />
                    </Col>
                </li>
            })
        }
    </ul>
}

export default ProductsList;
