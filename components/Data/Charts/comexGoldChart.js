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

const mo = [
  "Jan25",
  "Mar",
  "May",
  "Jul",
  "Sep",
  "Nov",
  "Jan26",
  "Feb",
  "Mar",
  "Apr",
];
const reg = [8.2, 7.8, 8.0, 9.1, 10.2, 12.8, 30.8, 34.1, 33.5, 33.2];
const eli = [4.2, 4.4, 4.5, 5.0, 5.5, 5.8, 6.2, 6.4, 6.5, 6.4];
const data = {
  labels: mo,
  datasets: [
    {
      label: "Registered (deliverable)",
      data: reg,
      backgroundColor: "rgba(201,168,76,.7)",
      borderRadius: 3,
    },
    {
      label: "Eligible",
      data: eli,
      backgroundColor: "rgba(201,168,76,.25)",
      borderRadius: 3,
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
    y: { grid: DW, ticks: { callback: (v) => v + "M oz" } },
  },
};

export default function ComexGoldChart() {
  return <Bar data={data} options={options} />;
}
