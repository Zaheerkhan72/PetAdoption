import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
<>
    <Navbar />
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: "\n  * {\n  font-family: 'Source Sans Pro';\n  }\n"
          }}
        />
        <div className="flex min-h-screen w-screen">
          <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
            {/* Left Column */}
            <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
              <div className="mb-16 lg:my-auto lg:max-w-lg">
                <div className="mb-6 max-w-xl">

                  <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                    Find Your Perfect <br />
                    Furry Friend Today!

                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Discover loving pets waiting for their forever homes. Browse our available cats, dogs, and more to find the perfect companion for you and your family. Adopt today and give a pet a chance at a better life!
                  </p>
                </div>
                <div className="flex items-center">
                  <Link
                    href="/petList"
                    className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                  >
                    {" "}
                    Explore{" "}
                  </Link>

                </div>
              </div>
            </div>
            {/* /Left Column */}
            {/* Right Column */}
            <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
              {/* Col 2 */}
              <div className="hidden w-56 items-center space-y-3 lg:flex">
                <div className="overflow-hidden rounded-xl bg-yellow-400">
                  <img
                    className="h-full w-full object-cover"
                    src="https://i.pinimg.com/564x/9a/04/0a/9a040a80710f470a3991ceb8efc8de49.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
                <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src="https://i.pinimg.com/564x/47/63/e1/4763e11f4e89830253a0753b4532a055.jpg"
                    alt=""
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src="https://i.pinimg.com/564x/b0/8a/4f/b08a4f6313a097c2af241295baf43d4c.jpg"
                    alt=""
                  />
                </div>
                <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src="https://i.pinimg.com/564x/b1/e7/b4/b1e7b451727b6e339c30997ffb2065ca.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* /Right Column */}
          </div>
        </div>
      </>



      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: "\n  * {\n  font-family: 'Source Sans Pro';\n  }\n",
          }}
        />
        <section className="mx-auto max-w-screen-xl py-12 text-blue-700 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-blue-800">WELCOME TO</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl xl:text-4xl">
               To Find Your Perfect Friend Today!
              </h2>
              <hr className="mx-auto mt-4 h-2 w-32 border-none bg-blue-700" />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-10 sm:mx-auto sm:max-w-sm md:mt-12 md:max-w-full md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
              {/* Adopt a Dog Block */}
              <div className="bg-gray-200 shadow-xl rounded-xl p-4 md:p-6 flex flex-col items-center md:items-start">
                <img
                  className="h-32 mx-auto object-contain mb-4"
                  src="https://i.pinimg.com/564x/78/20/7b/78207b51e0e84d76c4c7b7b442347566.jpg"
                  alt="Adoptable Dog"
                />
                <h3 className="text-2xl">Adopt a Dog</h3>
                <p className="mt-2 text-sm">
                  Explore our wide selection of lovable dogs waiting for a new home.
                  From playful pups to gentle seniors, find the perfect dog to match
                  your lifestyle.
                </p>
                <Link href="/petList" className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-1.5 text-white transition hover:translate-y-1">
                  Learn more
                </Link>
              </div>

              {/* Adopt a Cat Block */}
              <div className="bg-gray-200 shadow-xl rounded-xl p-4 md:p-6 flex flex-col items-center md:items-start">
                <img
                  className="h-32 mx-auto object-contain mb-4"
                  src="https://i.pinimg.com/564x/c0/fa/41/c0fa4167887de57f712042fd2a48f801.jpg"
                  alt="Adoptable Cat"
                />
                <h3 className="text-2xl">Adopt a Cat</h3>
                <p className="mt-2 text-sm">
                  Find a feline friend! Whether you're looking for a cuddly kitten or
                  a calm, mature cat, we have many wonderful cats ready for adoption.
                </p>
                <button className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-1.5 text-white transition hover:translate-y-1">
                  Learn more
                </button>
              </div>

              {/* Adopt a Small Pet Block */}
              <div className="bg-gray-200 shadow-xl rounded-xl p-4 md:p-6 flex flex-col items-center md:items-start">
                <img
                  className="h-32 mx-auto object-contain mb-4"
                  src="https://i.pinimg.com/564x/71/9c/68/719c684ee23571b0126d831fda922614.jpg"
                  alt="Adoptable Rabbit"
                />
                <h3 className="text-2xl">Adopt a Small Pet</h3>
                <p className="mt-2 text-sm">
                  Looking for something smaller? We also have rabbits, guinea pigs,
                  and other small animals ready to become part of your family.
                </p>
                <button className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-1.5 text-white transition hover:translate-y-1">
                  Learn more
                </button>
              </div>

              {/* Support Our Mission Block */}
              <div className="bg-gray-200 shadow-xl rounded-xl p-4 md:p-6 flex flex-col items-center md:items-start">
                <img
                  className="h-32 mx-auto object-contain mb-4"
                  src="https://i.pinimg.com/564x/45/6d/64/456d6482d1ac90d5ca029fe39cf578db.jpg"
                  alt="Support Our Mission"
                />
                <h3 className="text-2xl">Support Our Mission</h3>
                <p className="mt-2 text-sm">
                  Not ready to adopt? There are other ways to help! Consider donating,
                  volunteering, or fostering to support our cause.
                </p>
                <button className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-1.5 text-white transition hover:translate-y-1">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>

      </>

      <section className="bg-gray-100  text-blue-900 py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-medium text-blue-600">OUR SERVICES</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">How We Make Adoption Easy</h2>
      <p className="mt-4 text-lg text-gray-600">
        We offer a range of services to ensure that finding and adopting your new furry friend is as seamless as possible.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      <div className="bg-blue-50 border border-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">Pet Matching</p>
            <p className="mt-2 text-gray-600">
              Our team will help match you with the perfect pet based on your lifestyle, preferences, and needs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13h14M5 17h14M5 9h14m-7 4v4" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">Adoption Counseling</p>
            <p className="mt-2 text-gray-600">
              Receive personalized counseling to ensure you're ready for pet ownership and understand all aspects of caring for your new friend.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">Post-Adoption Support</p>
            <p className="mt-2 text-gray-600">
              Enjoy ongoing support and resources to ensure a smooth transition for both you and your new pet.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  </div>
