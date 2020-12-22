import * as React from 'react'
import { connect } from 'react-redux'
import ProductToolBar from '../ProductToolBar'
import ProductsList from './components/ProductsList'
import {initProducts} from '../../actions/init'
import Loader from '../common/Loader'
import { urlDecoder } from '../../middleware/utils'

function Products(props) {
    const { title, products, aggregations, sorts, totalCount } = props

    React.useEffect(() => {
        // make api call to fetch data using action.
        props.initProducts('loreal-paris')
    }, [])

    return products.length ? <div className='main-container'>
        <div className='product-toolbar-fixed-top'>
            <ProductToolBar title={title} filters={aggregations} sorts={sorts} totalCount={totalCount} />
        </div>
        <div className='products-list' style={{marginTop: '5px'}}>
            <ProductsList
                products={products}
            />
        </div>
    </div>
    : <Loader />
}

const mapStateToProps = (state, props) => {
    const productsData = state.products || ''
    const { title, products=[], searchQuery='', aggregations, sorts, totalCount } = productsData
    return {
        title,
        products,
        searchQuery, 
        aggregations,
        sorts,
        totalCount
    }
}

const mapDispatchToProps = {
    initProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
