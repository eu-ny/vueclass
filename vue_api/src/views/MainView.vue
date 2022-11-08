<template>
  <div>
    <HeaderCont />
    <section class="Main__cont">
      <div class="container">
        <div class="main__inner">
          <div v-for="title in titles" v-bind:key="title.text">
            {{ title.text }}
          </div>
          <!-- <div>We provide</div>
          <div>visual</div>
          <div>solution</div>
          <div>for you API</div> -->
        </div>
      </div>
    </section>
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
  },

  data: function () {
    return {
      titles: [
        { text: "We provide" },
        { text: "visual" },
        { text: "solution" },
        { text: "for you API" },
      ],
    };
  },
};
</script>

<style lang="scss">
.main__inner {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  color: var(--black);

  > div {
    font-size: 8vw;
    line-height: 0.9;
    text-transform: uppercase;
  }
}
</style>
