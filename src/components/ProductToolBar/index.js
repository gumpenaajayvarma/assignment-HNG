import * as React from 'react'
import { Col } from 'react-bootstrap'

function ProductToolBar(props) {
    // show sort and filter options for the list of products
    // we get sorts and filters as props.
    return <Col xs={12} style={{padding: '10px 0'}}>
        <p>{props.title} - {props.totalCount} products </p>
        <button className='toolbar-btn' onClick={}>Sort</button>
        <button className='toolbar-btn' onClick={}>filter</button>
    </Col>
}

export default ProductToolBar;
