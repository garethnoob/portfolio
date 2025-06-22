<script>
  import Hero from '$lib/components/Hero.svelte';
  import AboutMe from '$lib/components/AboutMe.svelte';
  const {data} = $props();
  let { devExperience } = data;
</script>

<Hero />
<AboutMe {devExperience} />