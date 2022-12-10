var button = document.getElementById("button");
button.addEventListener("click", equbDetail);

var row=1;

function equbDetail(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var amount = document.getElementById("amount").value;

    if(!name ||  !age ||  !gender || !amount){
        alert("please fill all the boxs");
        return;
    }

var equbList = document.getElementById("equbList");

var newRow = equbList.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);

cell1.innerHTML = name;
cell2.innerHTML = age;
cell3.innerHTML = gender;
cell4.innerHTML = amount;

row++;
}

let btn = document.getElementById("btn");
let output = document.getElementById("output");
let names = ["senait","Hermela","Betty","Hana","Almaz","Shewaye","Daniel","Samuel","Abraham","Yacob","Yosef","Simon","Abeba","Tsega"]

btn.addEventListener("click", function(){
    var randomname = names[Math.floor(Math.random() * names.length)] + "!!!!";
    output.innerHTML = randomname;
})

// Create the chart
Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      align: 'left',
      text: 'Participants age difference. January, 2022'
    },
    subtitle: {
      align: 'left',
      text: 'Hover for more information.'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent of participants'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "80 above",
            y: 33.06,
          },
          {
            name: "71-80",
            y: 39.84,
          },
          {
            name: "56-60",
            y: 14.18,
          },
          {
            name: "40-55",
            y: 4.12,
          },
          {
            name: "30-39",
            y: 2.33,
          },
          {
            name: "20-29",
            y: 0.45,
          },
          {
            name: "below 20",
            y: 1.582,
          }
        ]
      }
    ],
  });