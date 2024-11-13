import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="relative bg-gradient-to-r from-blue-500 to-indigo-600 py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Dream Platform</h1>
                    <p className="text-lg md:text-2xl mb-8">Connecting people, inspiring ideas, and bringing your goals to life.</p>
                    <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-semibold shadow hover:bg-gray-100 transition duration-200">
                        Get Started
                    </button>
                </div>
                {/* Background Decorative Shapes */}
                <div className="absolute inset-0 w-full h-full bg-opacity-20 bg-pattern bg-fixed bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}></div>
            </header>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-12">Features You'll Love</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="mb-6">
                                <img src="https://source.unsplash.com/random/200x200?tech" alt="Feature 1" className="w-full h-48 object-cover rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast & Secure</h3>
                            <p className="text-gray-600">Experience blazing fast performance and top-notch security for your data.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="mb-6">
                                <img src="https://source.unsplash.com/random/200x200?design" alt="Feature 2" className="w-full h-48 object-cover rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Design</h3>
                            <p className="text-gray-600">Beautiful, sleek, and user-friendly interfaces for the best experience.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="mb-6">
                                <img src="https://source.unsplash.com/random/200x200?business" alt="Feature 3" className="w-full h-48 object-cover rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Ready</h3>
                            <p className="text-gray-600">Ideal for growing businesses and scaling your online presence effortlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Elevate Your Experience?</h2>
                    <p className="text-lg text-gray-600 mb-8">Join us today and unlock the potential of our advanced tools and features.</p>
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-200">
                        Get Started Now
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                        {/* Column 1 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul>
                                <li className="mb-2 hover:underline cursor-pointer">About Us</li>
                                <li className="mb-2 hover:underline cursor-pointer">Careers</li>
                                <li className="mb-2 hover:underline cursor-pointer">Blog</li>
                                <li className="mb-2 hover:underline cursor-pointer">Press</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Support</h3>
                            <ul>
                                <li className="mb-2 hover:underline cursor-pointer">Help Center</li>
                                <li className="mb-2 hover:underline cursor-pointer">Contact Us</li>
                                <li className="mb-2 hover:underline cursor-pointer">Privacy Policy</li>
                                <li className="mb-2 hover:underline cursor-pointer">Terms of Service</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.54 6.42c-.8 1.18-1.73 2.23-2.87 2.93.01.19.01.38.01.57 0 5.86-4.46 12.64-12.64 12.64-2.51 0-4.85-.73-6.82-1.98.35.04.7.06 1.07.06 2.08 0 4-.71 5.52-1.91-1.95-.04-3.59-1.32-4.15-3.08.27.05.55.07.83.07.4 0 .78-.05 1.15-.15-2.03-.41-3.56-2.2-3.56-4.36v-.06c.6.34 1.29.55 2.02.58a4.426 4.426 0 0 1-1.98-3.68c0-.81.22-1.57.6-2.22 2.19 2.68 5.46 4.45 9.14 4.63-.07-.32-.11-.65-.11-.99 0-2.39 1.94-4.33 4.33-4.33 1.25 0 2.38.53 3.17 1.38.99-.19 1.92-.56 2.76-1.06-.32.99-1 1.81-1.88 2.33.89-.1 1.74-.34 2.53-.68-.58.88-1.32 1.66-2.16 2.28z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 2.24c-.77.34-1.6.57-2.47.67a4.48 4.48 0 0 0 1.97-2.46 8.966 8.966 0 0 1-2.84 1.08 4.46 4.46 0 0 0-7.61 4.07 12.642 12.642 0 0 1-9.17-4.65 4.466 4.466 0 0 0 1.38 5.94 4.44 4.44 0 0 1-2.02-.56c-.05 2.01 1.39 3.89 3.45 4.31a4.48 4.48 0 0 1-2.01.08 4.466 4.466 0 0 0 4.17 3.1 8.94 8.94 0 0 1-5.54 1.91c-.36 0-.71-.02-1.06-.07a12.59 12.59 0 0 0 6.83 2z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.8 2h-11.6c-2.42 0-4.4 1.98-4.4 4.4v11.2c0 2.42 1.98 4.4 4.4 4.4h11.2c2.42 0 4.4-1.98 4.4-4.4v-11.6c0-2.42-1.98-4.4-4.4-4.4zm.4 15.8c0 .2-.18.4-.4.4h-11.6c-.2 0-.4-.18-.4-.4v-11.2c0-.2.18-.4.4-.4h11.6c.2 0 .4.18.4.4v11.2zm-6.4-7.4c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6-1.6.7-1.6 1.6.7 1.6 1.6 1.6zm-.4 1.8h-.8c-2.32 0-4.4 1.86-4.4 4.4v1h8.4v-1c0-2.32-2.08-4.4-4.4-4.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
