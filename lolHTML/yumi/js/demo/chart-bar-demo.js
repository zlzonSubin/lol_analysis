// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Iron", "Iron", "Bronze", "Bronze", "Silver", "Silver", "Gold", "Gold", "Platinum", "Platinum", "Diamond", "Diamond", "Master", "Master", "Grandmaster", "Grandmaster","Challenger", "Challenger"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [1096, 4384, 2168, 17344, 0, 25320,8037,18753,0,13960,7872,9840,5610,13090,3666,32994,5082,20328],
      
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'tier'
        },
        gridLines: {
          display: true
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
