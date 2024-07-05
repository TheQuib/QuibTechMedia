import React from 'react';
import StickyScroll from './components/StickyScroll'; // Ensure this is the correct import path
import './App.css';

const services = [
  {
    title: "Web Design",
    description: "Create stunning websites with responsive design and modern features.",
    image: "https://via.placeholder.com/800x600?text=Web+Design",
  },
  {
    title: "Social Media Management",
    description: "Manage your social media platforms with engaging content and regular updates.",
    image: "https://via.placeholder.com/800x600?text=Social+Media+Management",
  },
  {
    title: "SEO Optimization",
    description: "Improve your website’s visibility on search engines with our SEO services.",
    image: "https://via.placeholder.com/800x600?text=SEO+Optimization",
  },
  {
    title: "Content Creation",
    description: "Professional content creation services including articles, blogs, and more.",
    image: "https://via.placeholder.com/800x600?text=Content+Creation",
  },
  {
    title: "Brand Strategy",
    description: "Develop a cohesive brand strategy to stand out in the market.",
    image: "https://via.placeholder.com/800x600?text=Brand+Strategy",
  },
  {
    title: "Graphic Design",
    description: "Custom graphic design services for all your business needs.",
    image: "https://via.placeholder.com/800x600?text=Graphic+Design",
  },
];

const projects = [
  {
    title: "Project Title 1",
    description: "Description of the project. What was achieved, how it benefited the client, etc.",
    image: "https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg",
  },
  {
    title: "Project Title 2",
    description: "Description of the project. What was achieved, how it benefited the client, etc.",
    image: "https://via.placeholder.com/800x600?text=Project+2",
  },
  {
    title: "Project Title 3",
    description: "Description of the project. What was achieved, how it benefited the client, etc.",
    image: "https://via.placeholder.com/800x600?text=Project+3",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="relative flex flex-col justify-center items-center h-screen bg-pastelBlue text-center">
        <img src="/QuibTechMedia.png" alt="QuibTech Media Logo" className="h-32" />
        <p className="mt-4 text-2xl">Websites, content creation, and social media management from Quinn Henry</p>
        <div className="absolute bottom-[-50px] w-full flex justify-center space-x-4 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Website Creation</h3>
            <p>Stunning websites with responsive design and modern features.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Infographics Creation</h3>
            <p>Professional infographics creation services such as posters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Social Media Management</h3>
            <p>Manage your social media platforms with engaging content and regular updates.</p>
          </div>
        </div>
      </header>
      <main className="pt-28 pb-10 px-4">
        <section className="max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
          <StickyScroll content={services} />
        </section>
        <section className="max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Nonprofit Pricing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Nonprofit</h3>
              <p className="text-2xl font-bold mb-4">$500</p>
              <ul className="mb-6">
                <li className="mb-2">1 page</li>
                <li className="mb-2">Responsive website</li>
                <li className="mb-2">Site updates: $100/update</li>
                <li className="mb-2">Hosting: You host or $50/month</li>
                <li className="mb-2">Optional maintenance: $50/month</li>
              </ul>
              <button className="bg-darkBlue text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">Get Started</button>
            </div>
            {/* Basic Pricing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-2xl font-bold mb-4">$800</p>
              <ul className="mb-6">
                <li className="mb-2">Up to 5 pages</li>
                <li className="mb-2">Responsive website</li>
                <li className="mb-2">Site updates: $100/update</li>
                <li className="mb-2">Hosting: You host or $50/month</li>
                <li className="mb-2">Optional maintenance: $50/month</li>
              </ul>
              <button className="bg-darkBlue text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">Get Started</button>
            </div>
            {/* Standard Pricing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Standard</h3>
              <p className="text-2xl font-bold mb-4">$1,200</p>
              <ul className="mb-6">
                <li className="mb-2">Up to 10 pages</li>
                <li className="mb-2">Responsive website</li>
                <li className="mb-2">Blog setup</li>
                <li className="mb-2">Google Analytics</li>
                <li className="mb-2">Site updates: $100/update</li>
                <li className="mb-2">Hosting: You host or $50/month</li>
                <li className="mb-2">Optional maintenance: $50/month</li>
              </ul>
              <button className="bg-darkBlue text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">Get Started</button>
            </div>
            {/* Premium Pricing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-2xl font-bold mb-4">$1,600</p>
              <ul className="mb-6">
                <li className="mb-2">Up to 20 pages</li>
                <li className="mb-2">Responsive website</li>
                <li className="mb-2">Blog setup</li>
                <li className="mb-2">Google Analytics</li>
                <li className="mb-2">Site updates: $100/update</li>
                <li className="mb-2">Hosting: You host or $50/month</li>
                <li className="mb-2">Optional maintenance: $50/month</li>
              </ul>
              <button className="bg-darkBlue text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">Get Started</button>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg h-64"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ filter: 'brightness(0.65)' }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <form action="https://formspree.io/YOUREMAIL" method="POST" className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
              <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" name="name" id="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
              <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" name="email" id="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
              <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" name="message" id="message" required></textarea>
            </div>
            <button type="submit" className="bg-darkBlue text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200">Send</button>
          </form>
        </section>
      </main>
      <footer className="bg-gray-800 text-white flex justify-between items-center p-4">
        <div className="flex items-center">
          <p>&copy; 2024 QuibTech Media</p>
        </div>
        <div className="flex justify-center">
          <img src="/logo512.png" alt="QuibTech Media Logo" className="w-16 h-16" />
        </div>
        <div className="flex items-center">
          <p>Built using React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
