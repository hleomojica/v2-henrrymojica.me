<template >
  <div class="text-gray-700" id="skills">
    <div class="flex justify-around mt-4">
      <div class="flex" v-for="(skill, index) in skills" :key="index">
        <img :src="skill.icon" :alt="skill.name" :title="skill.name" />
        
      </div>
    </div>
  </div>
</template>

<style scoped>
#skills{
    margin-top: 3rem;
    margin-bottom:3rem;
    width: 100%;
}

img {
  width: 42px;
  height: 42px;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s;
}
img:hover {
  opacity: 1;
}
img:not(:last-child) {
  margin-right: 6px;
}
.card {
  /* height: fit-content; */
  color: white;
  padding: 0 0.25em;
  border-radius: 6px;
  width: 50%;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "PHP",
          rate: 100,
          icon: require("@/assets/icons/php.svg"),
        },
        {
          name: "JavaScript",
          rate: 100,
          icon: require("@/assets/icons/javascript.svg"),
        },
        {
          name: "Vue.js",
          rate: 70,
          icon: require("@/assets/icons/vuejs.svg"),
        },
        {
          name: "Angular.js",
          rate: 70,
          icon: require("@/assets/icons/angular.svg"),
        },
        {
          name: "Node.js",
          rate: 80,
          icon: require("@/assets/icons/nodejs.svg"),
        },
        {
          name: "TypeScript",
          rate: 85,
          icon: require("@/assets/icons/typescript.svg"),
        },
        
        
      ],
    };
  },
  methods: {
    calculateColor(rate) {
      let color;
      if (rate > 85) color = "#27ae60";
      else if (rate > 70) color = "#16a085";
      else if (rate > 50) color = "#f39c12";
      else color = "#c0392b";
      return color;
    },
  },
};
</script>