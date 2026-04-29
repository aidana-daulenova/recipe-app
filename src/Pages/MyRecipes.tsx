import { Table } from "@chakra-ui/react";

export default function MyRecipes() {
  return (
    <Table.Root size="sm" interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Recipe</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

const items = [
  { id: 1, name: "Chicken & berry grain bowl" },
  { id: 2, name: "Porrige" },
  { id: 3, name: "Tandoori chicken salad" },
  { id: 4, name: "Firecracker chicken noodle salad" },
];
