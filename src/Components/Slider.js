import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
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
                      <figcaption class="album-name">Love Is Blind</figcaption>
                    </figure>
                  </label>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li class="coverflow-item">
                  <label for="cover-2">
                    <figure class="album-cover">
                      <img src="https://vrnlexch.com/images/int2.webp" />
                      <figcaption class="album-name">Disintegration</figcaption>
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
  );
};

export default Slider;

// Slider js
