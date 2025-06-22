<script>
  let { children, sectionName } = $props();
</script>

<div class="default-margin" id={sectionName}>
  <h2>{@render children()}</h2>
  <div class="underscore"></div>
</div>

