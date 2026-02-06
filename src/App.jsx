import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthorityBar from './components/AuthorityBar';
import Opportunities from './components/Opportunities';
import FounderVision from './components/FounderVision';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <AuthorityBar />
        <Opportunities />
        <FounderVision />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
