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

const data = {
  labels: ["Feb25", "Apr", "Jun", "Aug", "Oct", "Dec", "Feb26", "Apr26e"],
  datasets: [
    {
      label: "N.America",
      data: [-2.1, 1.4, 2.2, 3.8, 10.6, 5.2, -13.0, 3.2],
      backgroundColor: (ctx) =>
        ctx.raw >= 0 ? "rgba(201,168,76,.75)" : "rgba(192,57,43,.7)",
      borderRadius: 2,
    },
    {
      label: "Europe",
      data: [-0.8, 0.6, 1.8, 2.1, 4.4, 0.9, -2.1, 1.1],
      backgroundColor: (ctx) =>
        ctx.raw >= 0 ? "rgba(26,122,74,.7)" : "rgba(192,57,43,.5)",
      borderRadius: 2,
    },
    {
      label: "Asia",
      data: [0.6, 1.1, 1.4, 1.8, 2.1, 3.2, 2.0, 4.1],
      backgroundColor: "rgba(30,58,95,.7)",
      borderRadius: 2,
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
    y: { grid: DW, ticks: { callback: (v) => "$" + v + "bn" } },
  },
};

export default function EtfFlowsChart() {
  return <Bar data={data} options={options} />;
}
