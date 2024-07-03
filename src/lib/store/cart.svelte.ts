type MenuItems = {
    id: number;
    created_at: Date | null;
    updated_at: Date | null;
    name: string | null;
    description: string | null;
    price: string | null;
    image: string | null;
    category_id: number | null;
}

export type CartProduct = {
    id: number
    quantity: number
    menu: MenuItems
}

export let cartProduct = $state<CartProduct[]>([]);