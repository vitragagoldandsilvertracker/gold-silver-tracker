import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  LineElement,
  Legend,
  plugins,
} from "chart.js";
import { legend } from "framer-motion/client";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);

const yrs = [
  "2000",
  "02",
  "04",
  "06",
  "08",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "Apr26",
];
const nom = [
  279, 310, 400, 600, 900, 1225, 1675, 1200, 1150, 1250, 1775, 1820, 2390, 4728,
];
const real = [
  440, 470, 580, 810, 1110, 1380, 1790, 1240, 1160, 1230, 1680, 1560, 1870,
  4728,
];
const data = {
  labels: yrs,
  datasets: [
    {
      label: "Nominal price",
      data: nom,
      borderColor: G,
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.35,
    },
    {
      label: "Inflation-adjusted (2026$)",
      data: real,
      borderColor: "rgba(168,168,179,.7)",
      borderWidth: 1.5,
      borderDash: [4, 3],
      pointRadius: 0,
      tension: 0.35,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 8,
        font: { size: 10 },
        color: "rgba(255,255,255,.45)",
      },
    },
  },
  scales: {
    x: { grid: DWD, ticks: { color: "rgba(255,255,255,.35)" } },
    y: {
      grid: DWD,
      ticks: {
        color: "rgba(255,255,255,.35)",
        callback: (v) => "$" + v.toLocaleString(),
      },
    },
  },
};

export default function InflAdjChart() {
  return <Line data={data} options={options} />;
}
