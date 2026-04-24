import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
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
  labels: ["Jewellery", "Investment", "Central Banks", "Technology"],
  datasets: [
    {
      data: [41, 30, 22, 7],
      backgroundColor: ["#C9A84C", "#1A7A4A", "#1E3A5F", "#A8A8B3"],
      borderWidth: 0,
      hoverOffset: 3,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "72%",
  plugins: { legend: { display: false } },
};

export default function GoldDonut() {
  return <Doughnut data={data} options={options} />;
}
