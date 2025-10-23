import { useState } from "react";
import { Alert } from "react-native";
import { Client } from "../types";

const clientsData: Client[] = [
  { id: "1", name: "DULCE SEQUERA", cedula: "30569851", telefono: "04121214717" },
  { id: "2", name: "MARIA PEREZ", cedula: "12345678", telefono: "04129876543" },
  { id: "3", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
  { id: "4", name: "CARLOS RAMIREZ", cedula: "20458963", telefono: "04241231231" },
  { id: "5", name: "ANA TORRES", cedula: "31478520", telefono: "04141239876" },
  { id: "6", name: "LUIS MENDOZA", cedula: "29587410", telefono: "04269251234" },
  { id: "7", name: "SOFÍA CASTILLO", cedula: "32745098", telefono: "04165554433" },
  { id: "8", name: "JAVIER HERNÁNDEZ", cedula: "27654123", telefono: "04241112222" },
  { id: "9", name: "VERÓNICA RIVAS", cedula: "30875421", telefono: "04121213456" },
  { id: "10", name: "ANDREA LÓPEZ", cedula: "33478520", telefono: "04149871234" },
];

export function useClients() {
  const [clients, setClients] = useState<Client[]>(clientsData);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSaveClient = (newClient: Omit<Client, "id">) => {
    setClients(prevClients => [
      ...prevClients,
      { ...newClient, id: String(prevClients.length + 1) },
    ]);
    setModalOpen(false);
    Alert.alert("Éxito", "Registro exitoso");  };

  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    search,
    setSearch,
    modalOpen,
    setModalOpen,
    filteredClients,
    handleSaveClient,
  };
}
