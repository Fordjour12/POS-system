<script lang="ts">
    import { Badge } from "@/components/badge/index";
    import * as Table from "@/components/table/index";

    type Order = {
        id: number;
        customer: string | null;
        createdAt: string;
        updatedAt: string;
        order_date: string;
        status: string | null;
        total_amount: string | null;
    }[];

    let { orders }: { orders: Order } = $props();
</script>

{#each orders as order}
    <Table.Row class="bg-accent">
        <Table.Cell>
            <div class="font-medium">
                {order.customer}
            </div>
        </Table.Cell>
        <Table.Cell class="hidden sm:table-cell">Sale</Table.Cell>
        <Table.Cell class="hidden sm:table-cell">
            <Badge class="text-xs" variant="secondary">{order.status}</Badge>
        </Table.Cell>
        <Table.Cell class="hidden md:table-cell">{order.order_date}</Table.Cell>
        <Table.Cell class="text-right">GH₵ {order.total_amount}</Table.Cell>
    </Table.Row>
{/each}
