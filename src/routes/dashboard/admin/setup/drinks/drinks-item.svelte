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
    import { drinksItemSchema, type DrinksItemSchema } from "./schema";

    type Props = SuperValidated<Infer<DrinksItemSchema>>
    type CategoriesProps = {
    description: string;
    name: string;
    id: number;
    }[]

    let { data, categoryData }: { data: Props, categoryData:CategoriesProps  } = $props();

    const form = superForm(data.data, {
        validators: zodClient(drinksItemSchema),
    });

    const { form: formData, enhance, errors } = form;
    let selectedCategory = $formData.category_id
        ? { label: $formData.category_id, value: $formData.category_id }
        : undefined;

    let selectedIsAlcoholic = $formData.is_alcoholic
        ? { label: $formData.is_alcoholic, value: $formData.is_alcoholic }
        : undefined;
      
</script>


<form method="POST" use:enhance>
    <Form.Field {form} name="name">
        <Form.Control let:attrs>
            <Form.Label>drinks Name</Form.Label>
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
            <Form.Label>drinks Description</Form.Label>
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
            <Form.Label>drinks Price</Form.Label>
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
            <Form.Label>drinks Image</Form.Label>
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
                    <!--  <Select.Item value="worker" label="Worker" />  -->
                    {#each categoryData as category}
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

 <Form.Field {form} name="is_alcoholic">
        <Form.Control let:attrs>
            <Form.Label>Is Alcoholic</Form.Label>
            <Select.Root
                selected={selectedCategory as Selected<boolean> | undefined}
                onSelectedChange={(v) => {
                    v && ($formData.is_alcoholic = v.value);
                }}
            >
                <Select.Trigger {...attrs}>
                    <Select.Value placeholder="Select Category" />
                </Select.Trigger>
                <Select.Content>
                     <Select.Item value="true" label="True" /> 
                     <Select.Item value="false" label="False" />
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
    <Form.Button class="mt-4">Save New Drink</Form.Button>
</form>
