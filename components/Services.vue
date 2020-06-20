<template>
  <section class="services">
    <div class="container position-relative">
      <div class="mb-5 px-3 text-center">
        <!-- <span class="badge badge-soft-success badge-pill badge-lg">Build tools</span> -->
        <h3 class="mt-4">Built for awesomeness</h3>
        <div class="fluid-paragraph mt-3">
          <p
            class="lead lh-180"
          >We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too.</p>
        </div>
      </div>
      <div class="row">
        <!-- Web development -->
        <div class="col-lg-4 mb-4 services__col">
          <vue-flipcard
            :width="280"
            :height="190"
            direction="vertical"
            @flip
            class="services__card"
          >
            <div
              class="content front p-4 services__card__front text-center d-flex flex-column justify-content-center"
              slot="front"
            >
              <div class="text-center">
                <img :src="webIcon" alt class="services__icon text-center" />
              </div>
              <!-- <h6>Web Development</h6> -->
            </div>
            <div class="content back p-4 services__card__back" slot="back">
              <div class="text-center">
                <h5>Web Development</h5>
                <p class="mb-4">Got a problem that needs a solution?</p>
              </div>
            </div>
          </vue-flipcard>
        </div>

        <!-- SEO -->
        <div class="col-lg-4 mb-4 services__col">
          <vue-flipcard
            :width="280"
            :height="190"
            direction="vertical"
            @flip
            class="services__card"
          >
            <div
              class="content front p-4 services__card__front text-center d-flex flex-column justify-content-center"
              slot="front"
            >
              <div class="text-center">
                <img :src="searchIcon" alt class="services__icon text-center" />
              </div>
              <!-- <h6>Web Development</h6> -->
            </div>
            <div class="content back p-4 services__card__back" slot="back">
              <div class="text-center">
                <h5>SEO</h5>
                <p class="mb-4">Got a problem that needs a solution?</p>
              </div>
            </div>
          </vue-flipcard>
        </div>

        <!-- App Development -->
        <div class="col-lg-4 mb-4 services__col">
          <vue-flipcard
            :width="280"
            :height="190"
            direction="vertical"
            @flip
            class="services__card"
          >
            <div
              class="content front p-4 services__card__front text-center d-flex flex-column justify-content-center"
              slot="front"
            >
              <div class="text-center">
                <img :src="appIcon" alt class="services__icon text-center" />
              </div>
              <!-- <h6>Web Development</h6> -->
            </div>
            <div class="content back p-4 services__card__back" slot="back">
              <div class="text-center">
                <h5>App Development</h5>
                <p class="mb-4">Got a problem that needs a solution?</p>
              </div>
            </div>
          </vue-flipcard>
        </div>

        <!-- Digital Marketing -->
        <div class="col-lg-4 mb-4 services__col col">
          <vue-flipcard
            :width="280"
            :height="190"
            direction="vertical"
            @flip
            class="services__card"
          >
            <div
              class="content front p-4 services__card__front text-center d-flex flex-column justify-content-center"
              slot="front"
            >
              <div class="text-center">
                <img :src="marketingIcon" alt class="services__icon text-center" />
              </div>
              <!-- <h6>Web Development</h6> -->
            </div>
            <div class="content back p-4 services__card__back" slot="back">
              <div class="text-center">
                <h5>Digital Marketing</h5>
                <p class="mb-4">Got a problem that needs a solution?</p>
              </div>
            </div>
          </vue-flipcard>
        </div>

        <!-- Website Hosting -->
        <div class="col-lg-4 mb-4 services__col col">
          <vue-flipcard
            :width="280"
            :height="190"
            direction="vertical"
            @flip
            class="services__card"
          >
            <div
              class="content front p-4 services__card__front text-center d-flex flex-column justify-content-center"
              slot="front"
            >
              <div class="text-center">
                <img :src="databaseIcon" alt class="services__icon text-center" />
              </div>
              <!-- <h6>Web Development</h6> -->
            </div>
            <div class="content back p-4 services__card__back" slot="back">
              <div class="text-center">
                <h5>Website Hosting</h5>
                <p class="mb-4">Got a problem that needs a solution?</p>
              </div>
            </div>
          </vue-flipcard>
        </div>

        <!-- Customer support -->
        <div class="col-lg-4 mb-4 services__col col">
          <vue-flipcard
            :width="280"
            :height="190"
            direction="vertical"
            @flip
            class="services__card"
          >
            <div
              class="content front p-4 services__card__front text-center d-flex flex-column justify-content-center"
              slot="front"
            >
              <div class="text-center">
                <img :src="supportIcon" alt class="services__icon text-center" />
              </div>
              <!-- <h6>Web Development</h6> -->
            </div>
            <div class="content back p-4 services__card__back" slot="back">
              <div class="text-center">
                <h5>Customer Support</h5>
                <p class="mb-4">Got a problem that needs a solution?</p>
              </div>
            </div>
          </vue-flipcard>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.services {
  margin-top: 2rem;
}
.services__icon {
  width: 6rem;
}

.services__card__front {
  border-top: solid #006aff 0.5rem;

  height: 190px;
}
.services__card__back {
  border-bottom: solid #006aff 0.5rem;
  height: 190px;
}

@media only screen and (max-width: 600px) {
  .services {
    margin-top: 15rem;
  }

  .services__col {
    margin-left: 3.3rem;
  }
}
</style>


<script>
export default {
  data() {
    return {
      webIcon: require("~/assets/icons/code.svg"),
      searchIcon: require("~/assets/icons/search.svg"),
      appIcon: require("~/assets/icons/app-development.svg"),
      marketingIcon: require("~/assets/icons/social-media-marketing.svg"),
      databaseIcon: require("~/assets/icons/database.svg"),
      supportIcon: require("~/assets/icons/technical-support.svg")
    };
  }
};
</script>