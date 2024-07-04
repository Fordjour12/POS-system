<script lang="ts">
    import * as Card from "@/components/card/index.js";
    import { Progress } from "@/components/progress/index.js";
    import * as Table from "@/components/table/index.js";
    import * as Tabs from "@/components/tabs/index.js";
    import Order from "../(component)/order.svelte";

    let { data } = $props();
</script>

<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mx-10">
    <div
        class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
    >
        <Card.Root class="sm:col-span-2">
            <Card.Header class="pb-2">
                <Card.Description>Today</Card.Description>
                <Card.Title class="text-4xl">
                    GH₵ {data.results.today}
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <div class="text-xs text-muted-foreground">
                    +25% from last week
                </div>
            </Card.Content>
            <Card.Footer>
                <Progress value={25} aria-label="25% increase" />
            </Card.Footer>
        </Card.Root>
        <Card.Root class="sm:col-span-2">
            <Card.Header class="pb-2">
                <Card.Description>This Month</Card.Description>
                <Card.Title class="text-3xl">
                    GH₵ {data.results.month}
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <div class="text-xs text-muted-foreground">
                    +10% from last month
                </div>
            </Card.Content>
            <Card.Footer>
                <Progress value={12} aria-label="12% increase" />
            </Card.Footer>
        </Card.Root>
    </div>
    <Tabs.Root value="today">
        <div class="flex items-center">
            <Tabs.List>
                <Tabs.Trigger value="today">Today</Tabs.Trigger>
                <Tabs.Trigger value="month">Month</Tabs.Trigger>
                <Tabs.Trigger value="year">Year</Tabs.Trigger>
            </Tabs.List>
        </div>
        <Tabs.Content value="today">
            <Card.Root>
                <Card.Header class="px-7">
                    <Card.Title>Orders</Card.Title>
                    <Card.Description
                        >Recent orders from your store.</Card.Description
                    >
                </Card.Header>
                <Card.Content>
                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.Head>Customer</Table.Head>
                                <Table.Head class="hidden sm:table-cell">
                                    Type
                                </Table.Head>
                                <Table.Head class="hidden sm:table-cell">
                                    Status
                                </Table.Head>
                                <Table.Head class="hidden md:table-cell">
                                    Date
                                </Table.Head>
                                <Table.Head class="text-right"
                                    >Amount</Table.Head
                                >
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Order orders={data.order} />
                        </Table.Body>
                    </Table.Root>
                </Card.Content>
            </Card.Root>
        </Tabs.Content>
    </Tabs.Root>
</div>
