<script lang="ts">
  import { Button } from "@/components/button/index";
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <h1
    class=" font-extrabold text-8xl text-transparent
  bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text"
  >
    Welcome to SvelteKit
  </h1>
  <!-- Login or Jump to dashboard -->
  <Button class="my-4">
    <a href="/dashboard" class="font-bold">Jump to dashboard</a>
  </Button>
</div>
