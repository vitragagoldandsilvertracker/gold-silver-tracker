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

const G = "#C9A84C";
const GA = "rgba(201,168,76,.12)";

const DW = { color: "rgba(0,0,0,.04)" };

const data = {
  labels: [
    "2005",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25H1",
    "25H2",
    "Apr26",
  ],
  datasets: [
    {
      data: [
        55, 52, 51, 78, 68, 66, 44, 53, 61, 67, 73, 72, 77, 82, 88, 116, 69, 82,
        85, 88, 80, 65, 64.8,
      ],
      borderColor: G,
      backgroundColor: GA,
      borderWidth: 2,
      pointRadius: 0,
      fill: true,
      tension: 0.3,
    },
    {
      data: Array(23).fill(67),
      borderColor: "rgba(0,0,0,.2)",
      borderWidth: 1,
      borderDash: [4, 4],
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top",
      labels: { boxWidth: 8, font: { size: 10 }, color: "#8888AA" },
    },
  },
  scales: {
    x: { grid: DW },
    y: { grid: DW, min: 30, max: 130, ticks: { callback: (v) => v + "x" } },
  },
};
export default function RadioChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
}
