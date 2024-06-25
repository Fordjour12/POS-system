<script lang="ts">
    import { Button } from "@/components/button/index";
    import * as Card from "@/components/card/index";
    import * as Sheet from "@/components/sheet/index";
    import { Input } from "@/components/input/index";
    import { Label } from "@/components/label/index";
</script>

<div>
    <div class="grid">
        <Card.Root class="sm:col-span-3">
            <Card.Header class="pb-3">
                <Card.Title>Add Members</Card.Title>
                <Card.Description class="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Sheet.Root>
                    <Sheet.Trigger asChild let:builder>
                        <Button builders={[builder]}>
                            Create Member Account
                        </Button>
                    </Sheet.Trigger>
                    <Sheet.Content side="right">
                        <Sheet.Header>
                            <Sheet.Title>Edit Profile</Sheet.Title>
                            <Sheet.Description>
                                Make changes to your profile here. Click save
                                when you're done.
                            </Sheet.Description>
                        </Sheet.Header>
                        <div class="grid gap-4 py-4">
                            <div class="grid grid-cols-4 items-center gap-4">
                                <Label for="name" class="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    value="Pedro Duarte"
                                    class="col-span-3"
                                />
                            </div>
                            <div class="grid grid-cols-4 items-center gap-4">
                                <Label for="username" class="text-right">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    value="@peduarte"
                                    class="col-span-3"
                                />
                            </div>
                        </div>
                        <Sheet.Footer>
                            <Sheet.Close asChild let:builder>
                                <Button builders={[builder]} type="submit">
                                    Save Changes
                                </Button>
                            </Sheet.Close>
                        </Sheet.Footer>
                    </Sheet.Content>
                </Sheet.Root>
            </Card.Footer>
        </Card.Root>
    </div>

    <div class="py-6">
        <h3 class="text-2xl font-bold underline underline-offset-8">Members</h3>

        <div>
            <!-- list of all the member in the organization -->
        </div>
    </div>
</div>
