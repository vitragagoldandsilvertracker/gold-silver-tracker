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
const mo = ["Oct 25", "Nov", "Dec", "Jan 26", "Feb", "Mar", "Apr 13"];
const am = [2770, 3050, 2630, 5540, 4960, 3100, 4720];
const pm = [2780, 3060, 2640, 5560, 4970, 3110, 4728];

const data = {
  labels: mo,
  datasets: [
    {
      label: "AM fix",
      data: am,
      borderColor: "rgba(201,168,76,.9)",
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: G,
      tension: 0.3,
    },
    {
      label: "PM fix",
      data: pm,
      borderColor: "rgba(201,168,76,.5)",
      borderWidth: 1.5,
      borderDash: [3, 3],
      pointRadius: 2,
      tension: 0.3,
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
    y: { grid: DW, ticks: { callback: (v) => "$" + v.toLocaleString() } },
  },
};

export default function LbmaChart() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
}
