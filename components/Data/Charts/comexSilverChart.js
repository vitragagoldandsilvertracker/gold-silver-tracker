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
const reg = [120, 108, 98, 92, 85, 88, 82, 80, 81, 82];
const eli = [185, 190, 195, 200, 210, 215, 208, 205, 210, 215];

const data = {
  labels: mo,
  datasets: [
    {
      label: "Registered (deliverable)",
      data: reg,
      backgroundColor: "rgba(168,168,179,.75)",
      borderRadius: 3,
    },
    {
      label: "Eligible",
      data: eli,
      backgroundColor: "rgba(168,168,179,.25)",
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

export default function ComexSilverChart() {
  return <Bar data={data} options={options} />;
}
