import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Home = () => {
  const continuousAnimation = {
    y: [0, 20, 0], // Animation keyframes for y-axis
    transition: {
      duration: 2, // Duration of one cycle
      repeat: Infinity, // Repeat the animation infinitely
      ease: "easeInOut", // Easing function for the animation
    },
  };
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const buttonTop = buttonRef.current.getBoundingClientRect().top;
    const secondSectionBottom = windowHeight * 1.5; // Adjust based on your section height

    if (window.scrollY > secondSectionBottom && buttonTop < windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <div>
      <div
        id="section1"
        className="bg-black flex flex-col lg:flex-row items-center p-5 lg:p-10 overflow-hidden min-h-screen"
        style={{
          backgroundImage:
            'url("https://img.baba-blog.com/2024/02/4-essential-arena-stadium-lighting-solutions_00.jpg?x-oss-process=style%2Ffull")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="md:flex items-center lg:-mx-10 flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <motion.img
                className="w-full h-full lg:mt-80"
                src="https://vrnlexch.com/images/bg-casino.webp"
                alt=""
                animate={continuousAnimation}
              />
              <div className="lg:-mt-10 lg:ml-5 text-center lg:text-left mt-5 lg:mt-0">
                <div className="w-full lg:w-96 h-8 bg-sky-700 mx-auto lg:mx-0">
                  <h1 className="text-white px-8 mt-1 font-bold text-lg">
                    India and Bangladesh's #1 Exchange
                  </h1>
                </div>
                <h5 className="text-2xl font-extrabold text-white mt-14">
                  GET YOUR WHITE LABEL WITH THE BIGGEST
                </h5>
                <h1 className="font-extrabold uppercase text-4xl lg:text-8xl -mt-2 text-white">
                  EXCHANGE
                </h1>
                <p className="text-lg lg:text-2xl text-white mt-8">
                  NO. 1 PLATFORM FOR PROVIDING SPORTS AND CASINO WHITE LABELS
                </p>
                <button className="bg-gray-900 text-white text-lg lg:text-2xl h-12 lg:h-16 font-bold border-4 border-gray-700 px-4 py-2 rounded-md shadow w-full lg:w-auto mt-14">
                  Get Your White Label Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-5 lg:px-10 mt-10 lg:mt-0">
            <div className="relative">
              <motion.img
                src="https://vrnlexch.com/images/players_11zon.webp"
                className="w-full h-full relative z-10"
                alt=""
                animate={continuousAnimation}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-36 bg-black">
  <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-48">
    <h1 className="text-3xl sm:text-4xl mt-10 font-extrabold text-white text-center sm:text-left">
      Whatsapp<span className="text-sky-600"> us on</span>
    </h1>
    <div className="flex flex-col mt-10 sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button className="bg-sky-600 text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-md shadow w-full h-14 sm:w-auto">
        +91 82688 08222
      </button>
      <button className="bg-sky-600 text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-md shadow w-full h-14 sm:w-auto">
        +91 70455 58242
      </button>
    </div>
  </div>
</div>

      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="/"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              alt="call"
              class="object-cover object-center w-full h-full rounded-full"
              src="https://store-images.s-microsoft.com/image/apps.8985.13655054093851568.1c669dab-3716-40f6-9b59-de7483397c3a.8b1af40f-2a98-4a00-98cd-94e485a04427"
            />
          </a>
        </div>
      </div>

      <div
        id="section2"
        class="w-full min-h-screen bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            'url("https://static.vecteezy.com/system/resources/thumbnails/007/642/038/small_2x/blue-dot-shaped-confetti-flying-with-glowing-bokeh-light-effect-on-blue-sky-background-animated-background-free-video.jpg")',
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center">
            <h1 class="text-6xl mt-20 font-extrabold text-white">
              Premium Sports White Lavel
            </h1>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-5 justify-center items-center mx-auto mt-10">
              <div class="bg-black rounded-xl h-72 w-fit mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-16 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/skylogo.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Skyexch
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl h-72 w-fit mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-24 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/velkilogo.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Velki
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl h-72 w-fit mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-32 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/bb88_logo_w_sponsor.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Babu365
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl h-72 w-fit mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-32 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/crwelcom.png"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Cxwellcome
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl h-72 w-fit mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-32 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/gullybet.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Gullybit
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl w-fit h-72 mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-24 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/logo-bazi.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      9Bazi
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl w-fit h-72 mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-24 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/aura.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Aura444
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl w-fit h-72 mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-24 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/diamond.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Diamond
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl w-fit h-72 mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-24 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/lotus.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      Lotus
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-black rounded-xl w-fit h-72 mx-auto flex flex-col justify-center gap-y-4">
                <div class="w-full flex flex-col h-72 justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                  <img
                    class="w-24 mx-auto mt-2"
                    src="https://vrnlexch.com/images/logos/world7777.webp"
                    alt="Professional UI/UX Design Service"
                  />
                  <div class="flex flex-col gap-y-2">
                    <h4 class="text-3xl font-bold text-white text-center mt-10">
                      World7777
                    </h4>
                    <button
                      type="button"
                      class="py-2.5 mt-10 px-5 me-2 mb-2 text-xl font-bold text-white focus:outline-none bg-white rounded-lg border-4 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Get Demo Id
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-40 bg-gray-900/40"></div>
      </div>
      {/* ------------------------------------ 3rd Part ----------------- */}
      <div id="section3" class="flex flex-wrap justify-between px-10 bg-black">
        <div className="sm:w-6/12">
          <img
            src="https://vrnlexch.com/images/casinogirl.webp"
            alt="Leafs"
            class="w-4/5 object-cover"
          />
        </div>
        <div class="w-full sm:w-6/12 mb-10">
          <div class="container h-full">
            <header class="mx-10 lg:flex mt-10 items-center h-full">
              <div class="w-full">
                <h1 class="text-3xl font-bold">
                  <span className="text-sky-600">We are</span> VRNL
                </h1>
                <h1 class="text-2xl font-extrabold mt-3 text-white">
                  THE LARGEST PLATFORM FOR WHITE LABEL CASINO BETTING SERVICES
                </h1>
                <p class="text-xl mt-2 text-white">
                  The widest selection of entertainment games available
                  <br /> with 3,000+ games.
                  <br /> Our platform is easy to use and provides remarkable
                  <br /> exprerience to the user.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-20 space-y-4 sm:space-y-0 sm:space-x-4">
                  <button class="bg-sky-600 text-white text-2xl font-bold px-4 py-2 rounded-md shadow w-full h-16 sm:w-auto">
                    Whatsapp on - +9182688 08222
                  </button>
                  <button class="bg-gray-900 text-white text-xl h-16 font-bold border-4 border-gray-700 px-4 py-2 rounded-md shadow w-full sm:w-auto">
                    Get Your White Label Now
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <section id="section4">
        <img src="https://vrnlexch.com/images/partners.webp" alt="" />
      </section>

      {/* ----------------------------- About -------------------------------------------- */}
      <div
        class="w-full min-h-screen bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1559242550-bdfaa5081d95?q=80&w=3562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div id="section5">
          <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
              <h1 class="text-6xl mt-20 font-extrabold text-white">About Us</h1>
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-36 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center">
                <p className=" text-white text-2xl text-center">
                  VRNL Exch is ready to revolutionize the way our clients
                  operate in the online betting space. VRNL’s commitment of
                  providing unparalleled B2B solutions for sports betting that
                  not only meet but exceed the ever-evolving needs of our
                  clients, by combining technological excellence with a deep
                  understanding of the industry. VRNL Exch aims to be the
                  driving force behind your success.
                </p>
                <p className=" text-white text-2xl mt-20 text-center">
                  VRNL Exch operates in the iGaming industry, providing
                  business-to-business (B2B) solutions for betting sites. White
                  label solutions, APIs, and other services which are crucial
                  components of the iGaming ecosystem.
                </p>
                <p className=" text-white text-2xl mt-20 text-center">
                  Behind VRNL Exch is a team of passionate professionals who
                  bring a wealth of experience and expertise to the table.
                  VRNL’s diverse team is united by a shared commitment to
                  excellence, innovation, and customer satisfaction.
                </p>
                <p className=" text-white text-2xl mt-20 text-center">
                  As we reflect on our journey at VRNL Exch, our unwavering
                  dedication to empowering businesses in the iGaming sector
                  stands strong.VRNL Exch is not just a service provider; we are
                  your strategic ally, committed to driving your success. Join
                  us as we continue to push boundaries, set new industry
                  standards, and chart a course towards a future where
                  innovation and client satisfaction intersect seamlessly. Your
                  aspirations are our inspiration, and at VRNL Exch, we look
                  forward to being the catalyst for your continued growth
                </p>
              </div>
              <div>
                <img
                  className="object-cover w-full h-full rounded shadow-lg sm:h-96"
                  src="https://vrnlexch.com/images/aboutus.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
              <h1 class="text-6xl mt-20 font-extrabold text-white">
                PREMIUM & BUDGET-FRIENDLY PICKS
              </h1>
            </div>
          </div>
        </div>

        {/* ------------------------ Flip Hover--------------------- */}

        <div className="flex flex-col md:flex-row gap-16 justify-center items-center mt-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1 className="text-6xl text-yellow-600 font-black mt-40 gradient-text">
                  Premium
                </h1>
              </div>
              <div className="flip-card-back">
                <h1 className="text-2xl font-bold mt-5 uppercase gradient-text">
                  Score Book Maker
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-3 gradient-text">
                  T10 Virtuals
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-3 gradient-text">
                  premium result tab
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-3 gradient-text">
                  srl e-cricket, e-score match
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-5 gradient-text">
                  exchange odds including
                  <br />
                  bookmaker /fancy / premium market
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-5 gradient-text">
                  not bitfair matches with
                  <br />
                  bm /fancy / premium market
                </h1>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1 className="text-5xl text-yellow-600 font-black mt-40 gradient-text">
                  Non - Premium
                </h1>
              </div>
              <div className="flip-card-back">
                <h1 className="text-2xl font-bold mt-5 uppercase gradient-text">
                  exchange odds
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-3 gradient-text">
                  T10 Virtuals
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-3 gradient-text">
                  cricket fancy / bookmaker
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-3 gradient-text">
                  srl e-cricket, e-score match
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-5 gradient-text">
                  not bitfair matches with
                  <br />
                  bm /fancy / premium market
                </h1>
                <h1 className="text-2xl font-bold uppercase mt-5 gradient-text">
                  diamond casino / international casino
                </h1>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* -------------------------- Why Choose ----------------------------------------- */}
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center">
            <h1 class="text-6xl mt-20 font-extrabold text-white">
              <span className="text-sky-600">Why</span> VRNL
            </h1>
          </div>
        </div>
        <div className="container mx-auto mt-20 px-5 md:px-10">
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3 justify-items-center items-center">
            <div className="w-full md:w-10/12 border-2 border-gray-600 h-80 bg-gray-950 mb-5 md:mb-0">
              <div className="flex justify-between items-center px-2 mt-5">
                <img
                  className="w-40 -mt-10"
                  src="https://i.postimg.cc/jdSKpfNN/Screenshot-from-2024-05-22-23-51-56.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl text-sky-500">
                    ADVANCED DESIGNS
                  </h1>
                  <p className="text-lg text-white mt-2">
                    At VRNL Exch, our creative team produces high-quality
                    designs, giving your projects a standout touch of
                    excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-10/12 border-2 border-gray-600 h-80 bg-gray-950 mb-5 md:mb-0">
              <div className="flex justify-between items-center px-2 mt-5">
                <img
                  className="w-40 -mt-10"
                  src="https://i.postimg.cc/tCYYqxP0/Screenshot-from-2024-05-23-02-01-38.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl text-sky-500">
                    24 /7 SUPPORT
                  </h1>
                  <p className="text-lg text-white mt-2">
                    At VRNL Exch, our team of experts is available 24/7 to
                    assist you through WhatsApp chats.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-10/12 border-2 border-gray-600 h-80 bg-gray-950 mb-5 md:mb-0">
              <div className="flex justify-between items-center px-2 mt-5">
                <img
                  className="w-40 -mt-10"
                  src="https://i.postimg.cc/QdV8kGmR/Screenshot-from-2024-05-23-02-03-47.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl text-sky-500">
                    100% TRUSTED SERVICE
                  </h1>
                  <p className="text-lg text-white mt-2">
                    At VRNL Exch, transparency and accuracy hold utmost
                    importance, both for us and our valued customers. We conduct
                    business in the most transparent manner possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-10/12 border-2 border-gray-600 h-80 bg-gray-950 mb-5 md:mb-0">
              <div className="flex justify-between items-center px-2 mt-5">
                <img
                  className="w-40 -mt-10"
                  src="https://i.postimg.cc/139QJxH9/Screenshot-from-2024-05-23-02-07-02.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl text-sky-500">
                    QUALITY ASSURANCE
                  </h1>
                  <p className="text-lg text-white mt-2">
                    At VRNL Exch, we ensure that everything is top-notch and
                    meets the highest standards to provide you with the best
                    quality service.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-10/12 border-2 border-gray-600 h-80 bg-gray-950 mb-5 md:mb-0">
              <div className="flex justify-between items-center px-2 mt-5">
                <img
                  className="w-40 -mt-10"
                  src="https://i.postimg.cc/jdSKpfNN/Screenshot-from-2024-05-22-23-51-56.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl text-sky-500">
                    PAYMENT METHODS
                  </h1>
                  <p className="text-lg text-white mt-2">
                    At VRNL Exch, we offer multiple payment methods. Customers
                    can conveniently make payments through Net Banking, Bank
                    Transfer, Paytm, Google Pay, Cryptocurrency.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-10/12 border-2 border-gray-600 h-80 bg-gray-950 mb-5 md:mb-0">
              <div className="flex justify-between items-center px-2 mt-5">
                <img
                  className="w-40 -mt-10"
                  src="https://i.postimg.cc/KzsPsyLC/Screenshot-from-2024-05-23-02-10-40.png"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl text-sky-500">
                    HIGH SECURITY
                  </h1>
                  <p className="text-lg text-white mt-2">
                    At VRNL Exch, security is our top priority, ensuring that
                    your data and information are kept safe and not shared at
                    any point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------- Slider --------------------------------- */}
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center">
            <h1 class="text-6xl mt-20 font-black text-white">INSTAGRAM</h1>
          </div>
        </div>
        <div class="main-container">
          <div class="coverflow-container">
            <ol className="coverflow-list">
              <Swiper
                spaceBetween={30}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4} // Ensure multiple slides are visible
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-1">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int10.webp" />
                        <figcaption class="album-name">
                          Love Is Blind
                        </figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-2">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int2.webp" />
                        <figcaption class="album-name">
                          Disintegration
                        </figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-3">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int1.webp" />
                        <figcaption class="album-name">Dream Harder</figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-4">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int9.webp" />
                        <figcaption class="album-name">Wish</figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-4">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int8.webp" />
                        <figcaption class="album-name">Wish</figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-4">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int7.webp" />
                        <figcaption class="album-name">Wish</figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="coverflow-item">
                    <label for="cover-4">
                      <figure class="album-cover">
                        <img src="https://vrnlexch.com/images/int6.webp" />
                        <figcaption class="album-name">Wish</figcaption>
                      </figure>
                    </label>
                  </li>
                </SwiperSlide>
              </Swiper>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full h-28 bg-black"></div>
      <div id="section6" className="bg-black md:px-20">
        <div className="px-20">
          <img
            className=""
            src="https://vrnlexch.com/images/logos/logos.webp"
            alt=""
          />
          <div>
            <h1 className="text-4xl text-white mt-10">Get in Touch</h1>
            <p className="text-2xl text-white mt-3">
              Discover the difference that VRNL Exch can make for your business.
              Whether you are a startup looking to enter the market or an
              established operator seeking to enhance your offerings, VRNL Exch
              is here to help you succeed.
            </p>
            <h1 className="text-5xl mt-10 font-extrabold text-white">
              <span className="text-sky-600">WHATSAPP</span> US ON
            </h1>
            <div className="flex flex-col sm:flex-row justify-start gap-5 items-center mt-20">
              <button
                type="button"
                className="text-white bg-sky-600 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-extrabold rounded-lg text-3xl px-20 py-6 text-center inline-flex items-center me-2 mb-2"
              >
                + 91 82688 08222
              </button>
              <button
                type="button"
                className="text-white bg-sky-600 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-extrabold rounded-lg text-3xl px-20 py-6 text-center inline-flex items-center me-2 mb-2"
              >
                + 91 70455 58242
              </button>
            </div>
            <h1 className="text-4xl text-white mt-10">
              Join VRNL Exch on this exciting journey in the world of iGaming
            </h1>
          </div>
          <div className="grid bg-black gap-3 grid-cols-3 md:grid-cols-8 justify-center items-center mt-10 w-4/5">
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm">Home</h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">
                Our Work
              </h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">
                Casino Provider
              </h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">
                About Us
              </h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">
                Why VRNL
              </h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">Blogs</h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">
                Contract Us
              </h1>
            </a>
            <a href="/">
              <h1 className="text-white hover:text-sky-600 text-sm ">
                Discover The Latest
              </h1>
            </a>
          </div>
          <div className="flex md:flex-row justify-between items-center w-full md:w-1/4 mt-10">
            <a href="/">
              <img
                className="w-7 h-7 rounded-full"
                src="https://cdn-1.webcatalog.io/catalog/facebook/facebook-icon-filled-256.png?v=1714817117603"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="w-7 h-7 rounded-full"
                src="https://cdn-icons-png.flaticon.com/256/1409/1409946.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="w-7 h-7 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IgZ4JH8svBzZilbKqGBCVpd-rpq0-mQW6QpNWgdatA&s"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="w-7 h-7 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="w-7 h-7 rounded-full"
                src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="w-7 h-7 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Skype_logo_%282019%E2%80%93present%29.svg/991px-Skype_logo_%282019%E2%80%93present%29.svg.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div
        ref={buttonRef}
        className="flex items-end justify-end fixed bottom-0 left-0 mb-4 mr-4 z-10"
        style={{ visibility: isVisible ? "visible" : "hidden" }} // Use visibility for better performance
      >
        <div>
          <a
            title="Buy me a beer"
            href="/"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              alt="call"
              className="object-cover object-center w-full h-full rounded-full"
              src="https://as2.ftcdn.net/v2/jpg/04/32/63/05/1000_F_432630546_Jj9U2Fen7E74wxuVdfTzq822qmQcvDA4.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
// Home js
