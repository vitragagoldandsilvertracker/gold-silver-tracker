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
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);

const G = "#C9A84C",
  GA = "rgba(201,168,76,.12)",
  S = "#A8A8B3",
  SA = "rgba(168,168,179,.12)";
const INK = "#1A1A2E",
  RED = "#C0392B",
  GRN = "#1A7A4A",
  BLU = "#1E3A5F";
const DW = { color: "rgba(0,0,0,.04)" },
  DWD = { color: "rgba(255,255,255,.05)" };
const yrs = [
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "Apr26",
];
const aisc = [869, 952, 1051, 1068, 1276, 1343, 1370, 1400, 1350];
const spot = [1268, 1393, 1770, 1800, 1800, 1943, 2386, 3000, 4728];
const data = {
  labels: yrs,
  datasets: [
    {
      label: "Gold spot price",
      data: spot,
      borderColor: G,
      backgroundColor: "rgba(201,168,76,.08)",
      borderWidth: 2.5,
      pointRadius: 3,
      tension: 0.35,
      fill: true,
    },
    {
      label: "AISC (mining cost)",
      data: aisc,
      borderColor: RED,
      backgroundColor: "rgba(192,57,43,.1)",
      borderWidth: 2,
      borderDash: [4, 3],
      pointRadius: 3,
      tension: 0.35,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: { boxWidth: 8, font: { size: 10 } },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: DW, ticks: { callback: (v) => "$" + v.toLocaleString() } },
  },
};

export default function AiscChart() {
  return <Line data={data} options={options} />;
}
