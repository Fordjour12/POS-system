<script>
    // Example data for inventory items
    let items = [
        {
            id: 1,
            name: "Item 1",
            description: "Description of Item 1",
            quantity: 10,
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description of Item 2",
            quantity: 5,
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description of Item 3",
            quantity: 20,
        },
        // Add more items as needed
    ];
</script>

<h1>Inventory</h1>

<div class="inventory-container">
    {#each items as item}
        <div class="inventory-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Quantity: {item.quantity}</p>
        </div>
    {/each}
</div>

<style>
    .inventory-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        padding: 16px;
    }

    .inventory-item {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
    }

    .inventory-item h2 {
        margin: 0 0 8px 0;
    }

    .inventory-item p {
        margin: 0 0 16px 0;
    }
</style>
