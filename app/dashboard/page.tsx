"use client";

import { Bar, Line, Pie } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ChartOptions,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const dashSolicitationStatus = {
    labels: ["Pendente", "Em andamento", "Concluída"],
    datasets: [
      {
        label: "Solicitaçõess",
        data: [12, 8, 20],
        backgroundColor: ["#f87171", "#fbbf24", "#34d399"], // cores personalizadas
        borderRadius: 4,
      },
    ],
  };

  const dashSolicitationCategories = {
    labels: ["Infraestrutura", "Elétrico", "Segurança", "Social", "Elevador"],
    datasets: [
      {
        label: "Categorias",
        data: [14, 5, 6, 2, 5],
        backgroundColor: ["#f87171", "#fbbf24", "#34d399"], // cores personalizadas
        borderRadius: 4,
      },
    ],
  };

  const dashSolicitationVolume = {
    datasets: [
      {
        label: "Solicitações por dia",
        data: [
          { x: "Janeiro", y: 5 },
          { x: "Fevereiro", y: 12 },
          { x: "Março", y: 9 },
          { x: "Abril", y: 15 },
          { x: "Maio", y: 14 },
          { x: "Junho", y: 16 },
        ],
        borderColor: "#34d399",
        backgroundColor: "rgba(52,211,153,0.2)",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const optionsSolicitationStatus = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Status das Solicitações",
      },
    },
  };

  const optionsSolicitationCategories = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Categorias mais solicitadas",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* <div className="w-full grid grid-cols-4 grid-rows-2 gap-3">
        <div className="p-4 border rounded-md border-black/20 shadow-sm bg-white row-span-2">
          <div className="w-full h-full">
            <Pie
              data={dashSolicitationStatus}
              options={optionsSolicitationStatus}
            />
          </div>
        </div>
        <div className="p-4 border rounded-md border-black/20 shadow-sm bg-white col-span-2 row-span-2">
          <div className="w-full h-full">
            <Bar
              data={dashSolicitationCategories}
              options={optionsSolicitationCategories}
            />
          </div>
        </div>
        <div className="p-4 border rounded-md border-black/20 shadow-sm bg-white col-span-2 row-span-2">
          <Line data={dashSolicitationVolume} />
        </div>
      </div> */}
      <iframe
        title="DASHBORAD"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiM2NiODA5MTUtZDI1NC00MDUwLWEzMmQtZmI0NTRmY2ZjZDA5IiwidCI6IjU5ZDRmMjQ5LTA1MjAtNDZjZi1iNmIyLTg3M2Q1ZGE1NDNmZSJ9"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
