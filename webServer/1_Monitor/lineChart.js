var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [3, 4, 5, 6, 4, 4, 4, 3, 4, 5, 5];

const chartDO = new Chart("chartDO", {
    type: "line",
    data: {
        datasets: [{
            label: "Chart DO",
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
        },],
    },
    options: {
        scales: {
        yAxes: [{ ticks: { min: 0, max: 20 } }],
        },
    },
});

const chartPH = new Chart("chartPH", {
  type: "line",
  data: {
    datasets: [
      {
        label: "Chart PH",
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{ ticks: { min: 0, max: 14 } }],
    },
  },
});

const chartWL = new Chart("chartWL", {
  type: "line",
  data: {
    datasets: [
      {
        label: "Mức nước",
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{ ticks: { min: 0, max: 200 } }],
    },
  },
});

const chartTemp = new Chart("chartTemp", {
  type: "line",
  data: {
    datasets: [
      {
        label: "Nhiệt độ",
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{ ticks: { min: 20, max: 40 } }],
    },
  },
});

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}
