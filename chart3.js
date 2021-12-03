google.charts.load('current', {packages: ['corechart','table']});

google.charts.load("current", {packages: ["line"]});
google.charts.setOnLoadCallback(Visualization_p2);
google.charts.setOnLoadCallback(Visualization_p21);
google.charts.setOnLoadCallback(Visualization_p22);



/////////////Page3

function Visualization_p2 () {
    var data_KR = new google.visualization.DataTable();
    data_KR.addColumn('string', 'Банк');
    data_KR.addColumn('number', 'Кількість Документів');
    data_KR.addColumn('number', 'Позитивні');
    data_KR.addColumn('number', 'Нейтральні');
    data_KR.addColumn('number', 'Негативні');
    data_KR.addColumn('number', 'MFI');
    data_KR.addColumn('number', 'MV');
    data_KR.addColumn('number', 'MQ');
    data_KR.addColumn('number', 'NS');
    data_KR.addColumn('number', 'AVR_MFI');
    data_KR.addColumn('number', 'AVR_MV');
    data_KR.addColumn('number', 'AVR_MQ');
    data_KR.addColumn('number', 'AVR_NS');
    data_KR.addColumn('number', 'Порогове значення (1)');
    data_KR.addColumn('number', 'Порогове значення (-1)');
    data_KR.addRows(4);
    for (let i = 0; i < 4; i++) {
        data_KR.setCell(i, 0, arr_KR[i].Банк);
        data_KR.setCell(i, 1, arr_KR[i].КількістьДокументів);
        data_KR.setCell(i, 2, arr_KR[i].Позитивні);
        data_KR.setCell(i, 3, arr_KR[i].Нейтральні);
        data_KR.setCell(i, 4, arr_KR[i].Негативні);
        data_KR.setCell(i, 5, arr_KR[i].MFI);
        data_KR.setCell(i, 6, arr_KR[i].MV);
        data_KR.setCell(i, 7, arr_KR[i].MQ);
        data_KR.setCell(i, 8, arr_KR[i].NS);
        data_KR.setCell(i, 9, arr_KR[i].AVR_MFI);
        data_KR.setCell(i, 10, arr_KR[i].AVR_MV);
        data_KR.setCell(i, 11, arr_KR[i].AVR_MQ);
        data_KR.setCell(i, 12, arr_KR[i].AVR_NS);
        data_KR.setCell(i, 13, 1);
        data_KR.setCell(i, 14, -1);
    }

    var table_options = {
        showRowNumber: true,
        width: "75%",
        height: 130,
    };
    var table_options1 = {
        showRowNumber: true,
        width: "100%",
        height: "100%",
    };
    var chart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        bar: {groupWidth: "75%"},
        colors: ['#3F7FBF', '#004411'],
    };
    var combochart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series:{0:{type:'bars'}},
        series:{
            1:{type: 'bars',targetAxisIndex: 1},
            2 :{type: 'line', targetAxisIndex: 1}
        },
        bar: {groupWidth: "75%"},
        colors: ['#00ff7f', '#4169e1', 'red'],
    };
    var columnchart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        colors: ['#00ff7f', '#4169e1', 'red','#ee82ee'],
    };
    var options_fullStacked = {
        backgroundColor: '#FAFAFA',
        isStacked: 'percent',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        hAxis: {
            minValue: 0,
            maxValue:1,

        },
        colors: ['#00ff7f', '#4169e1', 'red'],
    };
    var combo1chart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: { position: 'top' },
        displayExactValues: 'true',
        seriesType: 'bars',
        series:{0:{type:'bar'}},
        series:{
            1:{type: 'line'},
            2 :{type: 'line'},
        },
        bar: {groupWidth: "75%"},
        colors: [ '#4169e1', 'red', 'red'],
        bars: {position:'vertical'}

    };

   var myView = new google.visualization.DataView(data_KR);
    myView.setColumns([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    var table = new google.visualization.Table(document.getElementById('123'));
    table.draw(myView, table_options);

    var myView = new google.visualization.DataView(data_KR);
    myView.setColumns([0, 1]);
    var table = new google.visualization.Table(document.getElementById('3_div'));
    table.draw(myView, table_options1);

    var chart = new google.visualization.ColumnChart(document.getElementById('3chart_div'));
    chart.draw(myView, columnchart_options);

    var chart = new google.visualization.PieChart(document.getElementById('31chart_div'));
    chart.draw(myView, columnchart_options);

    var select = document.querySelector('#s_p2');
    var button = document.querySelector('#click_p2');
    button.addEventListener('click', function () {
        console.log(select.value);
        if (select.value === 'Кількість Публікацій') {
            $('#N_2').empty();
            document.getElementById("N_2").innerHTML =
                '<div class="box1"><h4>Згадування у медіа</h4>\n' +
                '<p>Кількість релевантних запиту публікацій у БД системи за період  t </p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 1]);
            var table = new google.visualization.Table(document.getElementById('3_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.PieChart(document.getElementById('31chart_div'));
            chart.draw(myView, columnchart_options);
            var chart = new google.visualization.ColumnChart(document.getElementById('3chart_div'));
            chart.draw(myView, chart_options);

        } else if (select.value === 'Тональність') {
            $('#N_2').empty();
            document.getElementById("N_2").innerHTML =
                '<div class="box1"><h4>Тональність</h4>\n' +
                '<p>Тональність публікацій — це показник, який використовує аналіз тексту враховуючи його емоційну складову для класифікації згадок про вашу компанію, бренд чи продукт на позитивні, негативні чи нейтральні.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 2, 3, 4]);
            var table = new google.visualization.Table(document.getElementById('3_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ColumnChart(document.getElementById('3chart_div'));
            chart.draw(myView, columnchart_options);
            var chart = new google.visualization.BarChart(document.getElementById('31chart_div'));
            chart.draw(myView, options_fullStacked);

        } else if (select.value === 'MFI') {
            $('#N_2').empty();
            document.getElementById("N_2").innerHTML = '<div class="box1">' +
                '<h4>Індекс прихильності медіа (Media Favourability Index) MFI</h4>\n' +
                '<p>Оцінка сприятливості публікацій про компанію (бренд) з урахуванням тональності повідомлень</p>' +
                '<p>При MFI<1 - негативних публікацій було більше,\n' +
                ' MFI = 1 - кількість позитивних і негативних публікацій рівна,\n' +
                '  MFI>1 позитивні переважають.\n</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 5, 9]);
            var table = new google.visualization.Table(document.getElementById('3_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('3chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0,1, 5, 9]);
            var chart = new google.visualization.ComboChart(document.getElementById('31chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'MV') {
            $('#N_2').empty();
            document.getElementById("N_2").innerHTML = '<div class="box1">' +
                '<h4>Індекс помітності в ЗМІ (Media Visibility) MV</h4>\n' +
                '<p>Характеризує якість наповнення медіа поля у контексті компанії або продукту</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 6, 10]);
            var table = new google.visualization.Table(document.getElementById('3_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('3chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0,1, 6, 10]);
            var chart = new google.visualization.ComboChart(document.getElementById('31chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'MQ') {
            $('#N_2').empty();
            document.getElementById("N_2").innerHTML = '<div class="box1">' +
                '<h4>Індекс якості комунікації (Media Quality) MQ</h4>\n' +
                '<p>Консолідована оцінка якості публікацій щодо об’єкта за період.</p>' +
                '<p>Уможливлює порівняння об’єктів з різним обсягом згадувань у ЗМІ.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 7, 11]);
            var table = new google.visualization.Table(document.getElementById('3_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('3chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 1, 7, 11]);
            var chart = new google.visualization.ComboChart(document.getElementById('31chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'NS') {
            $('#N_2').empty();
            document.getElementById("N_2").innerHTML = '<div class="box1">' +
                '<h4>Мережевий репутаційний індекс (Net Sentiment) NS</h4>\n' +
                '<p>Для оцінювання репутації об’єкта у медіапросторі</p>' +
                '<p>Інтервал [-1; 1]. При NS<0 - маємо негативну репутацію, а при NS>0 - позитивну.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 8, 12]);
            var table = new google.visualization.Table(document.getElementById('3_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('3chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_KR);
            myView.setColumns([0, 8,13,14]);
            var chart = new google.visualization.ComboChart(document.getElementById('31chart_div'));
            chart.draw(myView, combo1chart_options);
        }
    });
}
function Visualization_p21 () {
    var data_D = new google.visualization.DataTable();
    data_D.addColumn('string', 'Банк');
    data_D.addColumn('number', 'Кількість Документів');
    data_D.addColumn('number', 'Позитивні');
    data_D.addColumn('number', 'Нейтральні');
    data_D.addColumn('number', 'Негативні');
    data_D.addColumn('number', 'MFI');
    data_D.addColumn('number', 'MV');
    data_D.addColumn('number', 'MQ');
    data_D.addColumn('number', 'NS');
    data_D.addColumn('number', 'AVR_MFI');
    data_D.addColumn('number', 'AVR_MV');
    data_D.addColumn('number', 'AVR_MQ');
    data_D.addColumn('number', 'AVR_NS');
    data_D.addColumn('number', 'Порогове значення (1)');
    data_D.addColumn('number', 'Порогове значення (-1)');
    data_D.addRows(4);
    for (let i = 0; i < 4; i++) {
        data_D.setCell(i, 0, arr_D[i].Банк);
        data_D.setCell(i, 1, arr_D[i].КількістьДокументів);
        data_D.setCell(i, 2, arr_D[i].Позитивні);
        data_D.setCell(i, 3, arr_D[i].Нейтральні);
        data_D.setCell(i, 4, arr_D[i].Негативні);
        data_D.setCell(i, 5, arr_D[i].MFI);
        data_D.setCell(i, 6, arr_D[i].MV);
        data_D.setCell(i, 7, arr_D[i].MQ);
        data_D.setCell(i, 8, arr_D[i].NS);
        data_D.setCell(i, 9, arr_D[i].AVR_MFI);
        data_D.setCell(i, 10, arr_D[i].AVR_MV);
        data_D.setCell(i, 11, arr_D[i].AVR_MQ);
        data_D.setCell(i, 12, arr_D[i].AVR_NS);
        data_D.setCell(i, 13, 1);
        data_D.setCell(i, 14, -1);
    }
    var table_options = {
        showRowNumber: true,
        width: "75%",
        height: 130,
    };
    var table_options1 = {
        showRowNumber: true,
        width: "100%",
        height: "100%",
    };
    var chart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        bar: {groupWidth: "75%"},
        colors: ['#3F7FBF', '#004411'],
    };
    var combochart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series:{0:{type:'bars'}},
        series:{
            1:{type: 'bars',targetAxisIndex: 1, vAxis: {minValue:0}},
            2 :{type: 'line', targetAxisIndex: 1, vAxis: {minValue:0}}
        },
        bar: {groupWidth: "75%"},
        colors: ['#00ff7f', '#4169e1', 'red'],
    };
    var columnchart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        colors: ['#00ff7f', '#4169e1', 'red','#ee82ee'],
    };
    var options_fullStacked = {
        backgroundColor: '#FAFAFA',
        isStacked: 'percent',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        hAxis: {
            minValue: 0,
            maxValue:1,

        },
        colors: ['#00ff7f', '#4169e1', 'red'],
    };
    var combo1chart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: { position: 'top' },
        displayExactValues: 'true',
        seriesType: 'bars',
        series:{0:{type:'bar'}},
        series:{
            1:{type: 'line'},
            2 :{type: 'line'},
        },
        bar: {groupWidth: "75%"},
        colors: [ '#4169e1', 'red', 'red'],
        bars: {position:'vertical'}

    };

    var myView = new google.visualization.DataView(data_D);
    myView.setColumns([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    var table = new google.visualization.Table(document.getElementById('1234'));
    table.draw(myView, table_options);

    var myView = new google.visualization.DataView(data_D);
    myView.setColumns([0, 1]);
    var table = new google.visualization.Table(document.getElementById('4_div'));
    table.draw(myView, table_options1);

    var chart = new google.visualization.ColumnChart(document.getElementById('4chart_div'));
    chart.draw(myView, columnchart_options);

    var chart = new google.visualization.PieChart(document.getElementById('41chart_div'));
    chart.draw(myView, columnchart_options);

    var select = document.querySelector('#s_p3');
    var button = document.querySelector('#click_p3');
    button.addEventListener('click', function () {
        console.log(select.value);
        if (select.value === 'Кількість Публікацій') {
            $('#N_3').empty();
            document.getElementById("N_3").innerHTML =
                '<div class="box1"><h4>Згадування у медіа</h4>\n' +
                '<p>Кількість релевантних запиту публікацій у БД системи за період  t </p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 1]);
            var table = new google.visualization.Table(document.getElementById('4_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.PieChart(document.getElementById('41chart_div'));
            chart.draw(myView, columnchart_options);
            var chart = new google.visualization.ColumnChart(document.getElementById('4chart_div'));
            chart.draw(myView, chart_options);

        } else if (select.value === 'Тональність') {
            $('#N_3').empty();
            document.getElementById("N_3").innerHTML =
                '<div class="box1"><h4>Тональність</h4>\n' +
                '<p>Тональність публікацій — це показник, який використовує аналіз тексту враховуючи його емоційну складову для класифікації згадок про вашу компанію, бренд чи продукт на позитивні, негативні чи нейтральні.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 2, 3, 4]);
            var table = new google.visualization.Table(document.getElementById('4_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ColumnChart(document.getElementById('4chart_div'));
            chart.draw(myView, columnchart_options);
            var chart = new google.visualization.BarChart(document.getElementById('41chart_div'));
            chart.draw(myView, options_fullStacked);

        } else if (select.value === 'MFI') {
            $('#N_3').empty();
            document.getElementById("N_3").innerHTML = '<div class="box1">' +
                '<h4>Індекс прихильності медіа (Media Favourability Index) MFI</h4>\n' +
                '<p>Оцінка сприятливості публікацій про компанію (бренд) з урахуванням тональності повідомлень</p>' +
                '<p>При MFI<1 - негативних публікацій було більше,\n' +
                ' MFI = 1 - кількість позитивних і негативних публікацій рівна,\n' +
                '  MFI>1 позитивні переважають.\n</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 5, 9]);
            var table = new google.visualization.Table(document.getElementById('4_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('4chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0,1, 5, 9]);
            var chart = new google.visualization.ComboChart(document.getElementById('41chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'MV') {
            $('#N_3').empty();
            document.getElementById("N_3").innerHTML = '<div class="box1">' +
                '<h4>Індекс помітності в ЗМІ (Media Visibility) MV</h4>\n' +
                '<p>Характеризує якість наповнення медіа поля у контексті компанії або продукту</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 6, 10]);
            var table = new google.visualization.Table(document.getElementById('4_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('4chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0,1, 6, 10]);
            var chart = new google.visualization.ComboChart(document.getElementById('41chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'MQ') {
            $('#N_3').empty();
            document.getElementById("N_3").innerHTML = '<div class="box1">' +
                '<h4>Індекс якості комунікації (Media Quality) MQ</h4>\n' +
                '<p>Консолідована оцінка якості публікацій щодо об’єкта за період.</p>' +
                '<p>Уможливлює порівняння об’єктів з різним обсягом згадувань у ЗМІ.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 7, 11]);
            var table = new google.visualization.Table(document.getElementById('4_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('4chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 1, 7, 11]);
            var chart = new google.visualization.ComboChart(document.getElementById('41chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'NS') {
            $('#N_3').empty();
            document.getElementById("N_3").innerHTML = '<div class="box1">' +
                '<h4>Мережевий репутаційний індекс (Net Sentiment) NS</h4>\n' +
                '<p>Для оцінювання репутації об’єкта у медіапросторі</p>' +
                '<p>Інтервал [-1; 1]. При NS<0 - маємо негативну репутацію, а при NS>0 - позитивну.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 8, 12]);
            var table = new google.visualization.Table(document.getElementById('4_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('4chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_D);
            myView.setColumns([0, 8,13,14]);
            var chart = new google.visualization.ComboChart(document.getElementById('41chart_div'));
            chart.draw(myView, combo1chart_options);
        }
    });
}
function Visualization_p22 () {
    var data_OB = new google.visualization.DataTable();
    data_OB.addColumn('string', 'Банк');
    data_OB.addColumn('number', 'Кількість Документів');
    data_OB.addColumn('number', 'Позитивні');
    data_OB.addColumn('number', 'Нейтральні');
    data_OB.addColumn('number', 'Негативні');
    data_OB.addColumn('number', 'MFI');
    data_OB.addColumn('number', 'MV');
    data_OB.addColumn('number', 'MQ');
    data_OB.addColumn('number', 'NS');
    data_OB.addColumn('number', 'AVR_MFI');
    data_OB.addColumn('number', 'AVR_MV');
    data_OB.addColumn('number', 'AVR_MQ');
    data_OB.addColumn('number', 'AVR_NS');
    data_OB.addColumn('number', 'Порогове значення (1)');
    data_OB.addColumn('number', 'Порогове значення (-1)');
    data_OB.addRows(4);
    for (var i = 0; i < 4; i++) {
        data_OB.setCell(i, 0, arr_OB[i].Банк);
        data_OB.setCell(i, 1, arr_OB[i].КількістьДокументів);
        data_OB.setCell(i, 2, arr_OB[i].Позитивні);
        data_OB.setCell(i, 3, arr_OB[i].Нейтральні);
        data_OB.setCell(i, 4, arr_OB[i].Негативні);
        data_OB.setCell(i, 5, arr_OB[i].MFI);
        data_OB.setCell(i, 6, arr_OB[i].MV);
        data_OB.setCell(i, 7, arr_OB[i].MQ);
        data_OB.setCell(i, 8, arr_OB[i].NS);
        data_OB.setCell(i, 9, arr_OB[i].AVR_MFI);
        data_OB.setCell(i, 10, arr_OB[i].AVR_MV);
        data_OB.setCell(i, 11, arr_OB[i].AVR_MQ);
        data_OB.setCell(i, 12, arr_OB[i].AVR_NS);
        data_OB.setCell(i, 13, 1);
        data_OB.setCell(i, 14, -1);
    }
    var table_options = {
        showRowNumber: true,
        width: "75%",
        height: 130,
    };
    var table_options1 = {
        showRowNumber: true,
        width: "100%",
        height: "100%",
    };
    var chart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        bar: {groupWidth: "75%"},
        colors: ['#3F7FBF', '#004411'],
    };
    var combochart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series:{0:{type:'bars'}},
        series:{
            1:{type: 'bars',targetAxisIndex: 1},
            2 :{type: 'line', targetAxisIndex: 1}
        },
        bar: {groupWidth: "75%"},
        colors: ['#00ff7f', '#4169e1', 'red'],
    };
    var columnchart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        colors: ['#00ff7f', '#4169e1', 'red','#ee82ee'],
    };
    var options_fullStacked = {
        backgroundColor: '#FAFAFA',
        isStacked: 'percent',
        width: '100%',
        height: '100%',
        legend: {position: 'top', maxLines: 3},
        hAxis: {
            minValue: 0,
            maxValue:1,

        },
        colors: ['#00ff7f', '#4169e1', 'red'],
    };
    var combo1chart_options = {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: '100%',
        legend: { position: 'top' },
        displayExactValues: 'true',
        seriesType: 'bars',
        series:{0:{type:'bar'}},
        series:{
            1:{type: 'line'},
            2 :{type: 'line'},
        },
        bar: {groupWidth: "75%"},
        colors: [ '#4169e1', 'red', 'red'],
        bars: {position:'vertical'}

    };

    var myView = new google.visualization.DataView(data_OB);
    myView.setColumns([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    var table = new google.visualization.Table(document.getElementById('12345'));
    table.draw(myView, table_options);

    var myView = new google.visualization.DataView(data_OB);
    myView.setColumns([0, 1]);
    var table = new google.visualization.Table(document.getElementById('5_div'));
    table.draw(myView, table_options1);

    var chart = new google.visualization.ColumnChart(document.getElementById('5chart_div'));
    chart.draw(myView, columnchart_options);

    var chart = new google.visualization.PieChart(document.getElementById('51chart_div'));
    chart.draw(myView, columnchart_options);

    var select = document.querySelector('#s_p4');
    var button = document.querySelector('#click_p4');
    button.addEventListener('click', function () {
        console.log(select.value);
        if (select.value === 'Кількість Публікацій') {
            $('#N_4').empty();
            document.getElementById("N_4").innerHTML =
                '<div class="box1"><h4>Згадування у медіа</h4>\n' +
                '<p>Кількість релевантних запиту публікацій у БД системи за період  t </p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 1]);
            var table = new google.visualization.Table(document.getElementById('5_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.PieChart(document.getElementById('51chart_div'));
            chart.draw(myView, columnchart_options);
            var chart = new google.visualization.ColumnChart(document.getElementById('5chart_div'));
            chart.draw(myView, chart_options);

        } else if (select.value === 'Тональність') {
            $('#N_4').empty();
            document.getElementById("N_4").innerHTML =
                '<div class="box1"><h4>Тональність</h4>\n' +
                '<p>Тональність публікацій — це показник, який використовує аналіз тексту враховуючи його емоційну складову для класифікації згадок про вашу компанію, бренд чи продукт на позитивні, негативні чи нейтральні.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 2, 3, 4]);
            var table = new google.visualization.Table(document.getElementById('5_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ColumnChart(document.getElementById('5chart_div'));
            chart.draw(myView, columnchart_options);
            var chart = new google.visualization.BarChart(document.getElementById('51chart_div'));
            chart.draw(myView, options_fullStacked);

        } else if (select.value === 'MFI') {
            $('#N_4').empty();
            document.getElementById("N_4").innerHTML = '<div class="box1">' +
                '<h4>Індекс прихильності медіа (Media Favourability Index) MFI</h4>\n' +
                '<p>Оцінка сприятливості публікацій про компанію (бренд) з урахуванням тональності повідомлень</p>' +
                '<p>При MFI<1 - негативних публікацій було більше,\n' +
                ' MFI = 1 - кількість позитивних і негативних публікацій рівна,\n' +
                '  MFI>1 позитивні переважають.\n</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 5, 9]);
            var table = new google.visualization.Table(document.getElementById('5_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('5chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0,1, 5, 9]);
            var chart = new google.visualization.ComboChart(document.getElementById('51chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'MV') {
            $('#N_4').empty();
            document.getElementById("N_4").innerHTML = '<div class="box1">' +
                '<h4>Індекс помітності в ЗМІ (Media Visibility) MV</h4>\n' +
                '<p>Характеризує якість наповнення медіа поля у контексті компанії або продукту</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 6, 10]);
            var table = new google.visualization.Table(document.getElementById('5_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('5chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0,1, 6, 10]);
            var chart = new google.visualization.ComboChart(document.getElementById('51chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'MQ') {
            $('#N_4').empty();
            document.getElementById("N_4").innerHTML = '<div class="box1">' +
                '<h4>Індекс якості комунікації (Media Quality) MQ</h4>\n' +
                '<p>Консолідована оцінка якості публікацій щодо об’єкта за період.</p>' +
                '<p>Уможливлює порівняння об’єктів з різним обсягом згадувань у ЗМІ.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 7, 11]);
            var table = new google.visualization.Table(document.getElementById('5_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('5chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 1, 7, 11]);
            var chart = new google.visualization.ComboChart(document.getElementById('51chart_div'));
            chart.draw(myView, combochart_options);

        } else if (select.value === 'NS') {
            $('#N_4').empty();
            document.getElementById("N_4").innerHTML = '<div class="box1">' +
                '<h4>Мережевий репутаційний індекс (Net Sentiment) NS</h4>\n' +
                '<p>Для оцінювання репутації об’єкта у медіапросторі</p>' +
                '<p>Інтервал [-1; 1]. При NS<0 - маємо негативну репутацію, а при NS>0 - позитивну.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 8, 12]);
            var table = new google.visualization.Table(document.getElementById('5_div'));
            table.draw(myView, table_options1);
            var chart = new google.visualization.ComboChart(document.getElementById('5chart_div'));
            chart.draw(myView, chart_options);
            var myView = new google.visualization.DataView(data_OB);
            myView.setColumns([0, 8,13,14]);
            var chart = new google.visualization.ComboChart(document.getElementById('51chart_div'));
            chart.draw(myView, combo1chart_options);
        }
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



