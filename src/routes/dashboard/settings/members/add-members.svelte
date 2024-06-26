<script lang="ts">
    import { Input } from "@/components/input/index";
    import { Label } from "@/components/label/index";
</script>

<div class="grid gap-4 py-4">
    <div class="grid grid-cols-4 items-center gap-4">
        <Label for="name" class="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
    </div>
    <div class="grid grid-cols-4 items-center gap-4">
        <Label for="username" class="text-right">Username</Label>
        <Input id="username" value="@peduarte" class="col-span-3" />
    </div>
</div>
