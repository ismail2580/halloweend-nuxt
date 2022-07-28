<template>
  <section id="trick-or-treat" class="flex flex-col items-center py-10">
    <h2 class="mt-10 mb-28 text-6xl text-white font-bold">Trick Or Treat</h2>
    <div class="grid grid-cols-3 gap-10">
      <div
        v-for="(tot, i) of tots"
        :key="tot.title"
        class="grid place-items-center gap-5 p-8 text-center rounded-md text-white bg-gradient-to-b"
        :class="i === 1 
        ? 'from-primary-200/50 to-primary-200/30 -translate-y-10'
        : 'from-primary-200/20 to-primary-100/10'"
      >
        <div>
          <img :src="tot.image" alt="tots" />
        </div>
        <h3 class="text-4xl font-bold">{{ tot.title }}</h3>
        <p class="w-[90%]">{{ tot.desc }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import tor1 from "../assets/images/tor1-img.png";
import tor2 from "../assets/images/tor2-img.png";
import tor3 from "../assets/images/tor3-img.png";
import tor4 from "../assets/images/tor4-img.png";
import tor5 from "../assets/images/tor5-img.png";
import tor6 from "../assets/images/tor-6-img.png";

export default {
  data() {
    return {
      tots: [
        {
          title: "Candy",
          image: tor1,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. `,
        },
        {
          title: "Ghost",
          image: tor2,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. `,
        },
        {
          title: "Grave",
          image: tor3,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. `,
        },
        {
          title: "House",
          image: tor4,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. `,
        },
        {
          title: "Spider",
          image: tor5,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. `,
        },
        {
          title: "Bone",
          image: tor6,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur. `,
        },
      ],
    };
  },
};
</script>
