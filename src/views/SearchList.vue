<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="form-inline">
        <select class="form-select form-group" aria-label="Default select example" v-model="currentSource">
          <option v-for="source in sourceList" :key="source.key" :value="source.id">{{source.name}}</option>
        </select>
        <input class="form-control form-group" v-model="keyword">
        <button class="btn btn-light form-group" @click="search" :disabled="isLoading">Search</button>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-6 col-md-3 col-xxl-2 d-flex" v-for="item in list" :key="item.id">
        <card-item
          :avatarUrl="item.avatar"
          :title="item.name"
          :description="item.shortDescription"
          :referenceUrl= "'/data-detail?source=' + this.currentSource + '&url=' + item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/examples/Cards/CardItem.vue";
import axios from "axios";

export default {
  name: "search-list",
  components: {
    CardItem
  },
  data() {
    return {
      sourceList: [],
      currentSource: 0,
      keyword: '',
      page: 1,
      list: [],
      isLoading: false
    };
  },
  created() {
    this.getSourceList();
  },
  methods: {
    async getSourceList() {
      axios
				.get('https://coccoc-manga.herokuapp.com/source-list')
				.then(response =>(this.sourceList = response.data))
    },
    async search() {
      this.list = [];
      this.isLoading = true;
      axios
				.get(`https://coccoc-manga.herokuapp.com/manga/${this.currentSource}/search`, {params: {keyword: this.keyword, page: 1}})
				.then(response =>(this.list = response.data.items));
      this.isLoading = false;
    },
  },
};
</script>
