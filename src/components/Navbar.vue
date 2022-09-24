<template>
  <div class="navbar">
    <div class="navbar__container" v-click-outside.prevent="closeMenuOutside">
      <div class="navbar__header">
        <img
          @click="menuActive = true"
          class="navbar__menu-icon"
          src="../assets/images/menu-icon.svg"
          alt="open-menu"
        />
        <h2 class="navbar__logo">sneackers</h2>
        <ul class="navbar__items">
          <li class="navbar__item">Collections</li>
          <li class="navbar__item">Men</li>
          <li class="navbar__item">Women</li>
          <li class="navbar__item">About</li>
          <li class="navbar__item">Contact</li>
        </ul>
      </div>
      <div
        v-show="menuActive"
        class="navbar__mobile-menu"
        :class="`{ 'navbar__collapse': menuActive }`"
      >
        <img
          @click="menuActive = false"
          src="../assets/images/close-icon.svg"
          alt="close-menu"
          width="24"
          class="navbar__close-icon"
        />
        <ul class="navbar__mobile-list">
          <li class="navbar__mobile-list">Collections</li>
          <li class="navbar__mobile-list">Men</li>
          <li class="navbar__mobile-list">Women</li>
          <li class="navbar__mobile-list">About</li>
          <li class="navbar__mobile-list">Contact</li>
        </ul>
      </div>
      <div class="navbar__account" v-click-outside.prevent="clickedOutside">
        <img
          @click.prevent="showCart"
          class="navbar__card"
          src="../assets/images/card-icon.svg"
          alt="shoping-card"
        />
        <img
          class="navbar__user-profile"
          src="../assets/images/user-profile.jpeg"
          alt="profile-user"
        />
        <div class="card-container" :class="{ active: cartActive }">
          <p class="card-container__title">Cart</p>
          <hr class="card-container__separator" />
          <p v-if="false" class="card-container__message">You cart is empty.</p>
          <div class="card-container__list">
            <div class="card-container__item-added" style="display: flex">
              <img
                src="../assets/images/sneakers/shoe01.jpg"
                width="50"
                alt="item"
              />
              <div>
                <p class="card-container__item-title">
                  Fall limited Edition Sneakers
                </p>
                <p style="display: inline; margin-right: 8px">$125.00 x 3</p>
                <p style="display: inline; font-weight: 700">$375.00</p>
              </div>
              <img src="../assets/images/bin-icon.svg" alt="" />
            </div>
            <button class="card-container__checkout-cta">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="navbar__separator" />
  </div>
</template>

<script>
export default {
  name: "HeaderNavbar",
  data() {
    return {
      cartActive: false,
      menuActive: false,
    };
  },
  directives: {
    clickOutside: {
      bind(el, binding) {
        el.__clickOutsideHandler__ = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event);
          }
        };
        document.body, addEventListener("click", el.__clickOutsideHandler__);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.__clickOutsideHandler__);
      },
    },
  },
  methods: {
    showCart() {
      this.cartActive = !this.cartActive;
    },
    clickedOutside() {
      this.cartActive = false;
    },
    closeMenuOutside() {
      this.menuActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  padding: 24px;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;
  }
  &__menu-icon {
    display: none;
  }
  &__logo {
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
  }
  &__mobile-list {
    list-style-type: none;
    li:not(:last-child) {
      margin-bottom: 20px;
    }
    li:hover {
      text-decoration: underline;
    }
  }
  &__mobile-list {
  }
  &__mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding: 24px;
    @media (min-width: 910px) {
      display: none;
    }
    color: black;
    width: 65%;
    min-height: 100vh;
    background: #fff;
    position: absolute;
    font-size: 18px;
    font-weight: 700;
    transition: width 0.2s ease;
    left: 0;
    top: 0;
  }
  &__collapse {
    width: 65%;
  }
  &__card {
    cursor: pointer;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50px;
      width: 10px;
      height: 30px;
      background: #ff7e1b;
    }
  }
  &__items {
    display: flex;
    gap: 32px;
    list-style-type: none;
    color: #69707d;
    font-size: 15px;
    cursor: pointer;
  }
  &__item {
    position: relative;
    &:hover {
      color: #1d2026;
      &::before {
        content: "";
        position: absolute;
        border: 2px solid;
        color: #ff7e1b;
        bottom: -54px;
        width: 100%;
        height: 2px;
      }
    }
  }
  &__user-profile {
    width: 50px;
    border-radius: 50%;
    border: 2px transparent solid;
    cursor: pointer;
    &:hover {
      border: 2px #ff7e1b solid;
    }
  }
  &__account {
    display: flex;
    gap: 46px;
    @media (max-width: 910px) {
      gap: 24px;
    }
  }

  &__separator {
    margin-top: 40px;
    height: 1px;
    border: none;
    background: #e4e9f2;
    @media (max-width: 910px) {
      display: none;
    }
  }
}

@media (max-width: 910px) {
  .navbar {
    // background-color: blue;
    &__items {
      display: none;
    }
    &__menu-icon {
      display: unset;
      margin-top: 4px;
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }
}

.card-container {
  position: absolute;
  right: 0;
  background: #fff;
  top: 60%;
  margin: 15px;
  width: 360px;
  border-radius: 12px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  transition: transform 0.5s;
  display: none;

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
    margin-top: 52px;
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
  display: block;
}
</style>
