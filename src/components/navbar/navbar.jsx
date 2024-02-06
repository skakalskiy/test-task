import React from 'react'
import Theme from '../switchTheme/theme';
import stylesNav from './style.module.scss';

const Navbar = ({ menu, logo }) => {
    return (
        <div className={stylesNav.nav}>
            <div className={stylesNav.container}>
                <div className={stylesNav.leftSide}>
                    {menu.map(item =>
                        <div className={stylesNav.item}>
                            <div>{item.logo}</div>
                            <a>{item.title}</a>
                        </div>
                    )}
                </div>
                <div className={stylesNav.rightSide}>
                    <div className={stylesNav.logosS}>
                        {logo.map(item =>
                            <div className={stylesNav.logo}>
                                <div>
                                    {item.logo}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={stylesNav.theme}>
                        <Theme />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;