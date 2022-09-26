<template>
  <div class="card mb-4 flex-fill">
    <router-link :to="referenceUrl">
      <img :src="avatarUrl" class="card-img-top" />
    </router-link>
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="referenceUrl">{{ title }}</router-link>
      </h5>
      <!-- <p class="card-text">{{ description }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    avatarUrl: String,
    title: String,
    description: String,
    referenceUrl: String,
  },
};
</script>