import React from "react";
import Image from "next/image";
import Carousel from "../components/carousel";
// import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <main className="text-white w-full  bg-cover relative">
      {/* Hero Section */}
      <section
        className="absolute inset-0 w-full bg-cover bg-center z-0 h-max-1/3 "
        style={{
          backgroundImage: "url('/vases-11.jpg')",
          filter: "brightness(1)",
        }}
        aria-hidden="true"
      >
        <div className="w-full mt-20 py-4 text-center bg-blue-900 text-[18px] sm:text-[22px] font-[Open Sans]">
          <p>Free shipping on orders over $50</p>
        </div>
      </section>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight font-[sofia] text-[#600d0e]">
          Handmade ceramics
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight mt-4 max-w-xl text-[#600d0e]">
          Painted clay ceramics made with love.
        </p>
        <a href="#">
          <button className="px-8 sm:px-12 md:px-20 mt-6 sm:mt-10 py-3 uppercase text-[#600d0e] border-2 border-[#600d0e] hover:bg-white transition font-semibold font-[Montserrat]">
            SHOP NOW
          </button>
        </a>
      </div>


      {/* Bestsellers Section */}
      <section className="relative w-full h-max-1/3 bg-gray-900 text-white">
        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 font-[sofia] text-center">
            Our Bestsellers
          </h2>
      <Carousel />
          
        </div>
      </section>



      {/* Home Decor Section */}
      <section className="py-16 px-6 h-max-2/3 bg-[url(/flower-02.jpg)] bg-center bg-no-repeat bg-cover brightness-80">
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight font-[sofia] text-[#600d0e]">
            Home decor items
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight mt-4 max-w-xl text-[#600d0e]">
            Find your new favorite pieces.
          </p>
          <a href="#">
            <button className="px-8 sm:px-12 md:px-20 mt-10 py-3 uppercase text-[#600d0e] border-2 border-[#600d0e] hover:bg-white transition font-semibold font-[Montserrat]">
              SHOP NOW
            </button>
          </a>
        </div>
      </section>


      {/* Bestsellers Section */}
      <section className="relative w-full h-max-1/3 bg-gray-900 text-white">
        <section className="bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto">
    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* About Rivaa */}
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
        <div className="pt-6 text-center items-center justify-center">
          <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-4 font-[sofia]">
            About Rivaa
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white">
            Rivaa is a brand born out of a passion for ceramics.
          </p>
          <a href="#">
            <button className="px-6 sm:px-10 md:px-16 mt-6 py-3 uppercase text-white border-2 border-white hover:bg-black transition font-semibold font-[Montserrat]">
              LEARN MORE
            </button>
          </a>
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
        <div className="pt-6 text-center items-center justify-center">
          <h3 className="text-2xl sm:text-3xl uppercase font-bold text-white mb-4 font-[sofia]">
            Sustainability
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-light leading-tight text-white">
            Rivaa is an eco-friendly brand that cares about sustainability.
          </p>
          <a href="#">
            <button className="px-6 sm:px-10 md:px-16 mt-6 py-3 uppercase text-white border-2 border-white hover:bg-black transition font-semibold font-[Montserrat]">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





{/* Newsletter Signup */}
<section className="py-16 px-6 bg-[url(/leaf-bg.jpg)] bg-center bg-no-repeat bg-cover brightness-100 text-white">
  <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight font-[sofia] mb-6">
      Sign-up for our newsletter
    </h2>

    <div className="w-full">
      <label htmlFor="email" className="block mb-2 font-semibold text-white">
        Your email <span className="text-black">*</span>
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your email address"
        className="w-full px-4 py-3 rounded border bg-white text-black"
        required
      />
    </div>

    <a href="#">
      <button className="px-8 sm:px-12 md:px-16 mt-6 py-3 uppercase border-2 border-white hover:bg-gray-900 transition font-semibold font-[Montserrat]">
        Submit
      </button>
    </a>
  </div>
</section>

{/* Instagram Section */}
<section className="relative w-full min-h-2/3 bg-gray-900 text-white">
  <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 font-[sofia] text-center">
      FOLLOW US ON INSTAGRAM
    </h2>

    {/* Image Grid */}
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2">
      <div className="group">
        <Image
          src="/ceramic-02.jpg"
          alt="Ceramic piece"
          width={600}
          height={700}
          className="object-cover w-full"
        />
      </div>
      <div className="group">
        <Image
          src="/instagram-02.jpg"
          alt="Instagram showcase"
          width={600}
          height={700}
          className="object-cover w-full"
        />
      </div>
      <div className="group">
        <Image
          src="/wall-01.jpg"
          alt="Wall decor"
          width={600}
          height={700}
          className="object-cover w-full"
        />
      </div>
    </div>

    {/* Instagram Button */}
    <div className="mt-12 flex justify-center">
      <a href="#">
        <button className="px-8 sm:px-12 md:px-16 py-3 uppercase border-2 border-white hover:bg-gray-600 transition font-semibold font-[Montserrat]">
          @rivaa_studio
        </button>
      </a>
    </div>
  </div>
</section>










      </section>



     


      {/* <Footer /> */}
    </main>
  );
}