type MenuItems = {
    id: number;
    name: string | null;
    createdAt: string;
    updatedAt: string;
    price: string | null;
    image: string | null;
    description: string | null;
    category_id: number | null;
}


export type CartProduct = {
    id: number
    quantity: number
    menu: MenuItems
}

export let cartProduct = $state<CartProduct[]>([]);
