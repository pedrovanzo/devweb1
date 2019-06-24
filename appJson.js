let jsonData;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    jsonData = JSON.parse(this.responseText);
    console.log(jsonData);
    let ctx = document.getElementById("myChart").getContext("2d");
    let chart = new Chart(ctx, {
      // The type of chart we want to create
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
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: jsonData.title,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [
              jsonData.january,
              jsonData.february,
              jsonData.march,
              jsonData.april,
              jsonData.may,
              jsonData.june,
              jsonData.july,
              jsonData.august,
              jsonData.september,
              jsonData.october,
              jsonData.november,
              jsonData.december
            ]
          }
        ]
      },
      options: {}
    });
  }
};
xhttp.open("GET", "https://pedrovanzo.github.io/devweb1/dw.json", true);
xhttp.send();
