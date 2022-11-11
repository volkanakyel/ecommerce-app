<template>
  <div class="card-container" :class="{ active: isCartVisible }">
    <p class="card-container__title">Cart</p>
    <hr class="card-container__separator" />
    <div class="card-container__content">
      <p v-if="!getItemNumber" class="card-container__message">
        You cart is empty.
      </p>
      <div v-else class="card-container__list">
        <div class="card-container__item-added">
          <img
            src="../assets/images/sneakers/shoe01.jpg"
            width="50"
            alt="item"
          />
          <div>
            <p class="card-container__item-title">
              Fall limited Edition Sneakers
            </p>
            <p class="card-container__item-number">$125.00 x 3</p>
            <p class="card-container__item-price">$375.00</p>
          </div>
          <img
            src="../assets/images/bin-icon.svg"
            alt="remove-item"
            @click="removeItemFromCart"
          />
        </div>
        <button class="card-container__checkout-cta">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["getItemNumber", "isCartVisible"]),
  },
  methods: {
    ...mapActions("cart", ["removeItemFromCart"]),
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  position: absolute;
  right: -110%;
  transition: 0.2s linear;
  background: #fff;
  top: 60%;
  margin: 15px;
  width: 360px;
  border-radius: 12px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  @media (max-width: 910px) {
    width: 96%;
    top: 90%;
  }
  &__title {
    padding: 24px 24px;
    font-weight: 700;
  }
  &__message {
    text-align: center;
  }
  &__content {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item-added {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
  }
  &__item-title {
    color: #69707d;
  }
  &__item-number {
    display: inline;
    margin-right: 8px;
  }

  &__item-price {
    display: inline;
    font-weight: 700;
  }
  &__list {
    padding: 24px;
  }
  &__separator {
    height: 1px;
    border: none;
    background: #e4e9f2;
    background: #e4e9f2;
  }
  &__checkout-cta {
    padding: 16px;
    border: none;
    background: #ff7e1b;
    font-weight: 700;
    border-radius: 10px;
    color: #fff;
    width: 100%;
  }
}
.card-container.active {
  right: 0;
  transition: 0.2s linear;
}
</style>
