import React from 'react';
import  NavbarHome  from '@/components/ui/NavbarHome';

// ABOUT PAGE , make me the page

const AboutPage: React.FC = () => {
    return (
        <>
        <NavbarHome />
        <div className="min-h-screen bg-green-100 flex flex-col items-center  justify-center py-12">
            <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
                    <p className="text-xl text-gray-600 mt-4">Learn more about our mission and values.</p>
                </header>
                <main className="about-main">
                    <section className="about-intro mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        </p>
                        
                    </section>

                    <section className="about-values mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Integrity, Excellence, and Innovation.
                        </p>
                    </section>
                </main>
            </div>
            
        </div>
        </>
    );
    
};

export default AboutPage;