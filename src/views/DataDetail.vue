<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <a v-for="item in data.chapters" :key="item.id" :href="'/item-detail?source=' + this.$route.query.source + '&url=' + item.url">{{item.name}}</a>
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
				.get(`https://coccoc-manga.herokuapp.com/manga/${this.$route.query.source}/detail`, {params: {url: this.$route.query.url}})
				.then(response =>(this.data = response.data));
      this.isLoading = false;
    }
  },
};
</script>
