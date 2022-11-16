<template>
  <div>
    <HeaderCont />
    <TitleCont name1="youtube" name2="reference api" />
    <section class="cont__refer">
      <div class="container">
        <div class="youtube__inner">
          <section id="youtube__slider">
            <swiper
              :slidesPerView="3"
              :spaceBetween="30"
              :slidesPerGroup="3"
              :loop="true"
              :loopFillGroupWithBlank="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              class="mySwiper youtubeSlider"
            >
              <swiper-slide
                v-for="video in slider"
                :key="video.id.videoId"
                class="youtubeSliderImg"
              >
                <a
                  :href="`https://www.youtube.com/watch?v=${video.id.videoId}`"
                >
                  <img
                    :src="video.snippet.thumbnails.medium.url"
                    :alt="video.channelTitle"
                  />
                </a>
              </swiper-slide>
            </swiper>
          </section>

          <section id="youtube__search">
            <h2>search</h2>
            <form @submit.prevent="YoutubeSearch()">
              <input
                id="search"
                type="search"
                placeholder="검색어를 입력하세요!"
                v-model="search"
              />
              <button type="submit">검색</button>
            </form>
          </section>

          <section id="youtube__cont">
            <div class="youtube__list">
              <ul>
                <li v-for="video in slider" :key="video.id.videoId">
                  <a
                    :href="`https://www.youtube.com/watch?v=${video.id.videoId}`"
                  >
                    <figure>
                      <img
                        class="sliderImg"
                        :src="video.snippet.thumbnails.medium.url"
                        :alt="video.channelTitle"
                      />
                    </figure>
                    <h2>{{ video.snippet.title }}</h2>
                  </a>
                </li>
              </ul>
            </div>
          </section>
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

import { Pagination, Autoplay } from "swiper";

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
    const youtube = ref([]);
    const slider = ref([]);
    const search = ref("musicplaylist");

    const YoutubeSearch = () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyARpIi7wYT1We05k6mliszOp-gkXK-eR2c&part=snippet&maxResults=30&type=video&q=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          youtube.value = result.items;
          search.value = "";
        })
        .catch((error) => console.log("errer", error));
    };
    YoutubeSearch();

    const YoutubeList = () => {
      fetch("https://eu-ny.github.io/react_api/src/utils/youtube.json")
        .then((response) => response.json())
        .then((result) => (slider.value = result.items))
        .catch((error) => console.log("errer", error));
    };
    YoutubeList();

    return {
      youtube,
      slider,
      search,
      YoutubeList,
      YoutubeSearch,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style lang="scss">
.youtube__list {
  ul {
    column-count: 3;
    column-gap: 20px;
    width: 100%;

    li {
      margin-bottom: 40px;

      figure {
        overflow: hidden;
        height: 220px;
        border-radius: 10px;

        img {
          width: 100%;
          vertical-align: top;
          height: 220px;
          object-fit: cover;
          transform: scale(1);
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

          &:hover {
            transform: scale(1.2);
          }
        }
      }
      h2 {
        font-family: var(--font-sub2);
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
      }
    }
  }
}

#youtube__search {
  margin-bottom: 120px;
  position: relative;

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

#youtube__slider {
  .swiper-pagination-bullet {
    background: rgb(143 143 143);
  }
  .youtubeSlider {
    padding-bottom: 0px;

    .swiper-wrapper {
      height: 200px;
      padding-bottom: 100px;

      a {
        .youtubeSliderImg {
          .sliderImg {
            width: 100%;
            height: 200px;
            vertical-align: top;
            object-fit: cover;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
