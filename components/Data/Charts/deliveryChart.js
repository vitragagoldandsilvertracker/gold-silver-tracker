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

const mo = ["Oct25", "Nov", "Dec", "Jan26", "Feb", "Mar", "Apr"];
const gd = [420, 380, 510, 820, 640, 580, 310];
const sd = [1200, 980, 1450, 2100, 1680, 1240, 780];

const data = {
  labels: mo,
  datasets: [
    {
      label: "Gold deliveries",
      data: gd,
      backgroundColor: "rgba(201,168,76,.7)",
      borderRadius: 3,
      yAxisID: "y1",
    },
    {
      label: "Silver deliveries",
      data: sd,
      backgroundColor: "rgba(168,168,179,.5)",
      borderRadius: 3,
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
    y1: { type: "linear", position: "left", grid: DW },
    y2: { type: "linear", position: "right", grid: { display: false } },
  },
};

export default function DeliveryChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Bar data={data} options={options} />
    </div>
  );
}
