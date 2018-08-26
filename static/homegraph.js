var chart;
var chart2;
var chart3;
var chart4;
var chart5;
// var socket = io.connect('http://localhost:1883');
//1st chart
function requestData() {
    $.ajax({
        url: '/mydata',
        success: function(point) {
            var series = chart.series[0],
                shift = series.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            chart.series[0].addPoint(point, true, shift);

            // call it again after one second
            setTimeout(requestData, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container',
            defaultSeriesType: 'line',
            width: 900,
            events: {
                load: requestData
            }
        },
        title: {
            text: 'Appliance 1'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000,
            title: {
                text: 'Time',
                margin: 30
            }
        },
        yAxis: {
            min: 0,
            max: 1000,
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Power',
                margin: 30
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Power',
            data: []
        }]
    });
});


//2nd chart
function requestData2() {
    $.ajax({
        url: '/mydata2',
        success: function(point2) {
            var series2 = chart2.series[0],
                shift2 = series2.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            chart2.series[0].addPoint(point2, true, shift2);

            // call it again after one second
            setTimeout(requestData2, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container2',
            defaultSeriesType: 'line',
            width: 900,
            events: {
                load: requestData2
            }
        },
        title: {
            text: 'Appliance 2'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000,
            title: {
                text: 'Time',
                margin: 30
            }
        },
        yAxis: {
            min: 0,
            max: 5000,
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Power',
                margin: 30
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Power',
            data: []
        }]
    });
});

//3rd chart
function requestData3() {
    $.ajax({
        url: '/mydata3',
        success: function(point3) {
            var series3 = chart3.series[0],
                shift3 = series3.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            chart3.series[0].addPoint(point3, true, shift3);

            // call it again after one second
            setTimeout(requestData3, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    chart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container3',
            defaultSeriesType: 'line',
            width: 900,
            events: {
                load: requestData3
            }
        },
        title: {
            text: 'Appliance 3'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000,
            title: {
                text: 'Time',
                margin: 30
            }
        },
        yAxis: {
            min: 0,
            max: 800,
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Power',
                margin: 30
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Power',
            data: []
        }]
    });
});


//4th chart
function requestData4() {
    $.ajax({
        url: '/mydata4',
        success: function(point4) {
            var series4 = chart4.series[0],
                shift4 = series4.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            chart4.series[0].addPoint(point4, true, shift4);

            // call it again after one second
            setTimeout(requestData4, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    chart4 = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container4',
            defaultSeriesType: 'line',
            width: 900,
            events: {
                load: requestData4
            }
        },
        title: {
            text: 'Appliance 4'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000,
            title: {
                text: 'Time',
                margin: 30
            }
        },
        yAxis: {
            min: 0,
            max: 800,
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Power',
                margin: 30
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Power',
            data: []
        }]
    });
});

//5th chart
function requestData5() {
    $.ajax({
        url: '/mydata5',
        success: function(point5) {
            var series5 = chart5.series[0],
                shift5 = series5.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            chart5.series[0].addPoint(point5, true, shift5);

            // call it again after one second
            setTimeout(requestData5, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    chart5 = new Highcharts.Chart({
        chart: {
            renderTo: 'data-container5',
            defaultSeriesType: 'line',
            width: 900,
            events: {
                load: requestData5
            }
        },
        title: {
            text: 'Appliance 5'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000,
            title: {
                text: 'Time',
                margin: 30
            }
        },
        yAxis: {
            min: 0,
            max: 2000,
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Power',
                margin: 30
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Power',
            data: []
        }]
    });
});
