<script lang="ts">
    import { Button } from "@/components/button/index";
    import * as Card from "@/components/card/index";
    import * as Sheet from "@/components/sheet/index";
    import type { PageData } from "./$types";
    import AddMembers from "./add-members.svelte";

    let { data }: { data: PageData } = $props();
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
                        <AddMembers />
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
            {#if data.workers.length === 0}
                <p class="text">No members found</p>
            {:else}
                {#each data.workers as worker}
                    <div class="pt-6">
                        <Card.Root
                            class="flex items-center gap-4 justify-between w-full py-4 px-6"
                        >
                            <p>{worker.username}</p>
                            <p>{worker.role}</p>
                            <Button variant="destructive">Remove</Button>
                        </Card.Root>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>