</section>



<section className="bg-gray-100 py-12 text-blue-900">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-medium text-blue-600">FEATURED PETS</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Meet Our Adorable Pets Ready for a New Home</h2>
      <p className="mt-4 text-lg text-gray-600">
        Explore our selection of lovable pets waiting for their forever homes. Each one is unique and ready to become a cherished member of your family.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src="https://www.humanesociety.org/sites/default/files/2023-12/dogswayhome.jpg"
          alt="Featured Pet 1"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">Bella</h3>
          <p className="mt-2 text-gray-500">A playful and affectionate Labrador ready to bring joy to your life.</p>
          <Link href="/petDetails/1" className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src="https://urbanpawsireland.com/wp-content/uploads/2023/02/lunatheaussiex_285502417_702180437673363_443895920204883167_n.jpeg"
          alt="Featured Pet 2"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">Luna</h3>
          <p className="mt-2 text-gray-500">A sweet and gentle kitten looking for a loving family to cuddle with.</p>
          <Link href="/petDetails/2" className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src="https://content.jdmagicbox.com/comp/remote/q4/0172px172.x172.180926194013.d4q4/catalogue/max-dog-kennel-chandigarh-sector-64-phase-10-chandigarh-pet-shops-nh0qoz2gu5.jpg"
          alt="Featured Pet 3"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">Max</h3>
          <p className="mt-2 text-gray-500">An energetic and loyal German Shepherd eager for adventures and playtime.</p>
          <Link href="/petDetails/3" className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudVrYdg7ayikSG9JV0Qka0v0xvZq6Jtz1DA&s"
          alt="Featured Pet 4"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">Milo</h3>
          <p className="mt-2 text-gray-500">A charming and friendly rabbit looking for a cozy home with lots of love.</p>
          <Link href="/petDetails/4" className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-6 text-blue-900 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
    <div className="flex flex-col lg:flex-row">
      {/* Main Testimonial Block */}
      <div className="relative mx-auto mb-8 flex h-80 overflow-hidden rounded-lg bg-blue-600 shadow-lg lg:mt-20 lg:h-auto lg:max-w-md lg:pt-10">
        <img
          className="absolute top-0 h-full w-full object-cover opacity-10"
          src="https://i.pinimg.com/564x/cb/22/a1/cb22a18790708796bf547bebd6cefe35.jpg"
          alt="Startup Success"
        />
        <div className="relative mt-auto w-full">
          <div className="flex flex-col p-4 lg:px-5 lg:py-6">
            <blockquote>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                "Adopting a pet from here changed our lives!"
              </p>
            </blockquote>
            <div className="mt-6 flex items-center">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://i.pinimg.com/564x/cb/22/a1/cb22a18790708796bf547bebd6cefe35.jpg"
                alt="Jacob Jones"
              />
              <div className="ml-3 text-white">
                <p className="text-sm font-bold">Jacob Jones</p>
                <p className="text-sm text-blue-300">Pet Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other Testimonials */}
      <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-8 lg:pl-10">
        <div className="flex flex-col bg-white p-4 rounded-lg shadow">
          <blockquote>
            <p className="text-sm leading-relaxed">
              "The team was incredibly helpful in finding the perfect pet for my family."
            </p>
          </blockquote>
          <div className="mt-3 flex items-center">
            <img
              className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
              src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
              alt="James Khawalski"
            />
            <div className="ml-3">
              <p className="text-sm font-bold">James Khawalski</p>
              <p className="mt-0.5 text-sm text-gray-500">Happy Adopter</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-lg shadow">
          <blockquote>
            <p className="text-sm leading-relaxed">
              "Amazing experience! We found our new best friend here."
            </p>
          </blockquote>
          <div className="mt-3 flex items-center">
            <img
              className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
              src="https://img.freepik.com/free-photo/cclose-up-portrait-lovely-young-woman-looking-camera-touching-chin-by-hand-outdoors_231208-6122.jpg"
              alt="Jacob Jones"
            />
            <div className="ml-3">
              <p className="text-sm font-bold">Emma Thompson</p>
              <p className="text-blue-90 mt-0.5 text-sm text-gray-500">Dog Lover</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-lg shadow">
          <blockquote>
            <p className="text-sm leading-relaxed">
              "Highly recommend! The staff genuinely cares about the pets."
            </p>
          </blockquote>
          <div className="mt-3 flex items-center">
            <img
              className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0yx-b5KgkGWZIoeQ_FH-I3iMTbqmXQMVCg&s"
              alt="Jenny Wilson"
            />
            <div className="ml-3">
              <p className="text-sm font-bold">Jenny Wilson</p>
              <p className="text-blue-90 mt-0.5 text-sm text-gray-500">Cat Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
    </div>
    </>
  )
}

export default Home