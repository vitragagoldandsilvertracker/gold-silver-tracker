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
  "Jul16",
  "Jan18",
  "Jan19",
  "Jan21",
  "Jan23",
  "Jan24",
  "Jan25",
  "Feb26",
];
const gold = [7449, 7680, 7910, 9602, 8700, 8600, 8535, 9210];
const silv = [32078, 30000, 31000, 34346, 29000, 27500, 23528, 27065];
const data = {
  labels: mo,
  datasets: [
    {
      label: "Gold (t, left)",
      data: gold,
      borderColor: G,
      backgroundColor: "rgba(201,168,76,.08)",
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
      fill: false,
      yAxisID: "y1",
    },
    {
      label: "Silver (t, right)",
      data: silv,
      borderColor: S,
      borderWidth: 1.5,
      borderDash: [4, 3],
      pointRadius: 2,
      tension: 0.3,
      yAxisID: "y2",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: { boxWidth: 8, font: { size: 10 } },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y1: {
      type: "linear",
      position: "left",
      grid: DW,
      ticks: { callback: (v) => v.toLocaleString() + "t" },
    },
    y2: {
      type: "linear",
      position: "right",
      grid: { display: false },
      ticks: { callback: (v) => v.toLocaleString() + "t" },
    },
  },
};

export default function LbmaVaultChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
}
