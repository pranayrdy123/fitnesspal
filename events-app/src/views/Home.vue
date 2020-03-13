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
  <div class="card">
  <div class="card-content">
    <p class="title">
      “Fitness Buddy has helped me a lot to reach my fitness goals”
    </p>
    <p class="subtitle">
      Plotkin
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="https://www.facebook.com/myfitnesspal/">Facebook</a>
      </span>
    </p>
  </footer>
</div>


<div class="cardle">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/45163788_1947924921971802_9004415510342795264_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=BgOdcoBsEWoAX-L2QHS&_nc_ht=scontent-iad3-1.xx&oh=7ca265e1633420b737567422478431b9&oe=5E8FF860" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Pranay Kumar Reddy</p>
        <p class="subtitle is-6">@Pranay Kumar Reddy</p>
      </div>
    </div>

    <div class="content">
      Hello everyone how are you doing <a>@Whatsup</a>.
      <a href="About.vue">About</a> <a href="#">Help</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>

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
  .card{
    margin: 80px;
    border-block-end-color: hotpink;
  }
  .cardle{
    margin: 150px;
    border-block-end-color: hotpink;
  }
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