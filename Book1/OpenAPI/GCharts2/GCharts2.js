google.charts.load('current', { 'packages': ['corechart'] });

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();

    let tempData = '';

    const formData = Array.from(
        new FormData(event.target),
        function (inputs) {
        // console.log(inputs);
        if (inputs[0] == 'task') {
            tempData = inputs[1];
            console.log(`tempData = ${tempData}`);
        } else {
            return [tempData, parseInt(inputs[1])];
        }
        }
    );

    const formData2 = formData.filter(function (item) {
        return item !== undefined;
    });

    console.log(formData, formData2);

    drawChart(formData2);
};

function drawChart(dataSrc) {
    dataSrc.unshift(['Task', 'Hours per Day']);

    var data = google.visualization.arrayToDataTable(dataSrc);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}