import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TextSection from './components/TextSection/TextSection';
import GallerySection from './components/GallerySection/GallerySection';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <TextSection />
            <GallerySection />
            <ChallengeSection />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
