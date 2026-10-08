import React from "react";
import {
  Button,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@patternfly/react-core";

export function UserTable({ users, loading, onDelete }) {
  if (loading) return <Spinner aria-label="Loading users" />;

  return (
    <Table aria-label="Users">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td dataLabel="Name">{user.name}</Td>
            <Td dataLabel="Email">{user.email}</Td>
            <Td dataLabel="Actions">
              <Button
                variant="danger"
                onClick={() => onDelete(user.id)}
              >
                Delete user
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
