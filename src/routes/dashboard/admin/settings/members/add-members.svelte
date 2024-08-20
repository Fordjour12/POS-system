<script lang="ts">
    import * as Form from "@/components/form/index";
    import * as Select from "@/components/select/index";
    import { Input } from "@/components/input/index";
    import {
        superForm,
        type Infer,
        type SuperValidated,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { formSchema, type FormSchema } from "./schema";

    type Props = SuperValidated<Infer<FormSchema>>;
    let { data }: { data: Props } = $props();

    const form = superForm(data.data, {
        validators: zodClient(formSchema),
    });

    const { form: formData, enhance, errors } = form;

    let selectedRole = $formData.role
        ? { label: $formData.role, value: $formData.role }
        : undefined;
</script>

<form method="POST" use:enhance>
    <Form.Field {form} name="username">
        <Form.Control let:attrs>
            <Form.Label>Username</Form.Label>
            <Input
                type="text"
                {...attrs}
                bind:value={$formData.username}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="password">
        <Form.Control let:attrs>
            <Form.Label>Password</Form.Label>
            <Input
                type="text"
                {...attrs}
                bind:value={$formData.password}
                autocomplete="false"
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="role">
        <Form.Control let:attrs>
            <Form.Label>Role</Form.Label>
            <Select.Root
                selected={selectedRole}
                onSelectedChange={(v) => {
                    v && ($formData.role = v.value);
                }}
            >
                <Select.Trigger {...attrs}>
                    <Select.Value placeholder="Select Role" />
                </Select.Trigger>
                <Select.Content>
                    <Select.Item value="admin" label="Admin" />
                    <Select.Item value="worker" label="Worker" />
                </Select.Content>
            </Select.Root>
            <input
                {...attrs}
                bind:value={$formData.role}
                name={attrs.name}
                hidden
            />
        </Form.Control>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button>Save Changes</Form.Button>
</form>
