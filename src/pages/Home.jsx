import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Manifesto from '../components/Manifesto';
import Pillars from '../components/Pillars';
import ArcherFlipping from '../components/ArcherFlipping';
import Footer from '../components/Footer';
import AcreditationModal from '../components/AcreditationModal';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main>
                <Hero onOpenModal={() => setIsModalOpen(true)} />
                <SocialProof />
                <Manifesto />
                <Pillars />
                <ArcherFlipping onOpenModal={() => setIsModalOpen(true)} />
            </main>
            <Footer />
            <AcreditationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Home;
