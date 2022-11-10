<template>
  <div>
    <HeaderCont />
    <!-- 속성 만들기 -->
    <TitleCont name1="reference" name2="api" />
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
        .then((result) => console.log(result))
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
