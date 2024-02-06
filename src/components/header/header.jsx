import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineSearch } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import stylesHeader from './style.module.scss';
import stylesNav from '../navbar/style.module.scss';
import logo from '../../img/Logo.png';
import '../../index.css';


const Header = ({ searchBlock, menu }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen(!isOpen);
  }

  // if(document.querySelector('body').setAttribute('data-theme', 'dark')) {
  //     document.querySelector('.title').setAttribute('data-theme','dark')
  // }


  const textVariants = {
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

  return (
    <div className={stylesHeader.header}>
      <div className={stylesHeader.container}>
        <motion.div
          className={stylesHeader.leftSide}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className={stylesHeader.title}>
            <img src={logo} alt="logo" />
          </div>
          <div className={stylesHeader.itemBlock}>
            {searchBlock.map(item =>
              <div className={stylesHeader.item}>
                {item.item}
              </div>
            )}
          </div>
        </motion.div>
        <div>
          <form className={stylesHeader.searchContainer}>
            <input id='in' type="text" className={stylesHeader.searchInput} placeholder="Search..." />
            <MdOutlineSearch className={stylesHeader.searchIcons} />
          </form>
        </div>
        <div className={`${stylesHeader.burgerMenuContainer} ${stylesHeader.headerBurgerMenu}`}>
          <div className={stylesHeader.burgerBtn} onClick={handlerClick}>
            {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </div>
          {isOpen && (
            <div className={`${stylesHeader.burgerMenu} ${stylesHeader.visible}`}>
              <div className={stylesHeader.menuContent}>
                <div className={stylesHeader.closeButton} onClick={handlerClick}>
                  <img src={logo} alt="logo" /><IoCloseSharp />
                </div>
                <div className={stylesHeader.itemBlockBurger}>
                  <form className={stylesHeader.searchContainerBur}>
                    <input type="text" className={stylesHeader.searchInputBur} placeholder="Search..." />
                    <MdOutlineSearch className={stylesHeader.searchIcons} />
                  </form>
                  {searchBlock.map(item =>
                    <div className={stylesHeader.item}>
                      {item.item}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className={stylesNav.leftSideBur}>
                  {menu.map(item =>
                    <div className={stylesNav.item}>
                      <div>{item.logo}</div>
                      <a href='#'>{item.title}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;