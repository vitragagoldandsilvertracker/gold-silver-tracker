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
} from "chart.js";

ChartJS.register(
  BarElement,
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

const wks = [
  "Jun25",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan26",
  "Feb",
  "Mar",
  "Apr7",
];
const net = [38, 44, 52, 38, null, 46, 55, 65, 50, 40, 23];
const sp = [29, 30, 31, 32, null, 31, 30, 55, 110, 80, 73];
const data = {
  labels: wks,
  datasets: [
    {
      type: "bar",
      label: "Managed money net longs (k)",
      data: net,
      backgroundColor: (ctx) =>
        ctx.raw === null
          ? "transparent"
          : ctx.raw >= 0
            ? "rgba(168,168,179,.65)"
            : "rgba(192,57,43,.65)",
      borderRadius: 3,
      yAxisID: "y1",
    },
    {
      type: "line",
      label: "Silver price (right)",
      data: sp,
      borderColor: S,
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      yAxisID: "y2",
      spanGaps: false,
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
    tooltip: { mode: "index", intersect: false },
  },
  scales: {
    x: { grid: { display: false } },
    y1: {
      type: "linear",
      position: "left",
      grid: DW,
      ticks: { callback: (v) => v + "k" },
    },
    y2: {
      type: "linear",
      position: "right",
      grid: { display: false },
      ticks: { callback: (v) => "$" + v },
    },
  },
};

export default function CotSilverChart() {
  return <Bar data={data} options={options} />;
}
