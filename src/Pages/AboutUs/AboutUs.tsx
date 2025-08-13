import {
  FaLeaf,
} from "react-icons/fa";
import teamImg from "../../assets/blog9-img2.webp";
import OurValues from "../../Components/Home/OurValues/OurValues";
import HeroSection from "../../Components/Common/Hero/HeroSection";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
   
<HeroSection title="About Our Store" description="We're passionate about bringing you the finest products with exceptional service" />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2023, our e-commerce journey began with a simple
                idea: to create an online shopping experience that combines
                quality products, exceptional service, and a seamless user
                experience. What started as a small team of passionate
                individuals has grown into a thriving community of customers who
                trust us for their shopping needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We carefully curate our product selection to ensure that every
                item meets our high standards of quality, sustainability, and
                value. Our commitment to customer satisfaction is at the heart
                of everything we do.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <img
                src={teamImg}
                alt="Our Team"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}

        <OurValues />
        {/* Sustainability */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaLeaf className="text-3xl text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Commitment to Sustainability
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in doing our part to protect the planet. That's why
                we've implemented eco-friendly practices throughout our
                operations, from sustainable packaging to responsible sourcing.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Learn More About Our Initiatives
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {item * 25}%
                    </div>
                    <div className="text-gray-700">
                      {
                        [
                          "Reduced Carbon Footprint",
                          "Recycled Materials",
                          "Energy Efficiency",
                          "Sustainable Sourcing",
                        ][item - 1]
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Shop With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust us for quality
            products and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Shop Now
            </button>
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
