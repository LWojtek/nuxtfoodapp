<template>
  <section class="restaurantinfo">
    <div v-for="store in fooddata" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>

      <div class="row">
        <div
        v-for="menuitem in store.menu"
        :key="menuitem.id"
        class="items"
        :style="`background: url(${menuitem.img}) no-repeat center center`">
            <div class="iteminfo">
              <div>
                <h4>{{menuitem.item}}</h4>
                <p> {{ priceFormatting(menuitem.price) }}</p>
              </div>
              <button class="ghost">View item</button>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
  methods: {
    priceFormatting(item) {
      return '$' + item.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
  // .items {
  //   height: 250px;
  //   border-radius: 5px;
  //   background-size: cover;
  //   position: relative;
  //   box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  // }
</style>
