<script lang="ts">
    import SetupNav from './(component)/setup-nav.svelte';

    let {children} = $props();

</script>

<main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-2 md:gap-8 md:p-6">
    <div class="mx-auto grid w-full max-w-7xl gap-2">
        <h1 class="text-3xl font-semibold">Pos System Setup</h1>
    </div>
    <div
        class="mx-auto grid w-full max-w-7xl items-start gap-3 md:grid-cols-[100px_1fr] lg:grid-cols-[180px_1fr]"
    >
    <SetupNav/>
 
    <div>
       {@render children()}
    </div>
    </div>
</main>

