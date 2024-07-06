<script lang="ts">
  import Register from "./register.svelte";
  let { data } = $props();
</script>

<div class="flex flex-col items-center h-screen justify-center">
  <h1 class="text-5xl font-extrabold py-4">Register Account</h1>
  <Register data={data.form} />
</div>
