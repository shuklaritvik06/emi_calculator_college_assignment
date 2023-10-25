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
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={chartData} />;
};

export default PieChart;
