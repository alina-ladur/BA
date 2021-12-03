google.charts.load('current', {packages: ['corechart','table']});
google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(VisualizationD);
google.charts.setOnLoadCallback(VisualizationD1);



//////////////////Page1.1
function VisualizationD() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Дата');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');

    data.addRows(7);
    for (var i = 0; i < 7; i++) {
        data.setCell(i, 0, arr3[i].Дата);
        data.setCell(i, 1, arr3[i].Позитивні_1);
        data.setCell(i, 2, arr3[i].Нейтральні_1);
        data.setCell(i, 3, arr3[i].Негативні_1);
        data.setCell(i, 4, arr3[i].Позитивні_2);
        data.setCell(i, 5, arr3[i].Нейтральні_2);
        data.setCell(i, 6, arr3[i].Негативні_2);
        data.setCell(i, 7, arr3[i].Позитивні_3);
        data.setCell(i, 8, arr3[i].Нейтральні_3);
        data.setCell(i, 9, arr3[i].Негативні_3);
        data.setCell(i, 10, arr3[i].Позитивні_4);
        data.setCell(i, 11, arr3[i].Нейтральні_4);
        data.setCell(i, 12, arr3[i].Негативні_4);
        data.setCell(i, 13, arr3[i].Позитивні_5);
        data.setCell(i, 14, arr3[i].Нейтральні_5);
        data.setCell(i, 15, arr3[i].Негативні_5);
        data.setCell(i, 16, arr3[i].Позитивні_6);
        data.setCell(i, 17, arr3[i].Нейтральні_6);
        data.setCell(i, 18, arr3[i].Негативні_6);
        data.setCell(i, 19, arr3[i].Позитивні_7);
        data.setCell(i, 20, arr3[i].Нейтральні_7);
        data.setCell(i, 21, arr3[i].Негативні_7);
        data.setCell(i, 22, arr3[i].Позитивні_8);
        data.setCell(i, 23, arr3[i].Нейтральні_8);
        data.setCell(i, 24, arr3[i].Негативні_8);
        data.setCell(i, 25, arr3[i].Позитивні_9);
        data.setCell(i, 26, arr3[i].Нейтральні_9);
        data.setCell(i, 27, arr3[i].Негативні_9);
        data.setCell(i, 28, arr3[i].Позитивні_10);
        data.setCell(i, 29, arr3[i].Нейтральні_10);
        data.setCell(i, 30, arr3[i].Негативні_10);
    }

    var options = {
        hAxis: {title: 'Дата', titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        width: '100%',
        height: 530,
        legend: {position: 'top', maxLines: '3'},
        chartArea: {width: '80%', height: '60%'},
        backgroundColor: '#FAFAFA',
    };

    var options1 = {
        legend: {position: 'top', maxLines: '3'},
        colors: ['#0000FF', '#00FA9A', 'red'],
        backgroundColor: '#FAFAFA',
        chartArea: {width: '100%', height: '90%'},
        height: 530,
        /*is3D: true,*/
    };

    function TonBank (n) {
        var data1 = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Позитивні', arr[n].Позитивні],
            ['Нейтральні', arr[n].Нейтральні],
            ['Негативні', arr[n].Негативні],
        ]);
        return data1;
    }

    var myView = new google.visualization.DataView(data);
    myView.setColumns([0, 1, 2, 3]);
    var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
    chart.draw(myView, options);
    var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
    chart.draw(TonBank(0), options1);

    var select = document.querySelector('#s_p1');
    var button = document.querySelector('#click_p1');
    button.addEventListener('click', function () {
        console.log(select.value);
        if (select.value == 'ПриватБанк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 1, 2, 3]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(0), options1);
        } else if (select.value == 'РайффайзенБанкАваль') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 4, 5, 6]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(1), options1);

        } else if (select.value == 'Сбербанк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 7, 8, 9]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(2), options1);

        } else if (select.value == 'ПУМБ') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 10, 11, 12]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(3), options1);

        } else if (select.value == 'УніверсалБанк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 13, 14, 15]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(4), options1);

        } else if (select.value == 'Альфа-Банк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 16, 17, 18]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(5), options1);

        } else if (select.value == 'ОТП_Банк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 19, 20, 21]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(6), options1);

        }else if (select.value == 'Укрексімбанк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 22, 23, 24]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(7), options1);

        }else if (select.value == 'Укргазбанк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 25, 26, 27]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(8), options1);

        }else if (select.value == 'Сітібанк') {
            $('#tab_d_div').empty();
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 28, 29, 30]);
            var chart = new google.visualization.AreaChart(document.getElementById('tab_d_div'));
            chart.draw(myView, options);
            $('#tab_d1_div').empty();
            var chart = new google.visualization.PieChart(document.getElementById('tab_d1_div'));
            chart.draw(TonBank(9), options1);
        }
    })
}

