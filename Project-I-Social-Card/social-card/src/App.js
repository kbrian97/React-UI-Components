import React from 'react';
import './App.css';
import ImageThumb from './components/HeaderComponents/ImageThumbnail';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import Footer from './components/FooterComponents/Footer';


const App = () => {
  return (

    <div className='Container'>

      <div className='Header'>
        <ImageThumb />
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>

    </div>

      <div className='Card'>
        <CardContainer />
        <CardBanner />
        <CardContent />
      </div>
            <Footer />
      </div>
  );
};

export default App;
