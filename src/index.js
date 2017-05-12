import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contacts from './components/Contacts/Contacts.js';
import Navigation from './components/Navigation/Navigation.js';
import Content_In_Header from './components/ContentInHeader/Content_In_Header.js';
import Why from './components/Why/Why.js';
import Catalog from './components/Catalog/Catalog.js';
import Info from './components/Info/Info.js';
import Footer from './components/Footer/Footer.js';


const email = [
    {
        link: '/Info@kolchuga.kiev.ua',
        label: 'Info@kolchuga.kiev.ua'
    },
]

const navigation = [
    {
        link: '/Главная',
        label: 'Главная'
    },
    {
        link: '/Каталог продукции',
        label: 'Каталог продукции'
    },
    {
        link: '/Доставка/Установка',
        label: 'Доставка/Установка'
    },
    {
        link: '/Стать партнером',
        label: 'Стать партнером'
    },
    {
        link: '/Контакты',
        label: 'Контакты'
    },
]

const why = [
    {
        link: '/Защита от удара',
        p: 'Защита от удара'
    },
    {
        link: '/Защита от пыли, влаги и грязи',
        p: 'Защита от пыли, влаги и грязи'
    },
    {
        link: '/Защита от перегрева',
        p: 'Защита от перегрева'
    },
    {
        link: '/Надежность крепления',
        p: 'Надежность крепления'
    },
    {
        link: '/Аэродинамика',
        p: 'Аэродинамика'
    },
    {
        link: '/Повышенная прочность',
        p: 'Повышенная прочность'
    },
]


const catalog = [
    {
        link: '/Products for Acura',
        img: './images/marka1.png'
    },
    {
        link: '/Products for Alfa-Romeo',
        img: './images/marka2.png'
    },
    {
        link: '/Products for Audi',
        img: './images/marka3.png'
    },
    {
        link: '/Products for Bmw',
        img: './images/marka4.png'
    },
    {
        link: '/Products for Cadillac',
        img: './images/marka5.png'
    },
    {
        link: '/Products for Chery',
        img: './images/marka6.png'
    },
]


class App extends Component {
  render() {
    return(
      <div className='wrapper-wrapper'>
          <div className='header-wrapper'>
            <div className='header'>
                <Contacts items={email}/>
                <Navigation items={navigation}/>
                <Content_In_Header/>
            </div>
          </div>
          <div className='content-wrapper'>
            <div className='content'>
               <Why items={why}/>
               <Catalog items={catalog}/>
                <Info/>
            </div>
          </div>
          <div className='footer-wrapper'>
            <div className='footer'>
              <Footer/>
            </div>
          </div>
      </div>
      );
  }
}


ReactDOM.render(
  <div>
        <App/>
    </div>,
  document.getElementById('root')
);
