import React from 'react'

function Home(props) {
    const newUrl = '/brands/loreal-paris'
    const showProducts = React.useCallback((e) => {
        props.history.push(newUrl)
    }, [props])
    return <button type='button' onClick={showProducts} >Show products</button>
}

export default Home
