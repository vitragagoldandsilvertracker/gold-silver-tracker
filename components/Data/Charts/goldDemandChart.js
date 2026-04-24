import { Bar, Line } from "react-chartjs-2";
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
  ],
  datasets: [
    {
      label: "Jewellery",
      data: [2042, 2215, 2240, 2123, 1412, 2221, 2190, 2093, 1893],
      backgroundColor: "rgba(201,168,76,.85)",
    },
    {
      label: "Investment",
      data: [1592, 1271, 1159, 1272, 1773, 1743, 1200, 1186, 1356],
      backgroundColor: "rgba(26,122,74,.8)",
    },
    {
      label: "Central Banks",
      data: [376, 374, 656, 605, 255, 450, 1136, 1051, 1037],
      backgroundColor: "rgba(30,58,95,.85)",
    },
    {
      label: "Technology",
      data: [323, 333, 335, 326, 302, 330, 309, 302, 326],
      backgroundColor: "rgba(136,136,170,.6)",
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
    x: { stacked: true, grid: { display: false } },
    y: { stacked: true, grid: DW, ticks: { callback: (v) => v + "t" } },
  },
};

export default function GoldDemandChart() {
  return <Bar data={data} options={options} />;
}
