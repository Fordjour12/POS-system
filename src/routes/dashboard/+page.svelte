<script lang="ts">
    import { Button } from "@/components/button/index";
    import * as Card from "@/components/card/index";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    let category_id = $state(1);
</script>

<div>
    {#if data.categoryData}
        <div class="flex flex-wrap gap-4 mx-auto w-[90%]">
            {#each data.categoryData as cat}
                <form method="get">
                    <input
                        type="text"
                        name="category_id"
                        class="hidden"
                        bind:value={category_id}
                    />
                    <button
                        type="submit"
                        class="py-8"
                        class:bg-red-500={category_id === cat.id}
                        onclick={() => (category_id = cat.id)}
                    >
                        <div class="flex gap-6">
                            <img src="" alt={cat.name} />
                            <h3>{cat.name}</h3>
                        </div>
                    </button>
                </form>
            {/each}
        </div>
    {/if}
</div>

{#if data.menuData}
    <div class="grid grid-cols-3 gap-5 mx-6">
        {#each data.menuData as item}
            <Card.Root>
                <Card.Header>
                    <img
                        src={item.image}
                        alt={item.image}
                        width="200"
                        height="200"
                    />
                </Card.Header>
                <Card.Content>
                    <p>{item.description}</p>
                </Card.Content>
                <Card.Footer>
                    <div class="flex justify-between items-baseline w-full">
                        <p>{item.price} ghs</p>
                        <Button variant="default">Buy</Button>
                    </div>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
{/if}
