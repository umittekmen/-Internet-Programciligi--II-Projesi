import React, { useState, useEffect } from "react";
import axios from "axios"; // API istekleri için axios kütüphanesi
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react"; // Chakra UI bileşenleri

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Sunucudan kullanıcı verilerini almak için bir API çağrısı yap
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users"); // API endpointine uygun şekilde güncelle
        setUsers(response.data); // Kullanıcı verilerini state'e ayarla
      } catch (error) {
        console.error("Kullanıcı verileri alınamadı:", error);
      }
    };

    fetchUsers(); // useEffect çağrısında API çağrısını başlat
  }, []);

  return (
    <Box p="4">
      <Heading as="h1" mb="4">
        Kullanıcı Listesi
      </Heading>
      <List spacing={3}>
        {users.map((user) => (
          <ListItem key={user.id} p="4" borderWidth="1px" borderRadius="lg">
            <Text>
              <strong>Kullanıcı Adı:</strong> {user.username}
            </Text>
            <Text>
              <strong>E-posta:</strong> {user.email}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Admin;
