import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ["Interest", "Principal Amount", "Processing Fees"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          parseFloat(data?.totalInterest),
          parseFloat(data?.loanAmount - data?.downPayment),
          parseFloat(
            (data?.processingFees * (data?.loanAmount - data?.downPayment)) /
              100
          )
        ],
        backgroundColor: ["#618264", "#B0D9B1", "#c8f8c7"],
        borderColor: ["#618264", "#B0D9B1", "#c8f8c7"],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={chartData} />;
};

export default PieChart;
