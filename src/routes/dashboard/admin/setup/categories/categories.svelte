<script lang="ts">
    import * as Form from "@/components/form/index";
    import { Input } from "@/components/input/index";
    import {
        superForm,
        type Infer,
        type SuperValidated,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { categorySchema, type CategorySchema } from "./schema";

    type Props = SuperValidated<Infer<CategorySchema>>;
    let { data }: { data: Props } = $props();

    const form = superForm(data.data, {
        validators: zodClient(categorySchema),
    });

    const { form: formData, enhance, errors } = form;
</script>

<form method="POST" use:enhance>
    <Form.Field {form} name="name">
        <Form.Control let:attrs>
            <Form.Label>Category Name</Form.Label>
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
            <Form.Label>Category Description</Form.Label>
            <Input
                {...attrs}
                bind:value={$formData.description}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>

    <Form.Button class="mt-4">Save New Category</Form.Button>
</form>
