<script>
  let { children, className=undefined, ...props } = $props();
</script>

<button class={'btn {className}'} {...props}>{@render children()}</button>

<style>
  .btn {
    font-family: 'Inter Tight', sans-serif;
    font-weight: 500;
    background-color: #000;
    color: #fff;
    font-size: 24px;
    padding: 14px 40px;
    border-radius: 10px;
    
  }
</style>