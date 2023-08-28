import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import TextSection from './components/TextSection/TextSection';
import GallerySection from './components/GallerySection/GallerySection.jsx';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/text" component={TextSection} />
          <Route exact path="/gallery" component={GallerySection} />
          <Route exact path="/challenge" component={ChallengeSection} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/" component={TextSection} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