/////////////////////////Page1.2
function VisualizationD1() {
    var data_KP = new google.visualization.DataTable();
    data_KP.addColumn('string', 'Дата');
    data_KP.addColumn('number', 'ПриватБанк');
    data_KP.addColumn('number', 'РайффайзенБанкАваль');
    data_KP.addColumn('number', 'СБЕРБАНК');
    data_KP.addColumn('number', 'ПУМБ');
    data_KP.addColumn('number', 'УНІВЕРСАЛ БАНК');
    data_KP.addColumn('number', 'АЛЬФА-БАНК');
    data_KP.addColumn('number', 'ОТП-БАНК');
    data_KP.addColumn('number', 'Укрексімбанк');
    data_KP.addColumn('number', 'УКРГАЗБАНК');
    data_KP.addColumn('number', 'СІТІБАНК');

    data_KP.addRows(7);
    for (var i = 0; i < 7; i++) {
        data_KP.setCell(i, 0, arr_KP[i].Дата);
        data_KP.setCell(i, 1, arr_KP[i].ПриватБанк);
        data_KP.setCell(i, 2, arr_KP[i].РайффайзенБанкАваль);
        data_KP.setCell(i, 3, arr_KP[i].СБЕРБАНК);
        data_KP.setCell(i, 4, arr_KP[i].ПУМБ);
        data_KP.setCell(i, 5, arr_KP[i].УНІВЕРСАЛ_БАНК);
        data_KP.setCell(i, 6, arr_KP[i].АЛЬФА_БАНК);
        data_KP.setCell(i, 7, arr_KP[i].ОТП_БАНК);
        data_KP.setCell(i, 8, arr_KP[i].Укрексімбанк);
        data_KP.setCell(i, 9, arr_KP[i].УКРГАЗБАНК);
        data_KP.setCell(i, 10, arr_KP[i].СІТІБАНК);
    }

    var data_MFI = new google.visualization.DataTable();
    data_MFI.addColumn('string', 'Дата');
    data_MFI.addColumn('number', 'ПриватБанк');
    data_MFI.addColumn('number', 'РайффайзенБанкАваль');
    data_MFI.addColumn('number', 'СБЕРБАНК');
    data_MFI.addColumn('number', 'ПУМБ');
    data_MFI.addColumn('number', 'УНІВЕРСАЛ БАНК');
    data_MFI.addColumn('number', 'АЛЬФА-БАНК');
    data_MFI.addColumn('number', 'ОТП-БАНК');
    data_MFI.addColumn('number', 'Укрексімбанк');
    data_MFI.addColumn('number', 'УКРГАЗБАНК');
    data_MFI.addColumn('number', 'СІТІБАНК');

    data_MFI.addRows(7);
    for (var i = 0; i < 7; i++) {
        data_MFI.setCell(i, 0, arr_MFI[i].Дата);
        data_MFI.setCell(i, 1, arr_MFI[i].ПриватБанк);
        data_MFI.setCell(i, 2, arr_MFI[i].РайффайзенБанкАваль);
        data_MFI.setCell(i, 3, arr_MFI[i].СБЕРБАНК);
        data_MFI.setCell(i, 4, arr_MFI[i].ПУМБ);
        data_MFI.setCell(i, 5, arr_MFI[i].УНІВЕРСАЛ_БАНК);
        data_MFI.setCell(i, 6, arr_MFI[i].АЛЬФА_БАНК);
        data_MFI.setCell(i, 7, arr_MFI[i].ОТП_БАНК);
        data_MFI.setCell(i, 8, arr_MFI[i].Укрексімбанк);
        data_MFI.setCell(i, 9, arr_MFI[i].УКРГАЗБАНК);
        data_MFI.setCell(i, 10, arr_MFI[i].СІТІБАНК);
    }
    var data_MV = new google.visualization.DataTable();
    data_MV.addColumn('string', 'Дата');
    data_MV.addColumn('number', 'ПриватБанк');
    data_MV.addColumn('number', 'РайффайзенБанкАваль');
    data_MV.addColumn('number', 'СБЕРБАНК');
    data_MV.addColumn('number', 'ПУМБ');
    data_MV.addColumn('number', 'УНІВЕРСАЛ БАНК');
    data_MV.addColumn('number', 'АЛЬФА-БАНК');
    data_MV.addColumn('number', 'ОТП-БАНК');
    data_MV.addColumn('number', 'Укрексімбанк');
    data_MV.addColumn('number', 'УКРГАЗБАНК');
    data_MV.addColumn('number', 'СІТІБАНК');

    data_MV.addRows(7);
    for (var i = 0; i < 7; i++) {
        data_MV.setCell(i, 0, arr_MV[i].Дата);
        data_MV.setCell(i, 1, arr_MV[i].ПриватБанк);
        data_MV.setCell(i, 2, arr_MV[i].РайффайзенБанкАваль);
        data_MV.setCell(i, 3, arr_MV[i].СБЕРБАНК);
        data_MV.setCell(i, 4, arr_MV[i].ПУМБ);
        data_MV.setCell(i, 5, arr_MV[i].УНІВЕРСАЛ_БАНК);
        data_MV.setCell(i, 6, arr_MV[i].АЛЬФА_БАНК);
        data_MV.setCell(i, 7, arr_MV[i].ОТП_БАНК);
        data_MV.setCell(i, 8, arr_MV[i].Укрексімбанк);
        data_MV.setCell(i, 9, arr_MV[i].УКРГАЗБАНК);
        data_MV.setCell(i, 10, arr_MV[i].СІТІБАНК);
    }
    var data_MQ = new google.visualization.DataTable();
    data_MQ.addColumn('string', 'Дата');
    data_MQ.addColumn('number', 'ПриватБанк');
    data_MQ.addColumn('number', 'РайффайзенБанкАваль');
    data_MQ.addColumn('number', 'СБЕРБАНК');
    data_MQ.addColumn('number', 'ПУМБ');
    data_MQ.addColumn('number', 'УНІВЕРСАЛ БАНК');
    data_MQ.addColumn('number', 'АЛЬФА-БАНК');
    data_MQ.addColumn('number', 'ОТП-БАНК');
    data_MQ.addColumn('number', 'Укрексімбанк');
    data_MQ.addColumn('number', 'УКРГАЗБАНК');
    data_MQ.addColumn('number', 'СІТІБАНК');

    data_MQ.addRows(7);
    for (var i = 0; i < 7; i++) {
        data_MQ.setCell(i, 0, arr_MQ[i].Дата);
        data_MQ.setCell(i, 1, arr_MQ[i].ПриватБанк);
        data_MQ.setCell(i, 2, arr_MQ[i].РайффайзенБанкАваль);
        data_MQ.setCell(i, 3, arr_MQ[i].СБЕРБАНК);
        data_MQ.setCell(i, 4, arr_MQ[i].ПУМБ);
        data_MQ.setCell(i, 5, arr_MQ[i].УНІВЕРСАЛ_БАНК);
        data_MQ.setCell(i, 6, arr_MQ[i].АЛЬФА_БАНК);
        data_MQ.setCell(i, 7, arr_MQ[i].ОТП_БАНК);
        data_MQ.setCell(i, 8, arr_MQ[i].Укрексімбанк);
        data_MQ.setCell(i, 9, arr_MQ[i].УКРГАЗБАНК);
        data_MQ.setCell(i, 10, arr_MQ[i].СІТІБАНК);
    }
    var data_NS = new google.visualization.DataTable();
    data_NS.addColumn('string', 'Дата');
    data_NS.addColumn('number', 'ПриватБанк');
    data_NS.addColumn('number', 'РайффайзенБанкАваль');
    data_NS.addColumn('number', 'СБЕРБАНК');
    data_NS.addColumn('number', 'ПУМБ');
    data_NS.addColumn('number', 'УНІВЕРСАЛ БАНК');
    data_NS.addColumn('number', 'АЛЬФА-БАНК');
    data_NS.addColumn('number', 'ОТП-БАНК');
    data_NS.addColumn('number', 'Укрексімбанк');
    data_NS.addColumn('number', 'УКРГАЗБАНК');
    data_NS.addColumn('number', 'СІТІБАНК');

    data_NS.addRows(7);
    for (var i = 0; i < 7; i++) {
        data_NS.setCell(i, 0, arr_NS[i].Дата);
        data_NS.setCell(i, 1, arr_NS[i].ПриватБанк);
        data_NS.setCell(i, 2, arr_NS[i].РайффайзенБанкАваль);
        data_NS.setCell(i, 3, arr_NS[i].СБЕРБАНК);
        data_NS.setCell(i, 4, arr_NS[i].ПУМБ);
        data_NS.setCell(i, 5, arr_NS[i].УНІВЕРСАЛ_БАНК);
        data_NS.setCell(i, 6, arr_NS[i].АЛЬФА_БАНК);
        data_NS.setCell(i, 7, arr_NS[i].ОТП_БАНК);
        data_NS.setCell(i, 8, arr_NS[i].Укрексімбанк);
        data_NS.setCell(i, 9, arr_NS[i].УКРГАЗБАНК);
        data_NS.setCell(i, 10, arr_NS[i].СІТІБАНК);
    }

    var options = {
        curveType: 'function',
        legend: { position: 'right' },
        displayExactValues: 'true',
        height: 530,
        chartArea: { left:50,top:5,width: '80%', height: '95%'},
        backgroundColor: '#FAFAFA',
        focusTarget:'category',
    };
    var table_options = {
        showRowNumber: true,
        width: "100%",
        height: "100%"
    };
    var barchart_options = {
        backgroundColor: '#FAFAFA',
        /*width: 700,
        height: 600,*/
        chartArea: {left:50,top:5,width: '80%', height: '95%'},
        bar: { groupWidth: '75%' },
        legend: { position: 'right', maxLines: "20" },
        height: 530,
        focusTarget:'category',
    };

    function Bank(e){
        var select1 = document.querySelector('#bank');
        if(select1.value == "All"){
            e.setColumns([0,1,2,3,4,5,6,7,8,9,10]);
        }
        if(select1.value == "ПриватБанк"){
            e.setColumns([0,1]);
        }
        if(select1.value == "РайффайзенБанкАваль"){
            e.setColumns([0,2]);

        }
        if(select1.value == "Сбербанк"){
            e.setColumns([0,3]);
        }
        if(select1.value == "ПУМБ"){
            e.setColumns([0,4]);
        }
        if(select1.value == "УніверсалБанк"){
            e.setColumns([0,5]);
        }
        if(select1.value == "Альфа-Банк"){
            e.setColumns([0,6]);
        }
        if(select1.value == "ОТП_Банк"){
            e.setColumns([0,7]);
        }
        if(select1.value == "Укрексімбанк"){
            e.setColumns([0,8]);
        }
        if(select1.value == "Укргазбанк"){
            e.setColumns([0,9]);
        }
        if(select1.value == "Сітібанк"){
            e.setColumns([0,10]);
        }
    }

    var chart = new google.visualization.ColumnChart(document.getElementById('tab_kp_div'));
    chart.draw(data_KP, barchart_options);
    var chart = new google.visualization.LineChart(document.getElementById('tab_kp1_div'));
    chart.draw(data_KP, options);

    var select = document.querySelector('#s1_p1');
    var button = document.querySelector('#click1_p1');
    button.addEventListener('click', function () {
        console.log(select.value);
        if (select.value == 'Кількість Публікацій') {
            var myView=new google.visualization.DataView(data_KP);
            Bank(myView);
            $('#tab_kp_div').empty();
            $('#name').empty();
            var value = $('#bank option:selected').text();
            $('#name').append('<h2>'+'Кількість Публікацій '+value+'</h2>');

            var chart = new google.visualization.ColumnChart(document.getElementById('tab_kp_div'));
            chart.draw(myView, barchart_options);
            var chart = new google.visualization.LineChart(document.getElementById('tab_kp1_div'));
            chart.draw(myView, options);

        } else if (select.value == 'MFI') {
            var myView=new google.visualization.DataView(data_MFI);
            Bank(myView);
            $('#tab_kp_div').empty();
            $('#name').empty();
            var value = $('#bank option:selected').text();
            $('#name').append('<h2>'+'Індекс прихильності медіа (Media Favourability Index) MFI '+value+'</h2>');

            var chart = new google.visualization.ColumnChart(document.getElementById('tab_kp_div'));
            chart.draw(myView, barchart_options);
            var chart = new google.visualization.LineChart(document.getElementById('tab_kp1_div'));
            chart.draw(myView, options);

        } else if (select.value == 'MV') {
            var myView=new google.visualization.DataView(data_MV);
            Bank(myView);
            $('#tab_kp_div').empty();
            $('#name').empty();
            var value = $('#bank option:selected').text();
            $('#name').append('<h2>'+'Індекс помітності в ЗМІ (Media Visibility) MV '+value+'</h2>');


            var chart = new google.visualization.ColumnChart(document.getElementById('tab_kp_div'));
            chart.draw(myView, barchart_options);
            var chart = new google.visualization.LineChart(document.getElementById('tab_kp1_div'));
            chart.draw(myView, options);
        } else if (select.value == 'MQ') {
            var myView=new google.visualization.DataView(data_MQ);
            Bank(myView);
            $('#tab_kp_div').empty();
            $('#name').empty();
            var value = $('#bank option:selected').text();
            $('#name').append('<h2>'+'Індекс якості комунікації (Media Quality) MQ '+value+'</h2>');


            var chart = new google.visualization.ColumnChart(document.getElementById('tab_kp_div'));
            chart.draw(myView, barchart_options);
            var chart = new google.visualization.LineChart(document.getElementById('tab_kp1_div'));
            chart.draw(myView, options);

        } else if (select.value == 'NS') {
            var myView=new google.visualization.DataView(data_NS);
            Bank(myView);
            $('#tab_kp_div').empty();
            $('#name').empty();
            var value = $('#bank option:selected').text();
            $('#name').append('<h2>'+'Мережевий репутаційний індекс (Net Sentiment) NS '+value+'</h2>');


            var chart = new google.visualization.ColumnChart(document.getElementById('tab_kp_div'));
            chart.draw(myView, barchart_options);
            var chart = new google.visualization.LineChart(document.getElementById('tab_kp1_div'));
            chart.draw(myView, options);
        }
    })
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