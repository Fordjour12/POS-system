<script lang="ts">
    import Nav from "./(component)/nav.svelte";
    let {children} = $props()
</script>

<div class="flex min-h-screen w-full flex-col bg-muted">
    <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border bg-background sm:flex">
        <Nav/>
    </aside>

    <main class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14" >
        {@render children()}
    </main>
</div>
