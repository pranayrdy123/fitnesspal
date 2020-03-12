<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Your Fitness Journey Starts Today     
        </h1>
          <div class="button-block">
          <a href="/SignUp" class="button is-xl is-dark">Start for Free</a>
         
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .hero {  
    text-align: center;
    background-image: url('https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/012/923/original/FitnessMotivation_en6f65a214d58b404e47b555e68f1b3bc8.jpg?1563407350');
    background-size:100%;
    background-position:left ;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>