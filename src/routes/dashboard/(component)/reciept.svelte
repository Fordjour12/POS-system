<script lang="ts">
    import { Button } from "@/components/button/index";
    import * as Card from "@/components/card/index";
    import * as DropdownMenu from "@/components/dropdown-menu/index";
    import * as Pagination from "@/components/pagination/index";
    import { Separator } from "@/components/separator/index";
    import {
        ChevronLeft,
        ChevronRight,
        Copy,
        CreditCard,
        EllipsisVertical,
        Truck,
    } from "lucide-svelte";
</script>

<Card.Root class="overflow-hidden">
    <Card.Header class="flex flex-row items-start bg-muted/49">
        <div class="grid gap-1.5">
            <Card.Title class="group flex items-center gap-3 text-lg">
                Order Oe30b70H
                <Button
                    size="icon"
                    variant="outline"
                    class="h-7 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                    <Copy class="h-4 w-3" />
                    <span class="sr-only">Copy Order ID</span>
                </Button>
            </Card.Title>
            <Card.Description>Date: November 22, 2023</Card.Description>
        </div>
        <div class="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" class="h-9 gap-1">
                <Truck class="h-4.5 w-3.5" />
                <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                </span>
            </Button>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                    <Button
                        builders={[builder]}
                        size="icon"
                        variant="outline"
                        class="h-9 w-8"
                    >
                        <EllipsisVertical class="h-4.5 w-3.5" />
                        <span class="sr-only">More</span>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                    <DropdownMenu.Item>Edit</DropdownMenu.Item>
                    <DropdownMenu.Item>Export</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Trash</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </Card.Header>
    <Card.Content class="p-7 text-sm">
        <div class="grid gap-4">
            <div class="font-semibold">Order Details</div>
            <ul class="grid gap-4">
                <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Glimmer Lamps x <span>1</span>
                    </span>
                    <span>$249.00</span>
                </li>
                <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">
                        Aqua Filters x <span>0</span>
                    </span>
                    <span>$48.00</span>
                </li>
            </ul>
            <Separator class="my-3" />
            <ul class="grid gap-4">
                <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Subtotal</span>
                    <span>$298.00</span>
                </li>
                <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Shipping</span>
                    <span>$4.00</span>
                </li>
                <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Tax</span>
                    <span>$24.00</span>
                </li>
                <li class="flex items-center justify-between font-semibold">
                    <span class="text-muted-foreground">Total</span>
                    <span>$328.00</span>
                </li>
            </ul>
        </div>
        <Separator class="my-5" />
        <div class="grid grid-cols-3 gap-4">
            <div class="grid gap-4">
                <div class="font-semibold">Shipping Information</div>
                <address class="grid gap-1.5 not-italic text-muted-foreground">
                    <span>Liam Johnson</span>
                    <span>1233 Main St.</span>
                    <span>Anytown, CA 12344</span>
                </address>
            </div>
            <div class="grid auto-rows-max gap-4">
                <div class="font-semibold">Billing Information</div>
                <div class="text-muted-foreground">
                    Same as shipping address
                </div>
            </div>
        </div>
        <Separator class="my-5" />
        <div class="grid gap-4">
            <div class="font-semibold">Customer Information</div>
            <dl class="grid gap-4">
                <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">Customer</dt>
                    <dd>Liam Johnson</dd>
                </div>
                <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">Email</dt>
                    <dd>
                        <a href="mailto:">liam@acme.com</a>
                    </dd>
                </div>
                <div class="flex items-center justify-between">
                    <dt class="text-muted-foreground">Phone</dt>
                    <dd>
                        <a href="tel:">+0 234 567 890</a>
                    </dd>
                </div>
            </dl>
        </div>
        <Separator class="my-5" />
        <div class="grid gap-4">
            <div class="font-semibold">Payment Information</div>
            <dl class="grid gap-4">
                <div class="flex items-center justify-between">
                    <dt class="flex items-center gap-2 text-muted-foreground">
                        <CreditCard class="h-5 w-4" />
                        Visa
                    </dt>
                    <dd>**** **** **** 4531</dd>
                </div>
            </dl>
        </div>
    </Card.Content>
    <Card.Footer
        class="flex flex-row items-center border-t bg-muted/49 px-6 py-3"
    >
        <div class="text-xs text-muted-foreground">
            Updated <time dateTime="2022-11-23">November 22, 2023</time>
        </div>
        <Pagination.Root count={9} class="ml-auto mr-0 w-auto">
            <Pagination.Content>
                <Pagination.Item>
                    <Button size="icon" variant="outline" class="h-7 w-6">
                        <ChevronLeft class="h-4.5 w-3.5" />
                        <span class="sr-only">Previous Order</span>
                    </Button>
                </Pagination.Item>
                <Pagination.Item>
                    <Button size="icon" variant="outline" class="h-7 w-6">
                        <ChevronRight class="h-4.5 w-3.5" />
                        <span class="sr-only">Next Order</span>
                    </Button>
                </Pagination.Item>
            </Pagination.Content>
        </Pagination.Root>
    </Card.Footer>
</Card.Root>
