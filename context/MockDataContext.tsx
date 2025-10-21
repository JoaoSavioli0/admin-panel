"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const MockDataContext = createContext({});

export class UserData {
  id!: number;
  name!: string;
  place!: string;
  age!: number;
  phone!: string;
  avatar?: string;
}

export interface ExtendedUserData extends UserData {
  email: string;
  role: "morador" | "síndico" | "administrador";
  createdAt: string;
}

export class Collaborator {
  id!: number;
  name!: string;
  place!: string;
  age!: number;
  phone!: string;
  avatar?: string;
  occupations?: string[] = [];
  workSchedule?: string; //formato padrão: 07:00-18:00
}

export class Solicitation {
  id!: number;
  title!: string;
  text!: string;
  place!: string;
  date!: string;
  tags?: string[];
  creatorData!: UserData;
  assignedColabs: number[] = [];
  status!: "Pendente" | "Em andamento" | "Concluído";
}

export class BookablePlace {
  id!: number;
  name!: string;
  schedule!: string;
  maxGuests?: number;
}

export class Booking {
  id!: number;
  placeData!: BookablePlace;
  description?: string;
  guests!: number;
  date!: string;
  period!: string;
  creatorData!: UserData;
  status: "Pendente" | "Aprovado" | "Concluído" = "Pendente";
}

