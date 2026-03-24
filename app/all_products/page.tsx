import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="text-white w-full">

      {/* Hero Section */}
      <section
        className="w-full min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex flex-col justify-start"
        style={{
          backgroundImage: "url('/bg-03.jpg')",
        }}
      >
        {/* Top Bar */}
        <div className="w-full mt-20 py-4 text-center bg-blue-900 text-[18px] sm:text-[22px] font-[Open Sans]">
          <p>Free shipping on orders over $50</p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center px-4 text-center">
          <h1 className="text-3xl text-blue-900 sm:text-5xl md:text-6xl lg:text-8xl font-bold font-[sofia] leading-tight">
            Shop
          </h1>
        </div>
      </section>



      <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* About Rivaa */}
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-02.jpg"
                  alt="About Rivaa"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Balance Vase
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white mb-4">
                  $69.99
                </p>
                
              </div>
            </div>
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-03.jpg"
                  alt="About Rivaa"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                 Binocular Vase
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white mb-4">
                  $49.99
                </p>
                
              </div>
            </div>
      
            {/* Sustainability */}
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-04.jpg"
                  alt="Sustainability"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Bubble flowerpot
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white mb-4">
                  $49.99
                </p>
                
              </div>
            </div>
          </div>
        </div>



        <div className="max-w-6xl mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* About Rivaa */}
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-05.jpg"
                  alt="About Rivaa"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Mango Vase
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white mb-4">
                  $49.99
                </p>
                
              </div>
            </div>
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-06.jpg"
                  alt="About Rivaa"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                 Sun Vase
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white mb-4">
                  $49.99
                </p>
                
              </div>
            </div>
      
            {/* Sustainability */}
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-07.jpg"
                  alt="Sustainability"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Wave vase
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white mb-4">
                  $49.99
                </p>
                
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-6xl mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* About Rivaa */}
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-08.jpg"
                  alt="About Rivaa"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Bulb Vase
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white">
                  $39.99
                </p>
                
              </div>
            </div>
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-09.jpg"
                  alt="About Rivaa"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Candy Flowerpot
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white">
                  $59.99
                </p>
                
              </div>
            </div>
      
            {/* Sustainability */}
            <div>
              <a href="#" className="block">
                <Image
                  src="/vases-10.jpg"
                  alt="Sustainability"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </a>
              <div className="pt-4 text-center items-center justify-center">
                <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-2 font-[sofia]">
                  Drop Vase 
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white">
                  $49.99
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      

    </main>
  );
}