import { FaStar, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const CustomerReview = () => {
    const customerReviews = [
        { 
            id: 1, 
            name: "Ahmed", 
            review: "Great product, very satisfied with the quality!", 
            rating: 5,
            avatar: "A",
            location: "Cairo"
        },
        { 
            id: 2, 
            name: "Sara", 
            review: "Fast delivery and excellent customer service.", 
            rating: 5,
            avatar: "S",
            location: "Alexandria"
        },
        { 
            id: 3, 
            name: "Mohamed", 
            review: "Good value for money, highly recommend!", 
            rating: 4,
            avatar: "M",
            location: "Giza"
        },
        { 
            id: 4, 
            name: "Laila", 
            review: "The design is amazing, love it!", 
            rating: 5,
            avatar: "L",
            location: "Luxor"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
            />
        ));
    };

    return (
        <div className="main-container py-16 bg-gradient-to-br from-gray-50 to-white">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <HiSparkles className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Customer <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Reviews</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    See what our happy customers are saying about their experience
                </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {customerReviews.map((review, index) => (
                    <div 
                        key={review.id} 
                        className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                        
                        {/* Quote icon */}
                        <div className="relative z-10">
                            <FaQuoteLeft className="text-purple-400 text-2xl mb-4 opacity-60" />
                            
                            {/* Review text */}
                            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                                "{review.review}"
                            </p>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {renderStars(review.rating)}
                                <span className="ml-2 text-sm text-gray-500">({review.rating}/5)</span>
                            </div>
                            
                            {/* Customer info */}
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-lg">
                                    {review.avatar}
                                </div>
                                
                                {/* Name and location */}
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{review.name}</h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        <FaUser className="text-xs" />
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Hover effect border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
            
        
        </div>
    );
};

export default CustomerReview