export function MockDataProvider({ children }: { children: React.ReactNode }) {
  const [mockSolicitations, setMockSolicitations] = useState<Solicitation[]>([
    {
      id: 1,
      title: "Vazamento de água na rua principal",
      text: "Há um vazamento constante próximo ao número 215 da Rua das Flores. A água está se espalhando pela calçada e já formou poças na rua.",
      place: "Rua das Flores, 215 - Centro",
      date: "2025-10-15T09:30:00",
      tags: ["Infraestrutura", "Água", "Urgente", "Trânsito"],
      creatorData: {
        id: 101,
        name: "Lucas Andrade",
        place: "Rua das Acácias, 50",
        age: 32,
        phone: "(11) 99876-4321",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      assignedColabs: [],
      status: "Em andamento",
    },
    {
      id: 2,
      title: "Poste de iluminação apagado",
      text: "O poste próximo à entrada da praça do bairro está apagado há mais de uma semana. A área fica muito escura à noite.",
      place: "Praça São Pedro - Vila Verde",
      date: "2025-10-12T18:45:00",
      tags: ["Iluminação", "Segurança"],
      creatorData: {
        id: 102,
        name: "Mariana Costa",
        place: "Rua Bela Vista, 120",
        age: 27,
        phone: "(11) 98412-7689",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
      assignedColabs: [],
      status: "Pendente",
    },
    {
      id: 3,
      title: "Coleta de lixo atrasada",
      text: "O caminhão de coleta não passou nos últimos três dias, e o lixo está se acumulando em frente às casas.",
      place: "Rua Dom Pedro II - Jardim Esperança",
      date: "2025-10-10T07:20:00",
      tags: ["Limpeza", "Serviços Públicos"],
      creatorData: {
        id: 103,
        name: "Fernando Ribeiro",
        place: "Rua Dom Pedro II, 210",
        age: 45,
        phone: "(11) 99715-3098",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      assignedColabs: [],
      status: "Concluído",
    },
    {
      id: 4,
      title: "Buraco na pista próximo à escola",
      text: "Um buraco grande se formou na rua em frente à Escola Estadual Monteiro Lobato, oferecendo risco aos motoristas.",
      place: "Rua das Palmeiras, 89 - Vila Nova",
      date: "2025-10-18T14:10:00",
      tags: ["Infraestrutura", "Trânsito"],
      creatorData: {
        id: 104,
        name: "Beatriz Nogueira",
        place: "Rua das Palmeiras, 120",
        age: 29,
        phone: "(11) 99604-7782",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      assignedColabs: [],
      status: "Pendente",
    },
    {
      id: 5,
      title: "Árvore caída bloqueando calçada",
      text: "Uma árvore caiu com o vento forte da última noite e está impedindo a passagem de pedestres.",
      place: "Av. Brasil, 500 - Jardim América",
      date: "2025-10-19T08:15:00",
      tags: ["Meio Ambiente", "Segurança"],
      creatorData: {
        id: 105,
        name: "Paulo Henrique",
        place: "Av. Brasil, 470",
        age: 38,
        phone: "(11) 99588-1133",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      assignedColabs: [],
      status: "Em andamento",
    },
  ]);

  const [mockCollaborators, setMockCollaborators] = useState<Collaborator[]>([
    {
      id: 1,
      name: "Carlos Henrique",
      place: "Bloco A - Térreo",
      age: 42,
      phone: "(11) 99845-2211",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      occupations: ["Zelador", "Manutenção geral"],
      workSchedule: "07:00-17:00",
    },
    {
      id: 2,
      name: "Marcos Paulo",
      place: "Bloco B - Subsolo",
      age: 35,
      phone: "(11) 99230-5582",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      occupations: ["Encanador", "Hidráulica"],
      workSchedule: "08:00-18:00",
    },
    {
      id: 3,
      name: "Juliana Ribeiro",
      place: "Bloco C - Cobertura",
      age: 29,
      phone: "(11) 98765-7720",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
      occupations: ["Eletricista", "Instalações residenciais"],
      workSchedule: "09:00-19:00",
    },
    {
      id: 4,
      name: "Anderson Lima",
      place: "Jardins externos",
      age: 38,
      phone: "(11) 99123-3345",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      occupations: ["Jardineiro", "Paisagismo"],
      workSchedule: "06:00-15:00",
    },
  ]);

  const [mockResidents, setMockResidents] = useState<ExtendedUserData[]>([
    {
      id: 1,
      name: "Carlos Nunes",
      place: "Bloco A - 202",
      age: 32,
      phone: "(11) 98844-1122",
      email: "carlos.nunes@example.com",
      role: "morador",
      createdAt: "2024-03-15",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Mariana Silva",
      place: "Bloco B - 405",
      age: 27,
      phone: "(11) 98233-7789",
      email: "mariana.silva@example.com",
      role: "morador",
      createdAt: "2024-06-02",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Diego Rocha",
      place: "Bloco C - 101",
      age: 29,
      phone: "(11) 97655-4422",
      email: "diego.rocha@example.com",
      role: "morador",
      createdAt: "2024-07-11",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 4,
      name: "Ana Paula Mendes",
      place: "Bloco D - 302",
      age: 35,
      phone: "(11) 98555-0098",
      email: "ana.mendes@example.com",
      role: "síndico",
      createdAt: "2023-12-22",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      id: 5,
      name: "Rogério Lima",
      place: "Bloco E - 105",
      age: 41,
      phone: "(11) 98777-5532",
      email: "rogerio.lima@example.com",
      role: "morador",
      createdAt: "2024-05-09",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 6,
      name: "Juliana Torres",
      place: "Bloco A - 305",
      age: 25,
      phone: "(11) 98322-6711",
      email: "juliana.torres@example.com",
      role: "administrador",
      createdAt: "2023-11-30",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 7,
      name: "Felipe Andrade",
      place: "Bloco B - 104",
      age: 38,
      phone: "(11) 98761-2309",
      email: "felipe.andrade@example.com",
      role: "morador",
      createdAt: "2024-02-18",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 8,
      name: "Patrícia Gomes",
      place: "Bloco C - 203",
      age: 30,
      phone: "(11) 98622-1133",
      email: "patricia.gomes@example.com",
      role: "morador",
      createdAt: "2024-04-12",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  ]);

  const [mockBookablePlaces, setMockBookablePlaces] = useState<BookablePlace[]>(
    [
      {
        id: 1,
        name: "Salão de Festas",
        schedule: "SEG-DOM/08:00-23:00",
        maxGuests: 50,
      },
      {
        id: 2,
        name: "Churrasqueira 1",
        schedule: "SEG-DOM/09:00-22:00",
        maxGuests: 30,
      },
      {
        id: 3,
        name: "Quadra Poliesportiva",
        schedule: "SEG-DOM/07:00-21:00",
      },
      {
        id: 4,
        name: "Sala de Reuniões",
        schedule: "SEX-DOM/08:00-20:00",
        maxGuests: 20,
      },
    ]
  );

  const [mockBookings, SetMockBookings] = useState<Booking[]>([
    {
      id: 1,
      placeData: {
        id: 1,
        name: "Salão de Festas",
        schedule: "08:00-23:00",
        maxGuests: 50,
      },
      description: "Aniversário da Júlia 🎉",
      guests: 40,
      date: "2025-11-02",
      period: "17:00-22:00",
      creatorData: {
        id: 1,
        name: "Carlos Nunes",
        place: "Bloco A - 202",
        age: 32,
        phone: "(11) 98844-1122",
        avatar: "/avatars/carlos.png",
      },
      status: "Aprovado",
    },
    {
      id: 2,
      placeData: {
        id: 2,
        name: "Churrasqueira 1",
        schedule: "09:00-22:00",
        maxGuests: 15,
      },
      description: "Churrasco dos amigos 🍖",
      guests: 12,
      date: "2025-11-05",
      period: "12:00-18:00",
      creatorData: {
        id: 2,
        name: "Mariana Silva",
        place: "Bloco B - 405",
        age: 27,
        phone: "(11) 98233-7789",
        avatar: "/avatars/mariana.png",
      },
      status: "Pendente",
    },
    {
      id: 3,
      placeData: {
        id: 3,
        name: "Quadra Poliesportiva",
        schedule: "07:00-21:00",
      },
      description: "Campeonato de futsal",
      guests: 10,
      date: "2025-11-10",
      period: "08:00-12:00",
      creatorData: {
        id: 3,
        name: "Diego Rocha",
        place: "Bloco C - 101",
        age: 29,
        phone: "(11) 97655-4422",
        avatar: "/avatars/diego.png",
      },
      status: "Pendente",
    },
    {
      id: 4,
      placeData: {
        id: 4,
        name: "Sala de Reuniões",
        schedule: "08:00-20:00",
        maxGuests: 10,
      },
      description: "Reunião do condomínio",
      guests: 8,
      date: "2025-11-12",
      period: "18:30-20:00",
      creatorData: {
        id: 4,
        name: "Ana Paula Mendes",
        place: "Bloco D - 302",
        age: 35,
        phone: "(11) 98555-0098",
        avatar: "/avatars/ana.png",
      },
      status: "Concluído",
    },
    {
      id: 5,
      placeData: {
        id: 5,
        name: "Piscina",
        schedule: "06:00-20:00",
      },
      description: "Aula de natação infantil 🏊‍♂️",
      guests: 6,
      date: "2025-11-15",
      period: "09:00-10:30",
      creatorData: {
        id: 5,
        name: "Rogério Lima",
        place: "Bloco E - 105",
        age: 41,
        phone: "(11) 98777-5532",
        avatar: "/avatars/rogerio.png",
      },
      status: "Aprovado",
    },
  ]);

  const setCollaborator = (
    solicitationId: number,
    collaboratorIds: number[]
  ) => {
    setMockSolicitations((prev) =>
      prev.map((s) =>
        s.id === solicitationId
          ? { ...s, status: "Pendente", assignedColabs: collaboratorIds }
          : s
      )
    );
  };

  return (
    <MockDataContext.Provider
      value={{
        mockSolicitations,
        mockCollaborators,
        setCollaborator,
        mockBookings,
        SetMockBookings,
        mockBookablePlaces,
        setMockBookablePlaces,
        mockResidents,
        setMockResidents,
      }}
    >
      {children}
    </MockDataContext.Provider>
  );
}

export function useMockData() {
  return useContext(MockDataContext);
}
