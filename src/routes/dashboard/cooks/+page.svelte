<script lang="ts">
  //TODO: can see the receipt(food been ordered) of the food been ordered and can get the food ready
  import { Button } from "@/components/button";
  import * as Card from "@/components/card";
  import * as DropdownMenu from "@/components/dropdown-menu";
  import * as Pagination from "@/components/pagination";
  import { Separator } from "@/components/separator";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Copy from "lucide-svelte/icons/copy";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
  import Truck from "lucide-svelte/icons/truck";

  const orders = [
    {
      orderNo: 12311,
      foodlist: {},
    },
    {
      orderNo: 12311,
      foodlist: {},
    },
    {
      orderNo: 12311,
      foodlist: {},
    },
    {
      orderNo: 12311,
      foodlist: {},
    },
    {
      orderNo: 12311,
      foodlist: {},
    },
    {
      orderNo: 12311,
      foodlist: {},
    },
  ];
</script>

<!-- let use the Tab and card it is nicer -->
<!-- cooks only fulfill orders that's food related -->

<h1>Cooks Page</h1>

<div
  class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"
>
  <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <h2>Receipt</h2>
    {#each orders as order}
      <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>
    {/each}
  </div>
  <div>
    <Card.Root class="overflow-hidden">
      <Card.Header class="bg-muted/50 flex flex-row items-start">
        <div class="grid gap-0.5">
          <Card.Title class="group flex items-center gap-2 text-lg">
            Order Oe31b70H
            <Button
              size="icon"
              variant="outline"
              class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy class="h-3 w-3" />
              <span class="sr-only">Copy Order ID</span>
            </Button>
          </Card.Title>
          <Card.Description>Date: November 23, 2023</Card.Description>
        </div>
        <div class="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" class="h-8 gap-1">
            <Truck class="h-3.5 w-3.5" />
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
                class="h-8 w-8"
              >
                <EllipsisVertical class="h-3.5 w-3.5" />
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
      <Card.Content class="p-6 text-sm">
        <div class="grid gap-3">
          <div class="font-semibold">Order Details</div>
          <ul class="grid gap-3">
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
            </li>
          </ul>
          <Separator class="my-2" />
          <ul class="grid gap-3">
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Subtotal</span>
              <span>$299.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Shipping</span>
              <span>$5.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            <li class="flex items-center justify-between font-semibold">
              <span class="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li>
          </ul>
        </div>
        <Separator class="my-4" />
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-3">
            <div class="font-semibold">Shipping Information</div>
            <address class="text-muted-foreground grid gap-0.5 not-italic">
              <span>Liam Johnson</span>
              <span>1234 Main St.</span>
              <span>Anytown, CA 12345</span>
            </address>
          </div>
          <div class="grid auto-rows-max gap-3">
            <div class="font-semibold">Billing Information</div>
            <div class="text-muted-foreground">Same as shipping address</div>
          </div>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Customer Information</div>
          <dl class="grid gap-3">
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
                <a href="tel:">+1 234 567 890</a>
              </dd>
            </div>
          </dl>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Payment Information</div>
          <dl class="grid gap-3">
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground flex items-center gap-1">
                <CreditCard class="h-4 w-4" />
                Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </Card.Content>
      <Card.Footer
        class="bg-muted/50 flex flex-row items-center border-t px-6 py-3"
      >
        <div class="text-muted-foreground text-xs">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
        <Pagination.Root count={10} class="ml-auto mr-0 w-auto">
          <Pagination.Content>
            <Pagination.Item>
              <Button size="icon" variant="outline" class="h-6 w-6">
                <ChevronLeft class="h-3.5 w-3.5" />
                <span class="sr-only">Previous Order</span>
              </Button>
            </Pagination.Item>
            <Pagination.Item>
              <Button size="icon" variant="outline" class="h-6 w-6">
                <ChevronRight class="h-3.5 w-3.5" />
                <span class="sr-only">Next Order</span>
              </Button>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination.Root>
      </Card.Footer>
    </Card.Root>
  </div>
</div>
