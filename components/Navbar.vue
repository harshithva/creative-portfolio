<template>
  <div class="container">
    <client-only>
      <vue-navigation-bar :options="navbarOptions" />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("~/assets/img/vaweb.png"),
        brandImageAltText: "brand-image",
        collapseButtonImageOpen: require("~/assets/img/collapse_open.png"),
        collapseButtonImageClose: require("~/assets/img/collapse_close.png"),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "About",
            path: "about"
          },
          {
            type: "link",
            text: "Products",
            path: "about"
          },
          {
            type: "link",
            text: "Services",
            path: "about"
          },

          {
            type: "link",
            text: "Pricing",
            path: "./pricing",
            iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>'
          },
          {
            type: "link",
            text: "Contact",
            path: "./pricing",
            iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>'
          }
        ],
        menuOptionsRight: [
          {
            type: "button",
            text: "CALL NOW",
            path: "./signup",
            class: "call-button"
          }
        ]
      }
    };
  }
};
</script>

<style>
.vnb .call-button {
  background-color: white;
  color: #2c3e50;
  border: solid 0.2rem #2c3e50;
  font-weight: bolder;
}

.vnb .call-button:hover {
  background: #2c3e50;
  color: white;
}

.vnb__menu-options__option__link {
  color: #2c3e50;

  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.2s;
  font-size: 1.1rem;
}
.vnb__menu-options__option__link:hover {
  color: #2c3e50;
  font-size: 1.5rem;
}

.vnb__brand-image-wrapper__link__image {
  max-height: 3rem;
}
</style>
