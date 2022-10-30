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
        class="navbar__mobile-menu"
        :class="{ navbar__collapse: menuActive }"
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
        <div class="card-container">
          <UserCard :cartActive="cartActive" />
        </div>
      </div>
    </div>
    <hr class="navbar__separator" />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
export default {
  name: "HeaderNavbar",
  components: {
    UserCard,
  },
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
  &__mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding: 24px;
    color: black;
    width: 65%;
    min-height: 100vh;
    background: #fff;
    left: -110%;
    transition: 0.2s linear;
    position: absolute;
    font-size: 18px;
    font-weight: 700;
    top: 0;
  }
  &__collapse {
    left: 0%;
    transition: 0.2s linear;
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
</style>
