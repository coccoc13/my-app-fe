<template>
  <div class="card mb-4 flex-fill">
    <a :href="referenceUrl"><img :src="avatarUrl" class="card-img-top"></a>
    <div class="card-body">
    <h5 class="card-title"><a :href="referenceUrl">{{ title }}</a></h5>
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
    referenceUrl: String
  },
};
</script>