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
const comm = [-210, -220, -230, -225, null, -245, -270, -295, -300, -265, -200];
const data = {
  labels: wks,
  datasets: [
    {
      label: "Commercial net short (hedgers)",
      data: comm,
      backgroundColor: "rgba(30,58,95,.65)",
      borderRadius: 3,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: { label: (ctx) => ctx.raw + "k contracts net short" },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: {
      grid: DW,
      ticks: { callback: (v) => v + "k" },
      suggestedMin: -320,
      suggestedMax: 0,
    },
  },
};

export default function CotCommChart() {
  return <Bar data={data} options={options} />;
}
