import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="text-white w-full">

      {/* Hero Section */}
      <section
        className="w-full min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex flex-col justify-start"
        style={{
          backgroundImage: "url('/leaf-bg-02.jpg')",
        }}
      >
        {/* Top Bar */}
        <div className="w-full mt-20 py-4 text-center bg-blue-900 text-[18px] sm:text-[22px] font-[Open Sans]">
          <p>Free shipping on orders over $50</p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-[sofia] leading-tight">
            Sustainability
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-900">
        <h2 className="text-base sm:text-lg md:text-2xl pt-10 font-[Playfair] text-center max-w-3xl mx-auto">

          
          We care about our planet. For this reason, Rivaa
          <br className="hidden sm:block" />
          aims to be operating sustainably and ethically
          <br className="hidden sm:block" />
           at every level.
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 items-center">

          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] grid grid-cols-1 md:grid-cols-2">
            <Image
              src="/accesories-04.jpg"
              alt="accesories"
             fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Playfair]">
              Working Ethos
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-medium font-[Montserrat] leading-relaxed">
              For Alex and Laura, planning ahead is a central component of sustainable design. Work begins with sketches of ideas before any clay is modeled. Fully conceptualizing and refining each design beforehand helps us to reduce material waste.
              <br /><br />
              We strive to work collaboratively at every stage. Our team efforts minimize energy usage in the studio.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-900">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* Image (comes first on mobile) */}
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] grid grid-cols-1 md:grid-cols-2 order-1 lg:order-2">
      <Image
        src="/accesories-03.jpg"
        alt="Sustainability practices"
        fill
        className="object-cover"
      />
    </div>

    {/* Text (comes after image on mobile) */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Playfair]">
        Materials
      </h2>

      <p className="text-sm sm:text-base md:text-lg font-medium font-[Montserrat] leading-relaxed">
        Surrounded by beautiful landscapes, it is only right that our studio is stocked with only the finest local materials that haven't had to travel far to get to us. Our clay is as locally sourced as possible for every product. <br /><br />
        We ensure that the paint we use on our products is low-VOC and never washed into local waterways during production.
      </p>

    
    </div>

  </div>
</section>

    </main>
  );
}