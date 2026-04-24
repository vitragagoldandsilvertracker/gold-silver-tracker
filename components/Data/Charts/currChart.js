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

const G = "#C9A84C";
const GA = "rgba(201,168,76,.12)";
const S = "#A8A8B3";
const SA = "rgba(168,168,179,.12)";

const INK = "#1A1A2E";
const RED = "#C0392B";
const GRN = "#1A7A4A";
const BLU = "#1E3A5F";

const DW = { color: "rgba(0,0,0,.04)" };
const DWD = { color: "rgba(255,255,255,.05)" };

const data = {
  labels: ["USD", "EUR", "GBP", "AUD", "CAD", "CHF", "CNY"],
  datasets: [
    {
      data: [4728, 4370, 3740, 7480, 6450, 4260, 34200],
      backgroundColor: G,
      borderRadius: 5,
      barPercentage: 0.65,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { grid: { display: false } },
    y: { grid: DW, ticks: { callback: (v) => v.toLocaleString() } },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const s = [
            "USD $",
            "EUR EUR ",
            "GBP GBP ",
            "AUD A$",
            "CAD C$",
            "CHF CHF ",
            "CNY CNY ",
          ];
          const r = [4728, 4370, 3740, 7480, 6450, 4260, 34200];
          return s[ctx.dataIndex] + r[ctx.dataIndex].toLocaleString() + "/oz";
        },
      },
    },
  },
};

export default function CurrChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Bar data={data} options={options} />
    </div>
  );
}
