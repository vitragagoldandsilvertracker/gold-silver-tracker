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

const G = "#C9A84C";
const S = "#A8A8B3";
const DWD = { color: "rgba(255,255,255,.05)" };
const mo = ["2020", "2021", "2022", "2023", "2024", "2025", "Apr26"];
const cpi = [1.2, 7.0, 8.0, 3.4, 2.9, 3.1, 3.3];
const m2 = [16.0, 19.5, 21.6, 20.8, 21.0, 21.5, 21.9];
const data = {
  labels: [
    "2000",
    "2005",
    "2008",
    "2010",
    "2012",
    "2015",
    "2018",
    "2020",
    "2022",
    "2024",
    "2026e",
  ],
  datasets: [
    {
      data: [55, 61, 68, 90, 100, 103, 106, 130, 120, 124, 126],
      borderColor: "#F44336",
      backgroundColor: "rgba(244,67,54,.07)",
      borderWidth: 2,
      pointRadius: 0,
      fill: true,
      tension: 0.35,
    },
    {
      data: Array(11).fill(100),
      borderColor: "rgba(255,255,255,.2)",
      borderWidth: 1,
      borderDash: [4, 4],
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: { grid: DWD, ticks: { color: "rgba(255,255,255,.35)" } },
    y: {
      grid: DWD,
      ticks: { color: "rgba(255,255,255,.35)", callback: (v) => v + "%" },
      min: 40,
      max: 140,
    },
  },
};

export default function DebtChart() {
  return <Line data={data} options={options} />;
}
