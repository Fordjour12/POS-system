<script lang="ts">
    import type { CartProduct } from "$lib/store/cart.svelte";
    import { Button, buttonVariants } from "@/components/button/index";
    import * as Card from "@/components/card/index";
    import * as Dialog from "@/components/dialog/index";
    import { Input } from "@/components/input/index";
    import { Label } from "@/components/label/index";
    import * as Sheet from "@/components/sheet/index";
    import type { PageData } from "./$types";
    import CartItem from "./(component)/cart.svelte";

    let { data }: { data: PageData } = $props();

    let category_id = $state(1);

    let cartProduct = $state<CartProduct[]>([]);

    const cartQuantity = $derived.by(() => {
        let total = 0;
        let totalAmount = 0;
        for (const prod of cartProduct) {
            total += prod.quantity;
            totalAmount = total * Number(prod.menu.price);
        }

        return {
            total,
            totalAmount,
        };
    });

    const removeItem = (id: number) => {
        cartProduct = cartProduct.filter((prod) => prod.id !== id);
    };

    const addToCart = (item: CartProduct) => {
        let index = cartProduct.findIndex((prod) => prod.id === item.id);

        if (index === -1) {
            cartProduct.push(item);
        } else {
            cartProduct[index].quantity++;
        }
    };
</script>

<!-- svelte-ignore non_reactive_update -->
<div class="flex justify-end mx-6">
    <Sheet.Root preventScroll>
        <Sheet.Trigger let:builder>
            <Button builders={[builder]}>Cart {cartQuantity.total}</Button>
        </Sheet.Trigger>
        <Sheet.Content side="right">
            <Sheet.Header>
                <Sheet.Title>Cart</Sheet.Title>
                <Sheet.Description>
                    All added Products are here
                </Sheet.Description>
            </Sheet.Header>
            <div class="overflow-scroll">
                {#if cartProduct.length === 0}
                    <p class="font-bold font-sans text-3xl">No items in cart</p>
                {:else if cartProduct}
                    {#each cartProduct as _, i}
                        <!-- <CartItem {cartItem} {removeItem} /> -->
                        <CartItem bind:cartItem={cartProduct[i]} {removeItem} />
                    {/each}
                    <Sheet.Footer class="py-4">
                        <div class="flex justify-between items-baseline w-full">
                            <p>
                                Total: {cartQuantity.totalAmount.toFixed(2)} ghs
                            </p>
                            <Dialog.Root>
                                <Dialog.Trigger
                                    class={buttonVariants({
                                        variant: "default",
                                    })}
                                >
                                    checkout
                                </Dialog.Trigger>
                                <Dialog.Content>
                                    <Dialog.Title>Order Details</Dialog.Title>
                                    <div>
                                        <div class="grid gap-4 py-4">
                                            <div
                                                class="grid grid-cols-4 items-center gap-4"
                                            >
                                                <Label
                                                    for="name"
                                                    class="text-right"
                                                    >Name</Label
                                                >
                                                <Input
                                                    id="name"
                                                    value="Pedro Duarte"
                                                    class="col-span-3"
                                                />
                                            </div>
                                            <div
                                                class="grid grid-cols-4 items-center gap-4"
                                            >
                                                <Label
                                                    for="username"
                                                    class="text-right"
                                                    >Username</Label
                                                >
                                                <Input
                                                    id="username"
                                                    value="@peduarte"
                                                    class="col-span-3"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Dialog.Description>
                                        <div class="flex flex-col gap-4">
                                            {#each cartProduct as item}
                                                <div
                                                    class="flex justify-between"
                                                >
                                                    <p>{item.menu.name}</p>
                                                    <p>{item.quantity}</p>
                                                </div>
                                            {/each}
                                        </div>
                                        <p>
                                            Total: {cartQuantity.totalAmount.toFixed(
                                                2,
                                            )} ghs
                                        </p>
                                    </Dialog.Description>
                                </Dialog.Content>
                            </Dialog.Root>
                        </div>
                    </Sheet.Footer>
                {/if}
            </div>
        </Sheet.Content>
    </Sheet.Root>
</div>

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
                        class="inline-flex items-center justify-center p-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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

{#if data.menuData.length === 0}
    <p class="font-bold font-sans text-3xl">No menu items found</p>
{:else if data.menuData}
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
                        <Button
                            onclick={() =>
                                addToCart({
                                    id: item.id,
                                    quantity: 1,
                                    menu: item,
                                })}>Buy</Button
                        >
                    </div>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
{/if}
