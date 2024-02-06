import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import asd from '../../img/ads.png';
import stylesMain from './style.module.scss';


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const asdimage = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: .1,
        },
    },
};

const Main = ({ upper, text, game }) => {

    const [isElementVisible, setIsElementVisible] = useState(false);

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setIsElementVisible(true);
        }
    }, [inView]);

    return (
        <div className={stylesMain.main}>
            <div className={stylesMain.container}>
                <div>
                    <div className={stylesMain.upperText}>
                        {upper.map(item =>
                            <div className={stylesMain.home}>
                                {item.home}
                            </div>
                        )}
                    </div>
                    <div>
                        {text.map(tx =>
                            <div className={stylesMain.mainText}>
                                <div className={stylesMain.mainTextTitle}>
                                    {tx.title}
                                </div>
                                <div className={stylesMain.mainTextDesc}>
                                    {tx.decs}
                                </div>
                                <div className={stylesMain.mainTextSim}>
                                    {tx.sim}
                                </div>
                            </div>
                        )}
                    </div>
                    <motion.div
                        className={stylesMain.games}
                        ref={ref}
                        variants={container}
                        initial={isElementVisible ? "hidden" : "visible"}
                        animate={isElementVisible ? "visible" : "hidden"}
                    >
                        {game.map(g =>
                            <motion.div
                                id='game'
                                className={stylesMain.gameCard}
                                variants={item}
                            >
                                <img className={stylesMain.gameImg} src={g.src} alt="gameImage" />
                                <h3 className={stylesMain.gameTitle}>
                                    {g.title}
                                </h3>
                                <div className={stylesMain.underTextGames}>
                                    <div className={stylesMain.user}>
                                        {g.user.logo} {g.user.name}
                                    </div>
                                    <div className={stylesMain.date}>
                                        {g.date.logo} {g.date.text}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
                <motion.div
                    className={stylesMain.asdImg}
                    variants={asdimage}
                    initial="initial"
                    animate="animate"
                >
                    <img src={asd} alt="asdImg" />
                </motion.div>

            </div>
        </div>
    )
}

export default Main;