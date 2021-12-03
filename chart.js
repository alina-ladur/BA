google.charts.load('current', {packages: ['corechart','table']});

google.charts.setOnLoadCallback(drawSort);
google.charts.setOnLoadCallback(drawTable1);


/////////////////////Page
function drawSort() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Банк');
    data.addColumn('number', 'Прибуток(млн грн)');
    data.addColumn('number', 'Головна');
    data.addColumn('number', 'Форуми');
    data.addRows(10);
    for(var i=0; i<10;i++) {
        data.setCell(i, 0, arr1[i].Банк);
        data.setCell(i, 1, arr1[i].Прибуток);
        data.setCell(i, 2, arr1[i].ЗМІ);
        data.setCell(i, 3, arr1[i].Форум);
    }
    var table_options = {
        title: 'Висвітлення у медіа',
        /*showRowNumber: true,*/
        width: "100%",
        height: 500,
        /* height: "100%"*/
    };
    var barchart_options = {
        backgroundColor: '#FAFAFA',
        width: "100%",
        height: 500,
        chartArea: {width: '70%', height: '80%'},
        bar: { groupWidth: '100%' },
        legend: { position: 'top', maxLines: 3 }
    };
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2, 3]);
    var table = new google.visualization.Table(document.getElementById('kn1tab_div'));
    table.draw(data, table_options);
    var barchart = new google.visualization.BarChart(document.getElementById('kn1gr_div'));
    barchart.draw(view, barchart_options);
    google.visualization.events.addListener(table, 'sort',
        function(event) {
            data.sort([{column: event.column, desc: !event.ascending}]);
            barchart.draw(view, barchart_options);
        });
}
function drawTable1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Банк');
    data.addColumn('number', 'SoV');
    data.addRows([a2[0], a2[1], a2[2], a2[3], a2[4], a2[5], a2[6], a2[7], a2[8], a2[9]]);
    var table_options = {
        showRowNumber: true,
        width: "100%",
    };
    var piechart_options = {
        backgroundColor: '#FAFAFA',
        width: "100%",
        height: 400,
        legend: {position: 'r'},
        is3D: true,
        chartArea: {width: '90%', height: '90%'},
    };
    var barchart_options = {
        backgroundColor: '#FAFAFA',
        width: 700,
        height: 400,
        chartArea: {width: '60%', height: '70%'},
        bar: {groupWidth: '70%'},
        legend: {position: 'top', maxLines: 3}
    };
    var table = new google.visualization.Table(document.getElementById('kn2tab_div'));
    table.draw(data, table_options);
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1]);
    var piechart = new google.visualization.PieChart(document.getElementById('kn2gr_div'));
    piechart.draw(view, piechart_options);
    var barchart = new google.visualization.BarChart(document.getElementById('kn3gr_div'));
    barchart.draw(view, barchart_options);
    google.visualization.events.addListener(table, 'sort',
        function (event) {
            data.sort([{column: event.column, desc: !event.ascending}]);
            barchart.draw(view, barchart_options);
        });
}

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 100) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});
