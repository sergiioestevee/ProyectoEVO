// src/pages/admin/AdminUsers.jsx

import React, { useState } from "react";
import { users as mockUsers } from "../../data/users.mock";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";

const AdminUsers = () => {
  const [userList, setUserList] = useState(mockUsers);

  const handleDelete = (id) => {
    setUserList(userList.filter((u) => u.id !== id));
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Nombre", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Rol", accessor: "role" },
    {
      header: "Acciones",
      render: (row) => (
        <Button variant="danger" onClick={() => handleDelete(row.id)}>
          Borrar
        </Button>
      ),
    },
  ];

  return <Table columns={columns} data={userList} />;
};

export default AdminUsers;
