import React from "react";
// import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { MdPhoneIphone } from "react-icons/md";
import { IoIosFunnel } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import { FaWifi } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import img from './img/game.png';




const menu = [
  {
      logo : <MdPhoneIphone/>,
      title : 'Menu item 1'
  },
  {
      logo : <IoIosFunnel/>,
      title : 'Menu item 2'
  },
  {
      logo : <IoLogoAndroid/>,
      title : 'Menu item 3'
  },
  {
      logo : <FaApple/>,
      title : 'Menu item 4'
  }
]

const logo = [
  {   
      logo : <FaFacebookF/>
  },
  {
      logo : <FaTwitter/>
  },
  {
      logo : <FaInstagram/>
  },
  {
      logo : <FaYoutube/>
  },
  {
      logo : <SiGooglenews/>
  },
  {
      logo : <FaWifi/>
  }
]

const searchBlock = [
  {
    item: "item"
  },
  {
    item: "item"
  },

  {
    item: "item"
  },

  {
    item: "item"
  },

  {
    item: "item"
  },
  {
    item: "item"
  },

  {
    item: "item"
  },

  {
    item: "item"
  },
]

const btnText = [
  {
    logo : <IoLogoAndroid/>,
    title: 'Android'
  },
  {
    logo : <IoIosFunnel/>,
    title: 'IOS'
  },

  {
    logo:<FaDownload/>,
    title: 'Download on PC'
  },
  {
    players: "Players",
    vot: "12 votes",
    rate: "Your rating:",
    title: "Lorem Ipsum is simply dummy",
  },
]

const underHeader = [
  {
    title : 'Lorem Ipsum is simply dummy'
  },
  {
    item: 'item'
  },
  {
    item: 'item'
  },
  {
    item: 'item'
  },
  {
    item: 'item'
  },
]

const upperMain = [
  {
    home: "Home >"
  },
  {
    home: "Lorem Ipsum is simply is >"
  },
  {
    home: "Lorem is simply dummy" 
  }
]

const mainText = [
  {
    title: "Lorem Isum is simply dummy",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    sim: "Similar articies"
  }
]

const game = [
  {
    src: img,
    title: "Lorem Ipsum is simply dunny",
    user: {
      logo: <FaUser/>,
      name: "ALCO"
    } ,
    date: {
      logo: <WiTime8/>,
      text: "26 JANVIER 2023"
    }
  },
  {
    src: img,
    title: "Lorem Ipsum is simply dunny",
    user: {
      logo: <FaUser/>,
      name: "ALCO"
    } ,
    date: {
      logo: <WiTime8/>,
      text: "26 JANVIER 2023"
    }
  },
  {
    src: img,
    title: "Lorem Ipsum is simply dunny",
    user: {
      logo: <FaUser/>,
      name: "ALCO"
    } ,
    date: {
      logo: <WiTime8/>,
      text: "26 JANVIER 2023"
    }
  },
  {
    src: img,
    title: "Lorem Ipsum is simply dunny",
    user: {
      logo: <FaUser/>,
      name: "ALCO"
    } ,
    date: {
      logo: <WiTime8/>,
      text: "26 JANVIER 2023"
    }
  },
  
  
]

const footer = [
  {
    id: 0,
    title: 'Lorem Ipsum is simply dummy',
    subtitle: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five'
  },
  {
    id: 1,
    title: 'Category',
    items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
 },
 {
    id: 2,
    title: 'Play better',
    items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
 },
 {
    id: 3,
    title: 'Useful links',
    items: ['link', 'link', 'link', 'link', 'link', 'link'],
 },
  {
    id: 4,
    copyright: 'Copyright © 2024. Tous droits réservés.'
  },
]

const columnLogo = [
  {   
    logo : <FaFacebookF/>
},
{
    logo : <FaTwitter/>
},
{
    logo : <FaTelegramPlane/>
},
{
    logo : <FaPinterestP/>
},
{
    logo : <FaRedditAlien/>
},
{
    logo : <IoIosHeart/>
}
]

function App() {
  return (
    <div className="App">
      <Navbar menu={menu} logo={logo}/>
      <Header searchBlock={searchBlock} menu={menu}/>
      <Banner btnText={btnText} under={underHeader} searchBlock={searchBlock} colLog={columnLogo}/>
      <Main upper={upperMain} text={mainText} game={game}/>
      <Footer footer={footer} logo={logo}/>
    </div>
  );
}

export default App;
