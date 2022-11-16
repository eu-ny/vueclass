<template>
  <div>
    <HeaderCont />
    <TitleCont name1="unsplach" name2="reference api" />
    <section class="cont__refer">
      <div class="container">
        <div class="unsplash__inner">
          <div class="unsplash__slider">
            <swiper
              :slidesPerView="3"
              :spaceBetween="30"
              :slidesPerGroup="3"
              :loop="true"
              :loopFillGroupWithBlank="true"
              :navigation="true"
              :modules="modules"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              class="mySwiper"
            >
              <swiper-slide
                v-for="splash in slider"
                :key="splash.id"
                class="splashImgSlider"
              >
                <a :href="`https://unsplash.com/photos/${splash.id}`">
                  <img
                    class="splashImg"
                    :src="splash.urls.regular"
                    :alt="splash.id"
                  />
                </a>
              </swiper-slide>
            </swiper>
          </div>

          <div class="unsplash__search">
            <div class="container">
              <h2>search</h2>
              <form @submit.prevent="SearchSplashs()">
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

          <div class="unsplash__images">
            <ul>
              <li v-for="splash in splashes" :key="splash.id">
                <a :href="`https://unsplash.com/photos/${splash.id}`">
                  <img :src="splash.urls.regular" :alt="splash.id" />
                </a>
              </li>
            </ul>
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
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

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
    const splashes = ref([]);
    const slider = ref([]);
    const search = ref("sky");

    // vue는 자바스크립트와 문법이 거의 동일하여 js 코드를 붙여넣어도 잘 작동한다.
    const SearchSplashs = () => {
      fetch(
        `https://api.unsplash.com/search/photos/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&per_page=20&query=${search.value}`
      )
        .then((response) => response.json())
        // .then((result) => console.log(result))
        .then((result) => {
          splashes.value = result.results;
          search.value = "";
        })
        .catch((error) => console.log("error", error));
    };

    const RandomSplashs = () => {
      fetch(
        "https://api.unsplash.com/photos/random/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&count=20"
      )
        .then((response) => response.json())
        .then((result) => (slider.value = result))
        .catch((error) => console.log("error", error));

      fetch(
        "https://api.unsplash.com/photos/random/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&count=20"
      )
        .then((response) => response.json())
        .then((result) => (splashes.value = result))
        .catch((error) => console.log("error", error));
    };

    RandomSplashs();

    return {
      splashes,
      search,
      slider,
      SearchSplashs,
      RandomSplashs,
      modules: [Autoplay, Navigation],
    };
  },
};
</script>

<style lang="scss">
.unsplash__search {
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

.unsplash__slider {
  .splashImgSlider {
    overflow: hidden;
    border-radius: 10px;
    height: 350px;
  }
  .splashImg {
    height: 350px;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      transform: scale(1.2);
    }
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 240px;
    margin: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff !important;
    top: 35%;
  }
}

.unsplash__images {
  img {
    height: 400px;
    object-fit: cover;
    vertical-align: top;
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      width: 23%;
      margin-bottom: 30px;
      overflow: hidden;
      border-radius: 10px;

      img {
        transform: scale(1);
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
// .unsplash__images > ul {
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// }
// .unsplash__images > ul > li {
//   width: 23%;
//   margin-bottom: 30px;
//   overflow: hidden;
// }
</style>
