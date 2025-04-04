import { usePage } from '@inertiajs/react';
import NavbarHome from '@/components/ui/NavbarHome'; // Importa el componente de NavbarHome
import { Button } from "@/components/ui/button";

export default function Home() {
    const { services } = usePage<{ services: { name: string; description: string; price: string }[] }>().props;

    return (
        <>
            <NavbarHome /> {/* Agrega el NavbarHome aquí */}
            <div className="min-h-screen bg-green-100 flex flex-col items-center  justify-center py-12">

            <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-800">Servify</h1>
                    <p className="text-xl text-gray-600 mt-4">Discover the best services tailored for you.</p>
                </header>

                <main className="home-main">
                    <section className="home-intro mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            We provide top-notch services with a focus on quality, reliability, and customer satisfaction.
                            Explore our offerings and find the perfect service for your needs.
                        </p>
                    </section>

                    <section className="home-services">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Services</h2>
                        <p className="text-lg text-center text-gray-600 mb-8">
                            Explore our wide range of services and book the one that suits you best!
                        </p>

                        {/* Mostrar servicios */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services && services.length > 0 ? (
                                services.map((service, index) => (
                                    <div key={index} className="service-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                                        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                                        <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                                        <p className="text-lg font-bold text-green-600 mt-4">${service.price}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No services available</p>
                            )}
                        </div>
                    </section>
                </main>

                <footer className="text-center mt-12">
                    <p className="text-sm text-gray-600">© 2025 Service Platform. All rights reserved.</p>
                </footer>
            </div>
            </div>
        </>
    );
}
