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
const S = "#A8A8B3";
const DWD = { color: "rgba(255,255,255,.05)" };
const mo = ["2020", "2021", "2022", "2023", "2024", "2025", "Apr26"];
const cpi = [1.2, 7.0, 8.0, 3.4, 2.9, 3.1, 3.3];
const m2 = [16.0, 19.5, 21.6, 20.8, 21.0, 21.5, 21.9];
const data = {
  labels: mo,
  datasets: [
    {
      label: "CPI YoY %",
      data: cpi,
      borderColor: "#F44336",
      backgroundColor: "rgba(244,67,54,.07)",
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.4,
      fill: true,
      yAxisID: "y1",
    },
    {
      label: "M2 ($tn)",
      data: m2,
      borderColor: "rgba(74,122,181,.8)",
      borderWidth: 1.5,
      borderDash: [3, 3],
      pointRadius: 2,
      tension: 0.3,
      yAxisID: "y2",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 8,
        font: { size: 10 },
        color: "rgba(255,255,255,.45)",
      },
    },
  },
  scales: {
    x: { grid: DWD, ticks: { color: "rgba(255,255,255,.35)" } },
    y1: {
      type: "linear",
      position: "left",
      grid: DWD,
      ticks: { color: "rgba(255,255,255,.35)", callback: (v) => v + "%" },
    },
    y2: {
      type: "linear",
      position: "right",
      grid: { display: false },
      ticks: { color: "rgba(74,122,181,.8)", callback: (v) => "$" + v + "tn" },
    },
  },
};

export default function InflationChart() {
  return <Line data={data} options={options} />;
}
