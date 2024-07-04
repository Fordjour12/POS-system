<script lang="ts">
    /**
     * This is the settings page
     * add,update,delete  worker account
     * add,update,delete product category
     *
     */

    import { Button } from "@/components/button/index";
    import * as Card from "@/components/card/index";
    import { Input } from "@/components/input/index";
</script>

<!-- settings page -->

<div class="grid gap-6">
    <Card.Root
        data-x-chunk-name="dashboard-04-chunk-1"
        data-x-chunk-description="A form to update the store name."
    >
        <Card.Header>
            <Card.Title>Store Name</Card.Title>
            <Card.Description>
                Used to identify your store in the marketplace.
            </Card.Description>
        </Card.Header>
        <Card.Content>
            <form>
                <Input placeholder="Store Name" />
            </form>
        </Card.Content>
        <Card.Footer class="border-t px-6 py-4">
            <Button>Save</Button>
        </Card.Footer>
    </Card.Root>
</div>
