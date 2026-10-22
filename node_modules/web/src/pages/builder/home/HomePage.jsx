import React from 'react';
import { Helmet } from 'react-helmet';
import Page from '@/components/builder/Page';
import Header from '@/pages/builder/shared/Header';
import Footer from '@/pages/builder/shared/Footer';
import Section1 from './Section1';
import Section3 from './Section3';
import Section4 from './Section4';
import SectionMiddleImage from './SectionMiddleImage';
import Section5 from './Section5';

import bgTop from '../../../assets/bg-top.webp';
import bgMid from '../../../assets/bg-mid.webp';
import bgBottom from '../../../assets/bg-bottom.webp';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <html lang={"es"} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Great+Vibes&display=swap" rel="stylesheet" />
            </Helmet>
            <Page
                pageId={"home"}
                locale={"system"}
                style={{
                    "--h1-font-size": "56px",
                    "--h1-font-family": "'Great Vibes', cursive",
                    "--h2-font-size": "40px",
                    "--h2-font-family": "'Cormorant Garamond', serif",
                    "--h3-font-size": "28px",
                    "--h3-font-family": "'Cormorant Garamond', serif",
                    "--body-font-size": "16px",
                    "--body-font-family": "'Cormorant Garamond', serif",
                }}
                googleFontsHref={null}
                customFontsCss={""}
            >
                <div className="min-h-screen w-full bg-[#241a1b] flex justify-center">
                    <div className="relative w-full md:max-w-md min-h-screen bg-[#eedbbe] shadow-2xl overflow-x-hidden">
                        
                        <div className="absolute inset-0 w-full h-full z-0" 
                             style={{ backgroundImage: `url(${bgMid})`, backgroundSize: '100% auto', backgroundRepeat: 'repeat' }}>
                        </div>
                        
                        <div className="absolute top-0 left-0 w-full h-[220px] z-0 pointer-events-none" 
                             style={{ backgroundImage: `url(${bgTop})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 w-full h-[160px] z-0 pointer-events-none" 
                             style={{ backgroundImage: `url(${bgBottom})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
                        </div>

                        <Header />
                        
                        <div className="relative z-10 flex flex-col w-full">
                            <Section1 />
                            <Section3 />
                            <Section4 />
                            <SectionMiddleImage />
                            <Section5 />
                            <Footer />
                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}