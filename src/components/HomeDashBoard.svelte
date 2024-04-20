<script lang="ts">
    import Card, { Content } from "@smui/card";
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
    let clicked = 0;
</script>

<div class="card-display">
    <div class="card-container">
        <Card padded>
            <DataTable table$aria-label="People list" style="max-width: 100%;">
                <Head>
                    <Row>
                        <Cell>Animal</Cell>
                        <Cell>Favorite Color</Cell>
                        <Cell numeric>Favorite Number</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>NEK</Cell>
                        <Cell>Red</Cell>
                        <Cell numeric>45</Cell>
                    </Row>
                    <Row>
                        <Cell>INU</Cell>
                        <Cell>Purple</Cell>
                        <Cell numeric>5</Cell>
                    </Row>
                    <Row>
                        <Cell>TORI</Cell>
                        <Cell>Orange</Cell>
                        <Cell numeric>32</Cell>
                    </Row>
                    <Row>
                        <Cell>ZOU</Cell>
                        <Cell>Blue</Cell>
                        <Cell numeric>12</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Card>
    </div>
</div>
