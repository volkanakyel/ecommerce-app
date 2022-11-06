<template>
  <div class="item-section">
    <ItemCarousel
      v-if="isCarouselOpen"
      :carouselItem="itemImages"
      @closeCarousel="closeCarousel"
    />
    <div class="carousel">
      <div>
        <img
          class="carousel__main-image"
          :src="getActiveImage"
          alt="product-image"
        />
      </div>
      <div class="carousel__image-list">
        <img
          v-for="item in itemImages"
          :key="item.id"
          class="carousel__rest-image"
          :src="getImageUrl(item.img)"
          @click="setActiveImage"
          @mouseover="hoverActiveImage(item.img)"
          alt=""
        />
      </div>
    </div>
    <div class="item__content">
      <p class="item__brand">sneacker company</p>
      <h2 class="item__name">fall limited edition sneackers</h2>
      <p class="item__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they;ll withstand everything the
        weather can offer.
      </p>
      <div class="item__price-section">
        <div class="item__price-handle">
          <p class="item__price">$125.00</p>
          <p class="item__discount">50%</p>
        </div>
        <p class="item__initial-price">$250.00</p>
      </div>
      <div class="item__shop-action">
        <div class="item__counter">
          <p @click="removeCounter()" class="item__counter-add">-</p>
          <p style="font-size: 16px; font-weight: 700">{{ counter }}</p>
          <p @click="addCounter()" class="item__counter-add">+</p>
        </div>
        <button class="item__cta" @click="addItemToBasket">
          <img src="../assets/images/card-icon-white.svg" alt="" />
          Add to card
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCarousel from "@/components/ItemCarousel.vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  components: {
    ItemCarousel,
  },
  data() {
    return {
      counter: 0,
      isCarouselOpen: false,
      activeImage: "shoe04.jpg",
      itemImages: [
        {
          img: "shoe01.jpg",
        },
        {
          img: "shoe02.jpg",
        },
        {
          img: "shoe03.jpg",
        },
        {
          img: "shoe04.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapState("cart", ["item"]),
    ...mapGetters("cart", ["getItemNumber"]),
    getActiveImage() {
      return require("../assets/images/sneakers/" + this.activeImage);
    },
  },
  methods: {
    ...mapActions("cart", ["addItemToCard"]),
    addItemToBasket() {
      this.addItemToCard(this.counter);
      console.log(this.getItemNumber);
    },
    addCounter() {
      this.counter++;
    },
    closeCarousel() {
      this.isCarouselOpen = false;
    },
    removeCounter() {
      if (this.counter > 0) this.counter--;
    },
    getImageUrl(pic) {
      return require("../assets/images/sneakers/" + pic);
    },
    setActiveImage() {
      this.isCarouselOpen = true;
      console.log(this.isCarouselOpen);
    },
    hoverActiveImage(pic) {
      this.activeImage = pic;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-section {
  max-width: 1015px;
  margin: 90px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 910px) {
    flex-direction: column;
    margin: 0 auto;
  }
}
.item {
  &__content {
    width: 45%;
    @media (max-width: 910px) {
      width: 100%;
      padding: 24px;
    }
  }
  &__brand {
    color: #ff7e1b;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  &__name {
    text-transform: capitalize;
    font-weight: 700;
    line-height: 48px;
    font-size: 44px;
    margin-bottom: 32px;
  }
  &__description {
    color: #69707d;
    font-size: 16px;
    margin-bottom: 24px;
  }
  &__price-section {
    margin-bottom: 32px;
  }
  @media (max-width: 910px) {
    &__price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 31px;
      margin-bottom: 24px;
    }
  }

  &__price-handle {
    display: flex;
    align-items: center;
    gap: 31px;
  }
  &__price {
    font-size: 32px;
    font-weight: 700;
  }
  &__discount {
    background-color: #ffeee2;
    padding: 4px;
    border-radius: 6px;
    color: #ff7e1b;
    font-weight: 700;
    font-size: 16px;
  }
  &__initial-price {
    text-decoration: line-through;
    color: #b6bcc8;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 32px;
    margin: auto 0;
  }
  &__shop-action {
    display: flex;
    justify-content: space-between;
    @media (max-width: 610px) {
      width: 100%;
      flex-direction: column;
      gap: 16px;
    }
  }
  &__counter {
    user-select: none;
    display: flex;
    background: #f6f8fd;
    align-items: center;
    justify-content: space-between;
    padding: 14px 12px;
    border-radius: 12px;
    width: 32%;
    @media (max-width: 610px) {
      width: 100%;
    }
  }
  &__cta {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 18px;
    width: 65%;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    background-color: #ff7e1b;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #ffab6a;
    }
    @media (max-width: 610px) {
      width: 100%;
    }
  }
  &__counter-add {
    color: #ff7e1b;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }
}

.carousel {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 910px) {
    width: 100%;
  }
  &__image-list {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    @media (max-width: 910px) {
      display: none;
    }
  }
  &__main-image {
    width: 100%;
  }
  &__rest-image {
    width: 22%;
    border: 3px transparent solid;
    border-radius: 18px;
    &:hover {
      border-radius: 18px;
      border: 3px #ff7e1b solid;
      opacity: 0.6;
    }
  }
}
</style>
