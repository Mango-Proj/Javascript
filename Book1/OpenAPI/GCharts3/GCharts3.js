google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

const initData = [
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
];

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    let tempData = '';

    const formData = Array.from(
        new FormData(event.target),
        inputs => {
            if (inputs.includes('task')) {
                tempData = inputs[1];
                console.log(`tempData = ${tempData}`);
            } else {
                return [tempData, parseInt(inputs[1])];
            }
        }
    );
    
    const formData2 = formData.filter(item => item !== undefined);
    console.log(formData, formData2);
    drawChart(formData2);
};

function drawChart(dataSrc) {
    if (typeof dataSrc === 'undefined') dataSrc = initData;

    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Task');
    data.addColumn('number', 'Hours per Day');
    data.addRows(dataSrc);

    const options = {
        title: '나의 일과', 
        width: '100%', 
        height: 400
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}