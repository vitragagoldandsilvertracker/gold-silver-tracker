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
import { plugin } from "postcss";

ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);


const DW = { color: "rgba(0,0,0,.04)" },
  DWD = { color: "rgba(255,255,255,.05)" };

const data = {
  labels: [
    "2014",
    "2015",
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
      data: [477, 577, 383, 374, 656, 605, 255, 450, 1136, 1051, 1037],
      backgroundColor: (ctx) =>
        ctx.raw > 800 ? "rgba(201,168,76,.9)" : "rgba(201,168,76,.45)",
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: DW, ticks: { callback: (v) => v + "t" } },
  },
};

export default function CbChart() {
  return <Bar data={data} options={options} />;
}
