const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Sentiment Score",
            },
          },
        ],
      },
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Positive Sentiment",
            data: [88, 92, 85, 78, 90, 86, 94],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0,
          },
          {
            label: "Negative Sentiment",
            data: [12, 8, 15, 22, 10, 14, 6],
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0,
          },
        ],
      },
      options: optionsLine,
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Sentiment Score",
            },
          },
        ],
      },
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Positive: #4ED6B8
     * Negative: #F7604D
     * Neutral: #A8D582
     */

    configBar = {
      type: "horizontalBar",
      data: {
        labels: ["Positive", "Negative", "Neutral"],
        datasets: [
          {
            label: "Sentiment Analysis",
            data: [70, 30, 50],
            backgroundColor: ["#4ED6B8", "#F7604D", "#A8D582"],
            borderWidth: 0,
          },
        ],
      },
      options: optionsBar,
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      legend: {
        position: "top",
      },
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [45, 30, 25],
            backgroundColor: ["#4ED6B8", "#F7604D", "#A8D582"],
            label: "Sentiment Distribution",
          },
        ],
        labels: [
          "Positive Sentiment",
          "Negative Sentiment",
          "Neutral Sentiment",
        ],
      },
      options: optionsPie,
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}
