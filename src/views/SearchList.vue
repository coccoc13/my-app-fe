<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-md-2" v-for="item in list" :key="item.id">
        <card-item
          :avatarUrl="item.avatarUrl"
          :title="item.title"
          :description="item.description"
          :referenceUrl="item.referenceUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/examples/Cards/CardItem.vue";

export default {
  name: "search-list",
  components: {
    CardItem
  },
  data() {
    return {
      list: [
        {
          avatarUrl: "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg",
          title: "test title",
          description: "test description",
          referenceUrl: "https://www.google.com",
          id: 1
        },
        {
          avatarUrl: "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg",
          title: "test title",
          description: "test description",
          referenceUrl: "https://www.google.com",
          id: 1
        }
      ]
    };
  },
};
</script>
