<script lang="ts">
  import SettingsNav from './(component)/settingsNav.svelte';

    let {children} = $props()
</script>

<main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
    <div class="mx-auto grid w-full max-w-6xl gap-2">
        <h1 class="text-3xl font-semibold">Settings</h1>
    </div>
    <div
        class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
    <SettingsNav/>
 
    {@render children()}
    </div>
</main>