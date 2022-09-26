<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <img v-for="item in data.images" :key="item.id" :src="item">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "search-list",
  components: {
  },
  data() {
    return {
      data: null
    };
  },
  created() {
    this.getDataDetail();
  },
  methods: {
    async getDataDetail() {
      axios
				.get(`https://coccoc-manga.herokuapp.com/manga/${this.$route.query.source}/chapter`, {params: {url: this.$route.query.url}})
				.then(response =>(this.data = response.data));
      this.isLoading = false;
    }
  },
};
</script>
