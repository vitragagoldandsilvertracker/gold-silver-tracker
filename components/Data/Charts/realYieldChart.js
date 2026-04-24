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

const G = "#C9A84C";
const DWD = { color: "rgba(255,255,255,.05)" };
const mo = [
  "Jan22",
  "Jul22",
  "Jan23",
  "Jul23",
  "Jan24",
  "Jul24",
  "Jan25",
  "Jul25",
  "Jan26",
  "Apr26",
];
const ry = [-0.9, 1.3, 1.6, 2.0, 1.9, 2.1, 1.7, 1.8, 1.9, 1.89];
const gp = [1800, 1720, 1900, 1960, 2040, 2500, 2840, 3400, 5540, 4728];

const data = {
  labels: mo,
  datasets: [
    {
      label: "Gold (right)",
      data: gp,
      borderColor: G,
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      yAxisID: "y2",
    },
    {
      label: "Real yield",
      data: ry,
      borderColor: "#4A7AB5",
      backgroundColor: "rgba(74,122,181,.06)",
      borderWidth: 1.5,
      borderDash: [4, 3],
      pointRadius: 0,
      tension: 0.4,
      yAxisID: "y1",
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
      labels: {
        boxWidth: 8,
        font: { size: 10 },
        color: "rgba(255,255,255,.45)",
      },
    },
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: { grid: DWD, ticks: { color: "rgba(255,255,255,.35)" } },
    y1: {
      type: "linear",
      position: "left",
      grid: DWD,
      ticks: { color: "rgba(255,255,255,.35)", callback: (v) => v + "%" },
    },
    y2: {
      type: "linear",
      position: "right",
      grid: { display: false },
      ticks: { color: G, callback: (v) => "$" + v.toLocaleString() },
    },
  },
};

export default function RealYieldChart() {
  return <Line data={data} options={options} />;
}
