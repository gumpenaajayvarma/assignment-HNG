import React from 'react'

function Home(props) {
    const newUrl = '/brands/loreal-paris'
    const showProducts = React.useCallback((e) => {
        props.history.push(newUrl)
    }, [props])
    return <div style={{position: 'absolute', top: '10em', width: '100%', textAlign: 'center'}}>
        <button type='button' onClick={showProducts} >Show products</button>
    </div>
}

export default Home
