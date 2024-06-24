<script lang="ts">
    import { Button } from "@/components/button/index";
    import * as Card from "@/components/card/index";
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
                <Button>Create Member Account</Button>
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
