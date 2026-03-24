import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="text-white w-full">

      {/* Hero Section */}
      <section
        className="w-full min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex flex-col justify-start"
        style={{
          backgroundImage: "url('/leaf-bg-03.jpg')",
        }}
      >
        {/* Top Bar */}
        <div className="w-full mt-20 py-4 text-center bg-blue-900 text-[18px] sm:text-[22px] font-[Open Sans]">
          <p>Free shipping on orders over $50</p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-[sofia] leading-tight">
            About Rivaa
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-900">
        <h2 className="text-base sm:text-lg md:text-2xl pt-10 font-[Playfair] text-center max-w-3xl mx-auto">
          Rivaa is a brand born out of love for ceramics,
          <br className="hidden sm:block" />
          vivid colours and passion for life.
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 items-center">

          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] grid grid-cols-1 md:grid-cols-2">
            <Image
              src="/two_one.jpg"
              alt="Founders Alex & Laura"
             fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Playfair]">
              Alex & Laura
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-medium font-[Montserrat] leading-relaxed">
              Two creative minds that came together at art school, Alex and Laura founded Mina with a shared passion for design and sustainability.
              <br /><br />
              Every piece in our store has been created with love by Alex and Laura. They take inspiration from the world around them.
              <br /><br />
              Join us on our mission to fill every home with beautiful, sustainable décor.
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
        src="/sustainability.jpg"
        alt="Sustainability practices"
        fill
        className="object-cover"
      />
    </div>

    {/* Text (comes after image on mobile) */}
    <div className="space-y-5 text-left order-2 lg:order-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Playfair]">
        Sustainability
      </h2>

      <p className="text-sm sm:text-base md:text-lg font-medium font-[Montserrat] leading-relaxed">
        Our thoughts about the planet impact everything we do, from the clay we use to the packaging we provide.
      </p>

      <button className="px-6 sm:px-8 md:px-12 py-3 uppercase border-2 border-white hover:bg-gray-700 transition text-sm sm:text-base font-semibold font-[Montserrat]">
        Read More
      </button>
    </div>

  </div>
</section>

    </main>
  );
}