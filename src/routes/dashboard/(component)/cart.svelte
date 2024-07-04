<script lang="ts">
    import { type CartProduct } from "$lib/store/cart.svelte";
    import { Button } from "@/components/button/index";

    type Props = {
        cartItem: CartProduct;
        removeItem: (id: number) => void;
    };

    let { cartItem = $bindable(), removeItem }: Props = $props();
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
        <Button
            variant="outline"
            onclick={() => {
                if (cartItem.quantity === 1) {
                    removeItem(cartItem.menu.id);
                } else {
                    cartItem.quantity--;
                }
            }}>-</Button
        >
        <p>{cartItem.quantity}</p>
        <Button variant="outline" onclick={() => cartItem.quantity++}>+</Button>
    </div>
</div>
