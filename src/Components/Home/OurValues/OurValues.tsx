import { FaShoppingBag, FaShippingFast, FaHeadset } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
const ourValues = [
    {
      icon: <FaShoppingBag className="text-4xl mb-4 text-purple-600" />,
      title: "Quality Products",
      description: "We source only the finest products that meet our high standards of quality and durability."
    },
    {
      icon: <FaShippingFast className="text-4xl mb-4 text-purple-600" />,
      title: "Fast Shipping",
      description: "We ensure your orders are processed quickly and delivered to your doorstep in record time."
    },
    {
      icon: <IoShieldCheckmark className="text-4xl mb-4 text-purple-600" />,
      title: "Secure Shopping",
      description: "Your security is our priority. Enjoy safe and protected transactions with every purchase."
    },
    {
      icon: <FaHeadset className="text-4xl mb-4 text-purple-600" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always here to help you with any questions or concerns."
    }
  ]
const OurValues = () => {
  return (
        <section className="my-20">
             <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Core Values</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {ourValues.map((item, index) => (
                 <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ">
                   <div className="text-center">
                     <span>{item.icon}</span>
                     <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                     <p className="text-gray-600">{item.description}</p>
                   </div>
                 </div>
               ))}
             </div>
           </section>
  )
}

export default OurValues