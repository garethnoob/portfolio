<script>
	import { goto } from "$app/navigation";
  import Button from "$lib/components/Button.svelte";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello my name is Gareth</h3>
    <div class="underscore mb-m"></div>
    <h1>I am a hobby coder</h1>
    <h1 class="dark-grey mb-m">web developer</h1>
    <Button {onclick}>lets talk</Button>
</section>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>