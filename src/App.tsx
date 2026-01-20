import { useState } from 'react';


const FlowerShopLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const bestsellers = [
    { id: 1, name: 'Pink Dream', price: '$89', image: '/Rectangle-599.jpg' },
    { id: 2, name: 'Rustic Charm', price: '$76', image: '/Rectangle-600.png' },
    { id: 3, name: 'Blush Beauty', price: '$95', image: '/Rectangle-601.png' },
    { id: 4, name: 'Red Romance', price: '$82', image: '/Rectangle-602.png' },
  ];

  const testimonials = [
    {
      id: 1,
      image: '/Testi-1.jpg',
      rating: 5,
      text: 'Ordered for the first time and the flowers were absolutely stunning! Will definitely order again.',
      author: 'Sarah M.'
    },
    {
      id: 2,
      image: '/Testi-2.png',
      rating: 5,
      text: 'Beautiful arrangements and excellent customer service. Highly recommended!',
      author: 'Emily R.'
    },
    {
      id: 3,
      image: '/Testi-3.png',
      rating: 5,
      text: 'The bouquet exceeded my expectations. Fresh flowers and gorgeous presentation.',
      author: 'Jessica L.'
    },
  ];

  const instagramImages = [
    'BungaG1.png',
    'BungaG2.png',
    'BungaG3.png',
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // SVG Icons
  const StarIcon = ({ filled = false }: { filled?: boolean }) => (
    <svg
      className="w-5 h-5"
      fill={filled ? "#FBBF24" : "none"}
      stroke={filled ? "#FBBF24" : "currentColor"}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 h-24" >
        <img src="Logo.png" alt="Logo" className="h-32" />
      
       
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-24 px-8 min-h-screen bg-cover bg-center bg-no-repeat justify-center flex items-center "
        style={{ backgroundImage: 'url(/Header.png)' }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Refresh your space
          </h1>
          <p className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
            with lush greenery and
          </p>
          <p className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            exquisite flower bouquets
          </p>
          <div className="mt-16 text-gray-700 text-lg"> 
            <p className="mb-2">Create the perfect indoor jungle with our bold</p>
            <p>houseplants,blooming plants, hanging plants, and more!</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gray-50">
         <div className="text-center ">
              <h1 className="text-3xl font-light justify-center text-center mb-4">Plants and Flowers are Our Speciality</h1>
              <h3 className="text-2xl font-light mb-12 justify-center text-center pb-2">We make it reasonable.</h3>
            </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 ">
          <div className="text-center">
            <img src ="FlowerV.png" alt="Fast Delivery Icon" className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-xl font-light mb-3">Fast Delivery</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fresh flowers delivered quickly and safely — perfect for last-minute gifts and special moments that can’t wait.
            </p>
          </div>
          <div className="text-center">
             <img src ="FlowerV2.png" alt="Fast Delivery Icon" className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-xl font-light mb-3">Great Selection</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A wide variety of bouquets, colors, and arrangements designed for every occasion — from simple gestures to grand celebrations.
            </p>
          </div>
          <div className="text-center">
            <img src ="FlowerV3.png" alt="Fast Delivery Icon" className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-xl font-light mb-3">Positive Impact</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
             Thoughtfully arranged flowers that bring joy, express emotions, and create meaningful connections between people.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8 bg-blue-400 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">From handcrafted bouquets</h2>
            <h2 className="text-4xl font-light mb-6">to lush floral arrangements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Finding the right flowers shouldn’t be complicated.
We help you choose beautiful, fresh bouquets for every moment — thoughtfully arranged and delivered right on time to make your message truly meaningful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            {/* Left Side - Images Grid */}
            <div className="relative">
              {/* Main large image - Pink Roses */}
              <div className="mb-4">
                <img 
                  src="Personn.png" 
                  alt="Pink roses bouquet" 
                  className="rounded-lg w-full h-[400px] object-cover" 
                />
              </div>
              
              {/* Grid of 2 smaller images */}
              <div className="grid grid-cols-2 gap-4">
              </div>
            </div>

            {/* Right Side - How it works Card */}
            <div className="bg-white rounded-lg shadow-lg p-10 md:p-12">
              <h3 className="text-3xl font-light mb-2">How it works</h3>
              <p className="text-gray-500 text-sm mb-8">A seamless process, from selection to delivery.</p>
              
              <p className="text-gray-600 text-sm mb-10 leading-relaxed">
                Provide your customers a story they would enjoy keeping in mind the objectives of your website.
              </p>

              <div className="space-y-5">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">✱</span>
                  <h4 className="font-medium text-gray-900 text-sm capitalize">Choose your occasion & bouquet</h4>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">✱</span>
                  <h4 className="font-medium text-gray-900 text-sm capitalize">Add personal message & details</h4>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">✱</span>
                  <h4 className="font-medium text-gray-900 text-sm capitalize">We deliver it fresh to your door</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Our Bestsellers</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {bestsellers.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={item.image} alt={item.name} className="w-full h-80 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
          
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section 
        className="relative py-32 px-8 bg-cover bg-center bg-no-repeat overflow-hidden min-h-[600px]"
        style={{ backgroundImage: 'url(/BG.png)' }}
      >
        <div className="max-w-6xl mt-32 mx-auto text-center relative z-10 justify-center flex flex-col items-center">
          <h2 className="text-6xl font-light mb-8 text-black font-mono">Order now and get a 15%</h2>
          <h2 className="text-6xl font-light mb-8 text-black font-mono mt-4">delivery discount</h2>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">What our customers say about us</h2>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-pink-100 rounded-lg overflow-hidden shadow-sm ${
                    index === currentTestimonial ? 'ring-2 ring-pink-300' : ''
                  }`}
                >
                  <img src={testimonial.image} alt="Bouquet" className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} filled={true} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{testimonial.text}</p>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-green-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="About.jpg" alt="Pink flowers" className="rounded-lg w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-light mb-6">Who we are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special attention to the tone of voice. Try to win the customers' trust by being positive.
            </p>
        
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-8 bg-purple-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
          <div>
            <h2 className="text-4xl font-light mb-6">What we do</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. Semper dalar elementum tempus hac tellus libero accumsan dolor sit amet consectetur.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>
          <div>
            <img src="BlueFlower.png" alt="Blue hydrangeas" className="rounded-lg w-full" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4">Contact us if you</h2>
          <h2 className="text-4xl font-light mb-12">have any questions</h2>
          <button className="px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800">
            Get in touch
          </button>
        </div>
      </section>

      {/* Our Gallery */}
<section className="py-20 px-8 mb-32">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-light text-center mb-16">Our Gallery</h2>
    
    {/* Grid Layout - 12 columns x 12 rows dengan gap 13px */}
    <div className="grid grid-cols-12 grid-rows-12 gap-[13px] h-[600px]">
      {/* div1 - spans 4 columns, 5 rows */}
      <div className="col-span-4 row-span-5 overflow-hidden rounded-lg">
        <img 
          src={instagramImages[0]} 
          alt="Gallery 1" 
          className="w-full h-full object-cover hover:scale-110 transition duration-300" 
        />
      </div>
      
      {/* div2 - spans 8 columns, 5 rows, starts at column 5 */}
      <div className="col-span-8 row-span-5 col-start-5 overflow-hidden rounded-lg">
        <img 
          src={instagramImages[1]} 
          alt="Gallery 2" 
          className="w-full h-full object-cover hover:scale-110 transition duration-300" 
        />
      </div>
      
      {/* div3 - spans 12 columns, 4 rows, starts at row 6 */}
      <div className="col-span-12 row-span-4 row-start-6 overflow-hidden rounded-lg h-">
        <img 
          src="BungaG4.png"
          alt="Gallery 3" 
          className="w-full h-full object-cover hover:scale-110 transition duration-300" 
        />
      </div>
      
      {/* div4 - spans 6 columns, 3 rows, starts at row 10 */}
      <div className="col-span-6 row-span-3 row-start-10 overflow-hidden rounded-lg h-72">
        <img 
          src="BungaG3.png" 
          alt="Gallery 4" 
          className="w-full h-full object-cover hover:scale-110 transition duration-300" 
        />
      </div>
     
      {/* div5 - spans 6 columns, 3 rows, starts at column 7, row 10 */}
      <div className=" object-contain col-span-6 row-span-3 col-start-7 row-start-10 overflow-hidden rounded-lg h-72 ">
        <img 
          src="BungaG4.png" 
          alt="Gallery 5" 
          className="w-full h-full object-cover hover:scale-110 transition duration-300 " 
        />
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <img src="Logo.png" alt="Logo" className="h-32 mx-auto block" />
          </div>
         
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Flower Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
   
  );
};

export default FlowerShopLanding;