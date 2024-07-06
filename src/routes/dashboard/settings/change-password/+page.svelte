<script lang="ts">
    import { Button } from "@/components/button/index.js";
    import * as Card from "@/components/card/index.js";
    import { Input } from "@/components/input/index.js";
</script>

<div class="grid gap-6">
    <form>
        <Card.Root
            data-x-chunk-name="dashboard-change-Email-chunk-1"
            data-x-chunk-description="A form to update your Email."
        >
            <Card.Header>
                <Card.Title>Username Resetting</Card.Title>
                <Card.Description>
                    Used to reset your account password.
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <Input placeholder="Username" />
            </Card.Content>

            <Card.Header>
                <Card.Title>Password Resetting</Card.Title>
                <Card.Description>
                    Used to reset your account password.
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <Input placeholder="Password" />
            </Card.Content>
            <Card.Footer class="border-t px-6 py-4">
                <Button>Save</Button>
            </Card.Footer>
        </Card.Root>
    </form>
</div>
