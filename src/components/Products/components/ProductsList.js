import React from 'react'
import Product from './Product';

function ProductsList(props) {
    const {products} = props

    return <ul className='flex-container-horizontal'>
        {
            products.map(p => {
                return <li className='product-container' key={p.skuId}>
                    <div >
                        <Product
                            deepLinkUrl={p.deepLinkUrl}
                            skuImageUrl={p.skuImageUrl}
                            skuUrlLink={p.skuUrlLink}
                            skuName={p.skuName}
                            defaultPrice={p.defaultPrice}
                        />
                    </div>
                </li>
            })
        }
    </ul>
}

export default ProductsList;
