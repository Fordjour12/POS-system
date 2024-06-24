<script lang="ts">
  import Login from "./login.svelte";
  let { data } = $props();
</script>

<div class="flex flex-col items-center h-screen justify-center">
  <h1 class="text-5xl font-extrabold py-4">Login</h1>
  <Login data={data.form} />
</div>
