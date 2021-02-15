<template>
  <main class="container restaurant">
    <h1>Restaurants</h1>
    <AppRestaurantInfo/>
  </main>
</template>

<script>

import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'

export default {
  components: {
    AppRestaurantInfo,
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
