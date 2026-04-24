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
  const mo = [
    "Jan24",
    "Apr",
    "Jul",
    "Oct",
    "Jan25",
    "Apr",
    "Jul",
    "Oct",
    "Jan26",
    "Apr26e",
  ];
  const gld = [860, 840, 830, 870, 900, 850, 840, 860, 890, 845];
  const slv = [
    13800, 13400, 13200, 13500, 14000, 13800, 14200, 14600, 14400, 14200,
  ];
const data = {
  labels: mo,
  datasets: [
    {
      label: "GLD holdings (t, left)",
      data: gld,
      borderColor: G,
      backgroundColor: "rgba(201,168,76,.08)",
      borderWidth: 2,
      pointRadius: 2,
      tension: 0.4,
      fill: false,
      yAxisID: "y1",
    },
    {
      label: "SLV holdings (t, right)",
      data: slv,
      borderColor: S,
      borderWidth: 1.5,
      borderDash: [4, 3],
      pointRadius: 2,
      tension: 0.4,
      yAxisID: "y2",
    },
  ],
};

const options = {responsive:true,plugins:{legend:{display:true,position:'top',labels:{boxWidth:8,font:{size:10}}}},
    scales:{x:{grid:{display:false}},y1:{type:'linear',position:'left',grid:DW,ticks:{callback:v=>v+'t'}},y2:{type:'linear',position:'right',grid:{display:false},ticks:{callback:v=>v.toLocaleString()+'t'}}}};

export default function EtfHoldingsChart() {
  return <Line data={data} options={options} />;
}
