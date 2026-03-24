import React from "react";

export default function HomePage() {
  return (
    <main className="text-white w-full">

      {/* Hero Section */}
      <section
        className="w-full min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/bg-02.jpg')" }}
      >
        {/* Top Bar */}
        <div className="w-full mt-20 py-4 text-center bg-blue-900 text-[18px] sm:text-[22px] font-[Open Sans]">
          <p>Free shipping on orders over $50</p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4 gap-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-[sofia]">
            CONTACT US
          </h1>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:text-center sm:justify-center sm:items-center md:text-center md:justify-center md:items-center gap-6 text-black bg-white/80 p-5">
            
            <div>
              <h3 className="text-lg font-bold mb-2 font-[sofia]">CONTACTS</h3>
              <p className="text-sm sm:text-base">email@example.com</p>
              <p className="text-sm sm:text-base">+880123456789</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 font-[sofia]">ADDRESS</h3>
              <p className="text-sm sm:text-base">123 Your Street Name</p>
              <p className="text-sm sm:text-base">City, Country</p>
            </div>

          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-white/80 mt-4" />
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-cyan-950 py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div className="space-y-10">
            
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[sofia]">
                Headquarters
              </h2>
              <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                The Rivaa Studio <br />
                8241 Us 41, <br />
                Monteagle, TN 37356
              </p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[sofia]">
                Collaborations
              </h2>
              <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                Reach out at <br /> collab@rivaa.com
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <form className="space-y-5 bg-white/5 p-6 sm:p-8 rounded-lg">

            <div>
              <label className="block mb-1 font-semibold">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-amber-100 text-black"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Last name</label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full px-4 py-2 rounded bg-amber-100 text-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-amber-100 text-black"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded bg-amber-100 text-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white hover:bg-black transition font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}