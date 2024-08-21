<script lang="ts">
  import { Button } from "@/components/button/index";
  import * as Card from "@/components/card/index";
  import * as Sheet from "@/components/sheet/index";
  import MealItem from "./mealItem.svelte";

  let { data } = $props();
</script>

<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
  <div
    class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
  >
    <Card.Root class="sm:col-span-3">
      <Card.Header class="pb-3">
        <Card.Title>Add Meal To Menu</Card.Title>
        <Card.Description class="max-w-lg text-balance leading-relaxed">
          This section details all available food and drink offerings, complete
          with pricing and descriptions, facilitating easy selection and
          ordering for customers.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Sheet.Root>
          <Sheet.Trigger asChild let:builder>
            <Button builders={[builder]}>Create New Meal</Button>
          </Sheet.Trigger>
          <Sheet.Content side="right">
            <Sheet.Header>
              <Sheet.Title>Edit Or Add New Meal</Sheet.Title>
              <Sheet.Description>
                Make changes or create new set of your categories here. Click
                save when you're done.
              </Sheet.Description>
            </Sheet.Header>
            <MealItem data={data.form} categoryData={data.categories} />
          </Sheet.Content>
        </Sheet.Root>
      </Card.Footer>
    </Card.Root>
  </div>

  <div class="py-6">
    <h3 class="text-2xl font-bold underline underline-offset-8">Meals</h3>

    <div>
      <!-- {#if data.categories.length === 0} -->
      <p class="text-2xl">No Categories found</p>
      <!-- {:else}
         <div class="grid grid-cols-3 gap-5 mx-6 my-4">
          {#each data.categories as category}
            <Card.Root>
              <Card.Header>
                <Card.Title>{category.name}</Card.Title>
                <Card.Description>{category.description}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <div class="gap-4">
                  <Button variant="destructive">Remove</Button>
                  <Button variant="default">Edit</Button>
                </div>
              </Card.Footer>
            </Card.Root>
          {/each}
        </div> 
      {/if} -->
    </div>
  </div>
</div>
<!-- class="flex items-center gap-4 justify-between w-full py-4 px-6" -->
