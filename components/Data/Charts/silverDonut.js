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

const data = {
  labels: ["Electronics", "Solar PV", "Automotive/EV", "Other"],
  datasets: [
    {
      data: [50, 29, 12, 9],
      backgroundColor: ["#1E3A5F", "#C9A84C", "#1A7A4A", "#A8A8B3"],
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

export default function SilverDonut() {
  return <Doughnut data={data} options={options} />;
}
