import { Bar, Line } from "react-chartjs-2";
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
      data: [
        14.8, -13.7, -30.0, 14.4, 80.0, -89.4, -272.4, -184.5, -147.0, -169.0,
      ],
      backgroundColor: (ctx) =>
        ctx.raw >= 0 ? "rgba(26,122,74,.75)" : "rgba(192,57,43,.7)",
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx) =>
          (ctx.raw > 0 ? "+" : "") +
          ctx.raw +
          " Moz " +
          (ctx.raw > 0 ? "(surplus)" : "(deficit)"),
      },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: DW, ticks: { callback: (v) => v + "M" } },
  },
};

export default function SilverDeficitChart() {
  return <Bar data={data} options={options} />;
}
