import RoyalService from '@/components/RoyalService/RoyalService';
import React from 'react';
import s from './AboutUs.module.scss'
import Architecture from '@/components/ArchitectureComponents/Architecture';
import Intro from '@/components/Intro/Intro';
const AboutUs = () => {
    return (
        <section className={s.AboutUs}>
            <Intro/>
            <RoyalService/>
            <Architecture/>
        </section>
    );
};

export default AboutUs;