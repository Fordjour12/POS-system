<script lang="ts">
  import * as Form from "@/components/form/index";
  import { Input } from "@/components/input/index";
  import {
    superForm,
    type Infer,
    type SuperValidated,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { loginSchema, type LoginSchema } from "./schema.js";

  type Props = SuperValidated<Infer<LoginSchema>>;

  let { data }: { data: Props } = $props();

  const form = superForm(data.data, {
    validators: zodClient(loginSchema),
  });

  const { form: formData, enhance, errors } = form;
</script>

<form method="POST" use:enhance>
  {#if $errors._errors}
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">{$errors._errors}</span>
    </div>
  {/if}

  <Form.Field {form} name="username">
    <Form.Control let:attrs>
      <Form.Label>Username</Form.Label>
      <Input type="text" {...attrs} bind:value={$formData.username} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="password">
    <Form.Control let:attrs>
      <Form.Label>Password</Form.Label>
      <Input
        type="password"
        {...attrs}
        bind:value={$formData.password}
        class="font-bold"
      />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Button>Login</Form.Button>
</form>
