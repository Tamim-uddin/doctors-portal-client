import React from 'react';
import AppointmentBg from '../AppointmentBg/AppointmentBg';
import Banner from '../Banner/Banner';
import ContuctUs from '../ContuctUs/ContuctUs';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <AppointmentBg></AppointmentBg>
            <Testimonial></Testimonial>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;