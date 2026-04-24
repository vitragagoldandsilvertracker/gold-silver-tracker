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
const dxy = [95, 112, 104, 106, 104, 105, 104, 100, 107, 99.84];
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
      label: "DXY (left)",
      data: dxy,
      borderColor: S,
      borderWidth: 1.5,
      borderDash: [4, 3],
      pointRadius: 0,
      tension: 0.4,
      yAxisID: "y1",
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
      ticks: { color: "rgba(255,255,255,.35)" },
      min: 88,
      max: 118,
    },
    y2: {
      type: "linear",
      position: "right",
      grid: { display: false },
      ticks: { color: G, callback: (v) => "$" + v.toLocaleString() },
    },
  },
};

export default function DxyChart() {
  return <Line data={data} options={options} />;
}
