<template>
  <div class="item-carousel">
    <img
      class="item-carousel__close"
      src="../assets/images/menu-icon-orange.svg"
      alt=""
      @click="closeCarousel"
    />
    <img
      class="item-carousel__left-icon"
      src="../assets/images/left-icon.svg"
      alt=""
    />
    <img
      class="item-carousel__right-icon"
      src="../assets/images/right-icon.svg"
      alt=""
    />
    <img class="item-carousel__active-image" :src="getActiveImage" alt="" />
    <div class="item-carousel__image-list">
      <img
        v-for="image in carouselItem"
        :key="image.id"
        :src="getImageUrl(image.img)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carouselItem: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeImage: "shoe04.jpg",
    };
  },

  computed: {
    getActiveImage() {
      return require("../assets/images/sneakers/" + this.activeImage);
    },
  },
  methods: {
    getImageUrl(pic) {
      return require("../assets/images/sneakers/" + pic);
    },
    closeCarousel() {
      this.$emit("closeCarousel");
    },
  },
};
</script>

<style lang="scss" scoped>
.item-carousel {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  @media (max-width: 910px) {
    display: none;
  }
  &__close {
    position: absolute;
    top: -48px;
    right: 0;
    cursor: pointer;
  }
  &__active-image {
    width: 550px;
    height: 550px;
  }
  &__left-icon {
    position: absolute;
    top: 50%;
  }
  &__right-icon {
    position: absolute;
    top: 50%;
    right: -10px;
    ::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background: #fff;
    }
  }
  &__image-list {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
      border-radius: 18px;
      &:hover {
        border-radius: 18px;
        border: 3px #ff7e1b solid;
        opacity: 0.6;
      }
    }
  }
}
</style>
