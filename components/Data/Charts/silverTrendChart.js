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

const data = {
  labels: [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025e",
  ],
  datasets: [
    {
      label: "Supply",
      data: [1028, 1003, 1004, 1023, 976, 1023, 1065, 1021, 1013, 1030],
      borderColor: S,
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
    },
    {
      label: "Demand",
      data: [1013, 1017, 1034, 1009, 896, 1112, 1337, 1206, 1160, 1199],
      borderColor: G,
      backgroundColor: "rgba(201,168,76,.06)",
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
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
    y: { grid: DW, min: 800, max: 1450, ticks: { callback: (v) => v + "M" } },
  },
};

export default function SilverTrendChart() {
  return <Line data={data} options={options} />;
}
