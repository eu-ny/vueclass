<template>
  <div>
    <HeaderCont />
    <!-- 속성 만들기 -->
    <TitleCont name1="reference" name2="api" />
    <section class="cont__refer">
      <div class="container">
        <div class="refer__inner">
          <h2>CSS</h2>
          <ul class="refer__list">
            <li v-for="refer in refers" :key="refer.name">
              <a href="/">
                <span class="num">{{ refer.num }}</span>
                <span class="name">{{ refer.name }}</span>
                <span class="desc">{{ refer.desc }}</span>
                <span class="star">{{ refer.descStar }}</span>
              </a>
            </li>
          </ul>
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

  // 함수 만들기
  setup() {
    const refers = ref([]);

    const reference = () => {
      fetch("https://eu-ny.github.io/react_api/src/utils/referenec.json")
        .then((response) => response.json())
        // .then((result) => console.log(result.cssRefer))
        .then((result) => (refers.value = result.cssRefer))
        .catch((error) => console.log("error", error));
    };
    reference();

    return {
      refers,
      reference,
    };
  },
};
</script>

<style lang="scss">
.refer__inner {
  padding-bottom: 200px;

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
    font-family: var(--font-sub1);
    color: var(--black);
  }
}

.refer__list {
  border: 1px solid var(--bg-light-border);

  li {
    border-bottom: 1px solid var(--bg-light-border);

    a {
      display: flex;
      align-items: center;
      width: 100%;
      color: var(--black);

      span {
        display: inline-block;
        padding: 15px 20px;
      }

      .num {
        flex: 1 1 5%;
        text-align: center;
        font-family: var(--font-sub1);
        border-right: 1px solid var(--bg-light-border);
      }
      .name {
        flex: 1 1 20%;
        text-align: center;
        font-family: var(--font-sub3);
        border-right: 1px solid var(--bg-light-border);
      }
      .desc {
        flex: 1 1 65%;
        font-family: var(--font-sub3);
        border-right: 1px solid var(--bg-light-border);
      }
      .star {
        flex: 1 1 10%;
        text-align: center;
      }
    }
  }
}
</style>
