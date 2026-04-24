import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  BarElement,
  Legend,
  plugins,
} from "chart.js";
import { legend } from "framer-motion/client";

ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);

const DWD = { color: "rgba(255,255,255,.05)" };

const assets = [
  "Gold",
  "Silver",
  "S&P 500",
  "TLT Bonds",
  "GDX Miners",
  "Bitcoin",
];
const yr1 = [46.9, 133.9, -2.8, -6.1, 62.4, 24.8];
const yr5 = [24.1, 31.2, 14.2, -6.2, 18.6, 44.2];
const data = {
  labels: assets,
  datasets: [
    {
      label: "1-Year return %",
      data: yr1,
      backgroundColor: yr1.map((v) =>
        v >= 0 ? "rgba(201,168,76,.8)" : "rgba(192,57,43,.7)",
      ),
      borderRadius: 4,
      yAxisID: "y",
    },
    {
      label: "5-Year ann. %",
      data: yr5,
      backgroundColor: yr5.map((v) =>
        v >= 0 ? "rgba(74,122,181,.6)" : "rgba(192,57,43,.45)",
      ),
      borderRadius: 4,
      yAxisID: "y",
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
    x: { grid: { display: false }, ticks: { color: "rgba(255,255,255,.35)" } },
    y: {
      grid: DWD,
      ticks: { color: "rgba(255,255,255,.35)", callback: (v) => v + "%" },
    },
  },
};

export default function AssetReturnChart() {
  return <Bar data={data} options={options} />;
}
