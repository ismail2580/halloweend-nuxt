<template>
  <div>
    <section id="category" class="flex flex-col items-center py-10">
      <h2 class="my-10 text-6xl text-white font-bold">Category</h2>
      <div class="grid grid-cols-3 place-items-center">
        <div
          v-for="category of categories"
          :key="category.title"
          class="text-white grid place-items-center text-center gap-5"
        >
          <div class="p-10">
            <img :src="category.image" alt="category1" class="w-full" />
          </div>
          <h3 class="text-3xl font-bold">{{ category.title }}</h3>
          <p class="w-3/4">
            {{ category.desc }}
          </p>
        </div>
      </div>
    </section>
    <section class="grid grid-flow-col grid-cols-2 gap-10 items-center">
      <div class="pt-10">
        <img src="../assets/images/category2-img (1).png" alt="" />
      </div>
      <div>
        <div>
          <h2 class="text-6xl font-bold text-white">What's that</h2>
          <div class="flex items-center gap-5">
            <h2 class="text-6xl font-bold text-white">Halloween</h2>
            <img src="../assets/images/head2-img.png" alt="" />
          </div>
        </div>
        <p class="mt-12 text-white text-xl w-[88%]">
          Halloween or Hallowe'en, also known as Allhalloween, All Hallows' Eve,
          or All Saints' Eve, is a celebration observed in many countries on 31
          October, the eve of the Western Christian feast of All Hallows' Day.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import category1 from "../assets/images/category1-img.png";
import category2 from "../assets/images/category2-img.png";
import category3 from "../assets/images/category3-img.png";

export default {
  data() {
    return {
      categories: [
        {
          title: "Ghost",
          image: category1,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id
          consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas
          nascetur.`,
        },
        {
          title: "Witch",
          image: category2,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id
          consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas
          nascetur.`,
        },
        {
          title: "Pumpkin",
          image: category3,
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id
          consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas
          nascetur.`,
        },
      ],
    };
  },
};
</script>
