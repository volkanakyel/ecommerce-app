<template>
  <div class="ecommerce-container">
    <HeaderNavbar />
    <ItemSection />
  </div>
</template>

<script>
import HeaderNavbar from "./components/Navbar.vue";
import ItemSection from "./components/ItemSection.vue";
export default {
  components: {
    HeaderNavbar,
    ItemSection,
  },
};
</script>

<style lang="scss">
.ecommerce-container {
  max-width: 1110px;
  width: 95%;
  margin: 0 auto;
  color: black;
}
</style>
