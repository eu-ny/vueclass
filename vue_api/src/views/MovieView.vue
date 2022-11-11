<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Movie" name2="reference api" />
    <section class="cont__refer">
      <div class="container">
        <div class="movie__inner">
          <div class="movie__slider">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :pagination="false"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(slider, index) in sliders" :key="slider.id">
                <a :href="`https://image.tmdb.org/movie/${slider.id}`">
                  <span className="rank">{{ index + 1 }}</span>
                  <img
                    :src="`https://image.tmdb.org/t/p/w500/${slider.poster_path}`"
                    :alt="slider.title"
                  />
                  <em>
                    <span class="title">{{ slider.title }}</span>
                  </em>
                </a>
              </swiper-slide>
            </swiper>
          </div>
          <!-- //movie__slider -->

          <div class="movie__search">
            <div class="container">
              <h2>search</h2>
              <form @submit.prevent="SearchMovies()">
                <input
                  id="search"
                  type="search"
                  placeholder="검색어를 입력하세요!"
                  v-model="search"
                />
                <button type="submit">검색</button>
              </form>
            </div>
          </div>
          <!-- //movie__search -->

          <div class="movie__movies">
            <div class="container">
              <div class="movie__list">
                <ul>
                  <li v-for="movie in movies" :key="movie.id">
                    <a :href="`https://image.tmdb.org/movie/${movie.id}`">
                      <img
                        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                        :alt="movie.title"
                      />
                      <em>
                        <span class="title">{{ movie.title }}</span>
                        <span className="star">{{ movie.vote_average }}</span>
                      </em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactCont />
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default {
  components: {
    HeaderCont,
    TitleCont,
    ContactCont,
    FooterCont,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const movies = ref([]);
    const sliders = ref([]);
    const search = ref("marvel");

    const SearchMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=25ea29c228b2fc90f5b08707dd1c8828&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          movies.value = result.results;
          search.value = "";
        })
        .catch((error) => console.log("errer", error));
    };
    SearchMovies();

    const TopMovies = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=25ea29c228b2fc90f5b08707dd1c8828&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.results))
        .catch((error) => console.log("errer", error));
    };
    TopMovies();

    return {
      movies,
      sliders,
      search,
      SearchMovies,
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.movie__inner {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      width: 19%;
      margin-bottom: 3%;
      position: relative;

      a {
        em {
          text-decoration: none;
          display: block;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 5%;

          .title {
            font-family: var(--font-sub3);
          }

          .star {
            background: #fff;
            color: #000;
            position: absolute;
            left: 10px;
            top: 10px;
            width: 30px;
            height: 30px;
            border-radius: 100px;
            text-align: center;
            line-height: 30px;
            font-weight: 800;
          }
        }
      }
    }
  }
}

.movie__search {
  margin-bottom: 100px;

  .container {
    position: relative;
  }

  h2 {
    color: var(--black);
    font-size: 40px;
    text-indent: -9999px;
    height: 0;
  }
  input {
    background: #95959545;
    width: 100%;
    color: var(--black);
    border: none;
    border-radius: 50px;
    padding: 16px 30px;
    font-family: var(--font-sub3);
    font-size: 14px;
  }

  button {
    position: absolute;
    right: 8px;
    top: 5px;
    width: 43px;
    height: 41px;
    border-radius: 50%;
    border: 0;
    font-family: var(--font-sub3);
    cursor: pointer;
    z-index: 1000;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;

  .rank {
    position: absolute;
    top: -38px;
    left: 20px;
    height: 4vw;
    width: 3vw;
    text-align: center;
    line-height: 4vw;
    font-size: 6vw;
    font-family: var(--font-sub1);
    // opacity: 0.7;
    color: #ffffff;
  }

  img {
    display: block;
    width: 100%;
  }
  em {
    text-decoration: none;
    display: block;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5%;

    .title {
      font-family: var(--font-sub3);
    }
  }
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 240px;
  margin-bottom: 120px;
}
// .swiper-3d .swiper-slide-shadow-right,
// .swiper-3d .swiper-slide-shadow-left {
//   background-image: none !important;
// }
</style>
