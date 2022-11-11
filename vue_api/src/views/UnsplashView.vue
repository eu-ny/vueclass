<template>
  <div>
    <HeaderCont />
    <TitleCont name1="unsplach" name2="reference api" />
    <section class="cont__refer">
      <div class="container">
        <div class="unsplash__inner">
          <div class="unsplash__slider"></div>
          <div class="unsplash__searchr"></div>
          <div class="unsplash__images">
            <ul>
              <li v-for="splash in splashes" :key="splash.id">
                <a href="/">
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

export default {
  components: {
    HeaderCont,
    TitleCont,
    ContactCont,
    FooterCont,
  },

  setup() {
    const splashes = ref([]);
    const search = ref("landscape");

    // vue는 자바스크립트와 문법이 거의 동일하여 js 코드를 붙여넣어도 잘 작동한다.
    // const SearchSplashs = () => {
    //   fetch(
    //     `https://api.unsplash.com/search/photos/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&query=${search.value}`
    //   )
    //     .then((response) => response.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
    // };
    const RandomSplashs = () => {
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
      // SearchSplashs,
      RandomSplashs,
    };
  },
};
</script>

<style>
.unsplash__images {
}
.unsplash__images > ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.unsplash__images > ul > li {
  width: 23%;
  margin-bottom: 50px;
}
</style>
