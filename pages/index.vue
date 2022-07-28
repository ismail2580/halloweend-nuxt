<template>
  <div class="container">
    <navBar />
    <home />
    <category />
    <TrickOrTreat />
    <subscribe />
    <Footer />
  </div>
</template>

<script>
import home from "~/pages/home.vue";
import category from "~/pages/category.vue";
import navBar from "~/components/navBar.vue";
import TrickOrTreat from "~/pages//TrickOrTreat.vue";
export default {
  components: { navBar, home, category, TrickOrTreat },
  name: "IndexPage",
};
</script>
