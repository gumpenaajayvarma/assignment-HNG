import * as React from 'react'

function Product(props) {
    const {deepLinkUrl, skuImageUrl, skuName, defaultPrice} = props

    return <a href={deepLinkUrl}>
        <div className='product-toolbar'></div>
        <div className='product-img'>
            <img src={skuImageUrl} alt='' />
        </div>
        <p className='product-name'> {skuName} </p>
        <div className='product-price'> {defaultPrice} </div>
    </a>
}

export default React.memo(Product);
