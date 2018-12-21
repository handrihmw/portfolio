var oilCanvas = document.getElementById("oilChart");
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
        labels: [
            "Windows",
            "Linux",
            "Github",
            "VS Code",
            "Postman",
            "Sublime"
        ],
    datasets: [
        {
            data: [90, 70, 70, 80, 50, 80],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#63FF77",
                "#6384FF"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});