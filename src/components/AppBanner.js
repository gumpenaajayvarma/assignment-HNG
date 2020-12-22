import * as React from 'react'

function AppBanner(props) {

    const { appMainMenu, appName, isAlwaysTop } = props
    return <header>
        <nav className={isAlwaysTop ? 'nav-fixed-top' : null}>
            <button className='menu-btn'>Menu</button>
            <span className='app-logo-name'>
                {appName}
            </span>
        </nav>
    </header>
}

export default AppBanner;
