<template>
  <fragment>
    <header class="header">
      <section class="container py-5">
        <div class="row justify-content-lg-between align-items-lg-center">
          <div class="col-lg-6 text-center text-lg-left col-sm">
            <h1 class="display-4 mb-4 header__title">Boost your digital presence</h1>
            <p
              class="lead text-secondary mb-4 header__sub-title"
            >We Craft Each And Every Element Of Your Website To Make It More Customer Centric And Interactive.</p>

            <a class="header__button mt-3" href="#">Start Now</a>
          </div>
          <div class="col-lg-6 col-sm text-center header__image">
            <kinesis-container>
              <kinesis-element
                tag="img"
                src="https://boost.11bits.es/assets/img/revenue.svg"
                :strength="-10"
                type="depth"
                transformOrigin="50% 300%"
                axis="x"
                class="img-fluid"
              />
            </kinesis-container>
          </div>
        </div>
      </section>
    </header>
  </fragment>
</template>


<style>
.header__title {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
}

.header__button {
  background-color: #111;
  text-decoration: none;
  color: white;
  padding: 0.5rem 2rem 0.5rem 2rem;
  transition: all 0.3s;
  border: solid 0.1rem #111;
  text-transform: uppercase;
  box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.2);
}

.header__button:hover {
  background-color: white;

  text-decoration: none;
  color: #111;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 0.2rem;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
}

.header__button:active {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 600px) {
  .header__image {
    margin-top: 3rem;
  }
}

.header {
  background-color: #ecf0f1;
  height: 80vh;
}

.header-img {
  width: 60rem;
}

.design {
  background-color: red;
}
</style>


<script>
export default {
  data() {
    return {
      headerImg: require("~/assets/img/humaaans.png")
    };
  }
};
</script>