import React from 'react';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from 'framer-motion';
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import 'react-circular-progressbar/dist/styles.css';
import stylesBanner from './style.module.scss';
import girl from '../../img/girla.png';


const Banner = ({ btnText, under, searchBlock, colLog }) => {

    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    }

    const handlerClick = () => {
        setIsOpen(!isOpen);
    }

    const banner = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.5,
                staggerChildren: .1,
            },
        },
    };


    return (
        <div className={stylesBanner.banner}>
            <div className={stylesBanner.colLogContainer}>
                {colLog.map(item =>
                    <div className={stylesBanner.colLog}>
                        {item.logo}
                    </div>
                )}
            </div>
            <motion.div
                className={stylesBanner.container}
                variants={banner}
                initial="initial"
                animate="animate"
            >
                <div className={stylesBanner.bannerImg}>
                    <div>
                        <div className={stylesBanner.leftSide}>
                            <div className={stylesBanner.animeG}>
                                <img src={girl} alt="AnimeGirl" />
                            </div>
                            <div className={stylesBanner.btnPlText}>
                                <div className={stylesBanner.title}>
                                    {btnText[3].title}
                                </div>
                                <div className={stylesBanner.buttons}>
                                    <button className={stylesBanner.buttonOS}>
                                        {btnText[0].logo}
                                        {btnText[0].title}
                                    </button>
                                    <button className={stylesBanner.buttonOS}>
                                        {btnText[1].logo}
                                        {btnText[1].title}
                                    </button>
                                    <button className={stylesBanner.buttonPC}>
                                        {btnText[2].logo}
                                        {btnText[2].title}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={stylesBanner.rate}>
                        <div className={stylesBanner.progr}>
                            <CircularProgressbar
                                value={rating}
                                minValue={0}
                                maxValue={10}
                                text={rating}
                                styles={buildStyles({
                                    pathColor: 'red',
                                    trailColor: '#00000080',
                                    textSize: '40px',
                                    textColor: 'white',
                                })}
                            />
                        </div>
                        <div>
                            <div className={stylesBanner.players}>
                                {btnText[3].players}
                            </div>
                            <div className={stylesBanner.vot}>
                                {btnText[3].vot}
                            </div>
                            <div className={stylesBanner.rates}>
                                {btnText[3].rate} {rating}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={stylesBanner.underBlock}>
                    <div className={stylesBanner.underText}>
                        {under[0].title}
                        {under.map(item =>
                            <div>
                                | {item.item}
                            </div>
                        )}
                    </div>
                    <div className={stylesBanner.num}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <button
                                className={stylesBanner.number}
                                id='num'
                                key={value}
                                onClick={() => handleRatingChange(value)}
                                style={{ color: value <= rating ? 'white' : 'gray' }}>
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={`${stylesBanner.burgerMenuContainer} ${stylesBanner.headerBurgerMenu}`}>


                    <div className={stylesBanner.burgerBtnBanner} onClick={handlerClick}>
                        {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
                    </div>
                    {isOpen && (
                        <div >
                            <div className={stylesBanner.modalOverlay}>
                                <div className={stylesBanner.modal}>
                                    <div>
                                        {under[0].title}
                                    </div>
                                    {searchBlock.slice(0, 5).map(item =>
                                        <div key={item.id}>
                                            {item.item}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Banner;