import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpCircleFill } from "react-icons/bs";
import stylesFooter from './style.module.scss';
import logoa from '../../img/Logo.png';

const Footer = ({ footer, logo }) => {

    // if(document.querySelector('body').setAttribute('data-theme', 'dark')) {
    //     document.querySelector('.title').setAttribute('data-theme','dark')
    // }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const arrow = {
        initial: {
            y: 30,
        },
        animate: {
            y: -30,
            transition: {
                repeat: Infinity,
                duration: 3,
                ease: "linear",
            },
        },
    };

    return (
        <div className={stylesFooter.bg}>
            <div className={stylesFooter.footer}>
                <div className={stylesFooter.container}>
                    <div className={stylesFooter.leftSide}>
                        <img className={stylesFooter.title} src={logoa} alt="logo" />
                        <div className={stylesFooter.leftSideTitle}>
                            {footer[0].title}
                        </div>
                        <div className={stylesFooter.leftSideSubtitle}>
                            {footer[0].subtitle}
                        </div>
                        <div className={stylesFooter.leftSideLogoBlock}>
                            {logo.map(item =>
                                <div className={stylesFooter.leftSideLogo}>
                                    <div>
                                        {item.logo}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={stylesFooter.rightSide}>
                        <div className={stylesFooter.catohory}>
                            <div>
                                {footer.filter(item => item.id === 1).map(item => (
                                    <div key={item.id}>
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {item.items.map((subItem, index) => (
                                                <li key={index}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {footer.filter(item => item.id === 2).map(item => (
                                    <div key={item.id}>
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {item.items.map((subItem, index) => (
                                                <li key={index}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {footer.filter(item => item.id === 3).map(item => (
                                    <div key={item.id}>
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {item.items.map((subItem, index) => (
                                                <li key={index}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={stylesFooter.copy}>
                            {footer[4].copyright}
                        </div>
                    </div>

                </div>
                <motion.div
                    className={stylesFooter.arrow}
                    onClick={scrollToTop}
                    variants={arrow}
                    initial="initial"
                    animate="animate"
                >
                    <BsArrowUpCircleFill />
                </motion.div>
            </div>
        </div>
    )
}

export default Footer;