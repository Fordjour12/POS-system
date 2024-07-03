<script lang="ts">
    import type { CartProduct } from "$lib/store/cart.svelte";
    import { Button } from "@/components/button/index";

    type Props = {
        cartItem: CartProduct;
    };

    let { cartItem }: Props = $props();
</script>

<div class=" flex items-center justify-between border-b py-2">
    <div class="flex items-center">
        <!-- <img
            src=""
            alt="product name"
            class="mr-4 size-4 rouded object-cover"
        /> -->

        <div>
            <h4 class="font-medium">{cartItem.menu.name}</h4>
            <p class="tsxt-sm">{cartItem.menu.price}</p>
        </div>
    </div>
    <div class="flex items-center gap-3">
        <Button variant="outline">-</Button>
        <p>{cartItem.quantity}</p>
        <Button variant="outline">+</Button>
    </div>
</div>
