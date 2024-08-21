<script lang="ts">
    import * as Form from "@/components/form/index";
    import { Input } from "@/components/input/index";
    import * as Select from "@/components/select/index";
    import { type Selected } from "bits-ui";
    import {
        superForm,
        type Infer,
        type SuperValidated,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { mealItemSchema, type MealItemSchema } from "./schema";
    import type { PageData } from "./$types";

    type Props = SuperValidated<Infer<MealItemSchema>>;

    let { data,catData }: { data: Props,catData:PageData } = $props();

    const form = superForm(data.data, {
        validators: zodClient(mealItemSchema),
    });

    const { form: formData, enhance, errors } = form;
    let selectedCategory = $formData.category_id
        ? { label: $formData.category_id, value: $formData.category_id }
        : undefined;
</script>


<form method="POST" use:enhance>
    <Form.Field {form} name="name">
        <Form.Control let:attrs>
            <Form.Label>Meal Name</Form.Label>
            <Input
                type="text"
                {...attrs}
                bind:value={$formData.name}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="description">
        <Form.Control let:attrs>
            <Form.Label>Meal Description</Form.Label>
            <Input
                {...attrs}
                bind:value={$formData.description}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="price">
        <Form.Control let:attrs>
            <Form.Label>Meal Price</Form.Label>
            <Input
                {...attrs}
                bind:value={$formData.description}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="image">
        <Form.Control let:attrs>
            <Form.Label>Meal Image</Form.Label>
            <Input
                {...attrs}
                bind:value={$formData.description}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="image">
        <Form.Control let:attrs>
            <Form.Label>Meal Image</Form.Label>
            <Input
                {...attrs}
                bind:value={$formData.description}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="category_id">
        <Form.Control let:attrs>
            <Form.Label>Role</Form.Label>
            <Select.Root
                selected={selectedCategory as Selected<number> | undefined}
                onSelectedChange={(v) => {
                    v && ($formData.category_id = v.value);
                }}
            >
                <Select.Trigger {...attrs}>
                    <Select.Value placeholder="Select Category" />
                </Select.Trigger>
                <Select.Content>
                    <!-- <Select.Item value="worker" label="Worker" /> -->
                    {#each data.categories as category}
                        <Select.Item
                            value={category.id}
                            label={category.name}
                        />
                    {/each}
                </Select.Content>
            </Select.Root>
            <input
                {...attrs}
                bind:value={$formData.category_id}
                name={attrs.name}
                hidden
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button class="mt-4">Save New Category</Form.Button>
</form>
