import * as React from 'react'

function ProductToolBar(props) {
    // show sort and filter options for the list of products
    // we get sorts and filters as props.
    return <div xs={12} style={{padding: '10px 0'}}>
        <p>{props.title} - {props.totalCount} products </p>
        <button className='toolbar-btn'>Sort</button>
        <button className='toolbar-btn'>filter</button>
    </div>
}

export default ProductToolBar;
