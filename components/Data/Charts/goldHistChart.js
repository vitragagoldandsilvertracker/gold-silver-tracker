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
const DW = { color: "rgba(0,0,0,.04)" };

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
    "2024Q1",
    "2024Q3",
    "2025Q1",
    "2025Q3",
    "Jan26ATH",
    "Apr26",
  ],
  datasets: [
    {
      data: [
        1150, 1290, 1280, 1480, 1950, 1800, 1820, 2060, 2050, 2500, 2900, 3400,
        5602, 4728,
      ],
      borderColor: G,
      backgroundColor: "rgba(201,168,76,.08)",
      borderWidth: 2,
      pointRadius: 0,
      fill: true,
      tension: 0.35,
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
    y: { grid: DW, ticks: { callback: (v) => "$" + v.toLocaleString() } },
  },
};

export default function GoldHistChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
}
