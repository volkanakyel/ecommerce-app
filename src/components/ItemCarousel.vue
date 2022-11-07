<template>
  <transition name="carousel">
    <div class="item-carousel" @click.capture="handleMaskClick">
      <div class="item-carousel__wrapper">
        <img
          class="item-carousel__close"
          src="../assets/images/menu-icon-orange.svg"
          alt=""
          @click="closeCarousel"
        />
        <div class="item-carousel__container">
          <div class="item-carousel__active">
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
            <img
              class="item-carousel__active-image"
              :src="getActiveImage"
              alt=""
            />
          </div>
          <div class="item-carousel__image-list">
            <img
              v-for="image in carouselItem"
              :key="image.id"
              :src="getImageUrl(image.img)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    handleMaskClick(event) {
      const className = event.target?.getAttribute("class");
      if (className === "item-carousel__wrapper") {
        this.closeCarousel();
      }
    },
  },
};
</script>

<style lang="scss">
.item-carousel {
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: table;
  @media (max-width: 910px) {
    display: none;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    position: relative;
  }
  &__container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  &__close {
    position: absolute;
    top: 12%;
    right: 26%;
    cursor: pointer;
  }
  &__active-image {
    position: relative;
  }
  &__active-image {
    height: 550px;
    width: 550px;
  }
  &__left-icon {
    position: absolute;
    top: 50%;
    left: -5%;
  }
  &__right-icon {
    position: absolute;
    top: 50%;
    right: -5%;
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
.carousel-enter {
  opacity: 0;
}
.carousel-leave-active {
  opacity: 0;
}

.carousel-enter .item-carousel__container,
.carousel-leave-active .item-carousel__container {
  transform: scale(1.1);
}
</style>
