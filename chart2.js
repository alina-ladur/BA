google.charts.load('current', {packages: ['corechart','table']});
google.charts.load("current", {packages: ["line"]});
google.charts.load('current', {packages: ['corechart','table']});

google.charts.setOnLoadCallback(Visualization);

/////////////////////////////////Page3

function Visualization () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Банк');
    data.addColumn('number', 'Кількість Документів');
    data.addColumn('number', 'Позитивні');
    data.addColumn('number', 'Нейтральні');
    data.addColumn('number', 'Негативні');
    data.addColumn('number', 'MFI');
    data.addColumn('number', 'MV');
    data.addColumn('number', 'MQ');
    data.addColumn('number', 'NS');
    data.addColumn('number', 'AVR_MFI');
    data.addColumn('number', 'AVR_MV');
    data.addColumn('number', 'AVR_MQ');
    data.addColumn('number', 'AVR_NS');
    data.addRows(10);
    for (var i = 0; i < 10; i++) {
        data.setCell(i, 0, arr[i].Банк);
        data.setCell(i, 1, arr[i].КількістьДокументів);
        data.setCell(i, 2, arr[i].Позитивні);
        data.setCell(i, 3, arr[i].Нейтральні);
        data.setCell(i, 4, arr[i].Негативні);
        data.setCell(i, 5, arr[i].MFI);
        data.setCell(i, 6, arr[i].MV);
        data.setCell(i, 7, arr[i].MQ);
        data.setCell(i, 8, arr[i].NS);
        data.setCell(i, 9, arr[i].AVR_MFI);
        data.setCell(i, 10, arr[i].AVR_MV);
        data.setCell(i, 11, arr[i].AVR_MQ);
        data.setCell(i, 12, arr[i].AVR_NS);
    }

    var table_options = {
        showRowNumber: true,
        width: "100%",
        height: 400,
    };
    var chart_options = {
        width: '100%',
        height: 400,
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        bar: {groupWidth: "75%"},
        colors: ['#3F7FBF', '#004411'],
        backgroundColor: '#FAFAFA',
        chartArea: {width: '80%', height: '75%'},
    };
    var columnchart_options = {
        width: '100%',
        height: 400,
        legend: {position: 'top', maxLines: 3},
        /*isStacked: true,*/
        backgroundColor: '#FAFAFA',
        chartArea: {width: '80%', height: '75%'},
    };
    var combochart_options = {
        width: '100%',
        height: 400,
        legend: {position: 'top', maxLines: 3},
        seriesType: 'bars',
        series: {
            3: {type: 'line', color:'#00FA9A'},
            4:{type:'line', color: 'red'}},
        bar: {groupWidth: "75%"},
        colors: ['#3F7FBF', '#FFA500', '#FF69B4'],
        backgroundColor: '#FAFAFA',
        chartArea: {width: '80%', height: '75%'},
    };

    var myView = new google.visualization.DataView(data);
    myView.setColumns([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    var table = new google.visualization.Table(document.getElementById('1_div'));
    table.draw(myView, table_options);
    var myView = new google.visualization.DataView(data);
    myView.setColumns([0, 1]);
    var table = new google.visualization.Table(document.getElementById('2_div'));
    table.draw(myView, table_options);
    var chart = new google.visualization.ColumnChart(document.getElementById('2chart_div'));
    chart.draw(myView, columnchart_options);
    google.visualization.events.addListener(table, 'sort',
        function(event) {
            data.sort([{column: event.column, desc: !event.ascending}]);
            chart.draw(myView, columnchart_options);
        });

    var select = document.querySelector('#s_p3');
    var button = document.querySelector('#click_p3');
    button.addEventListener('click', function () {
        console.log(select.value);
        if (select.value == 'Кількість Публікацій') {
            $('#N').empty();
            document.getElementById("N").innerHTML =
                '<div class="box1"><h4>Згадування у медіа</h4>\n' +
                '<p>Кількість публікацій про компанію, її спікерів, продукти. Аналіз згадок демонструє, як добре аудиторії, у тому числі медіа, розуміють, хто ви, ваші переваги та відмінності. Про що говорять конкуренти, яке ставлення до ринку загалом, які ніші для комунікацій залишаються вільними. </p></div>' +
                '</div>';
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 1]);
            var table = new google.visualization.Table(document.getElementById('2_div'));
            table.draw(myView, table_options);
            var chart = new google.visualization.BarChart(document.getElementById('2chart_div'));
            chart.draw(myView, columnchart_options);
            google.visualization.events.addListener(table, 'sort',
                function(event) {
                    data.sort([{column: event.column, desc: !event.ascending}]);
                    chart.draw(myView, columnchart_options);
                });

        } else if (select.value == 'Тональність') {
            $('#N').empty();
            document.getElementById("N").innerHTML =
                '<div class="box1"><h4>Тональність</h4>\n' +
                '<p>Тональність публікацій — це показник, який використовує аналіз тексту враховуючи його емоційну складову для класифікації згадок про вашу компанію, бренд чи продукт на позитивні, негативні чи нейтральні.</p>' +
                '<p>Тональність один із ключових параметрів репутаційного аудиту компанії та медіааналізу конкурентів.</p></div>';
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 2, 3, 4]);
            var table = new google.visualization.Table(document.getElementById('2_div'));
            table.draw(myView, table_options);

            var chart = new google.visualization.ColumnChart(document.getElementById('2chart_div'));
            chart.draw(myView, columnchart_options);
            google.visualization.events.addListener(table, 'sort',
                function(event) {
                    data.sort([{column: event.column, desc: !event.ascending}]);
                    chart.draw(myView, columnchart_options);
                });
        } else if (select.value == 'MFI') {
            $('#N').empty();
            document.getElementById("N").innerHTML = '<div class="box1">' +
                '<h4>Індекс прихильності медіа (Media Favourability Index) MFI</h4>\n' +
                '<p>Індекс прихильності медіа, побудований на співвідношенні позитиву до негативу. Якщо кількість позитивних публікацій за вибраний період більша, то MFI> 1, якщо навпаки - більш негативна, то MFI <1.</p>' +
                '<p>Метрика показує не тільки як співвідносяться позитивні, і негативні публікації між собою, а й те, як вони між собою поєднуються і що отримуємо в результаті.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 5, 9]);
            var table = new google.visualization.Table(document.getElementById('2_div'));
            table.draw(myView, table_options);

            var chart = new google.visualization.ComboChart(document.getElementById('2chart_div'));
            chart.draw(myView, chart_options);

        } else if (select.value == 'MV') {
            $('#N').empty();
            document.getElementById("N").innerHTML = '<div class="box1">' +
                '<h4>Індекс помітності в ЗМІ (Media Visibility) MV</h4>\n' +
                '<p>Характеризує якість наповнення медіа поля у контексті компанії або продукту, базується на індивідуальній оцінці кожної публікації в медіа, чи публікації в соцмережах в залежності від вхідних даних: тип ЗМІ, тон публікації і т.д. </p>' +
                '<p>Позитивна тональність публікації підвищує рейтинг, негативна – знижує. В основі розрахунку лежить система коефіцієнтів. Позитивні по тональності публікації оцінюються в 2 бали, нейтральні в 1, негативні – (-2).</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 6, 10]);
            var table = new google.visualization.Table(document.getElementById('2_div'));
            table.draw(myView, table_options);

            var chart = new google.visualization.ComboChart(document.getElementById('2chart_div'));
            chart.draw(myView, chart_options);
        } else if (select.value == 'MQ') {
            $('#N').empty();
            document.getElementById("N").innerHTML = '<div class="box1">' +
                '<h4>Індекс якості комунікації (Media Quality) MQ</h4>\n' +
                '<p>Надає консолідовану оцінку якості публікацій щодо об’єкта, уможливлює порівняння об’єктів з різним обсягом згадувань у ЗМІ.</p>' +
                '<p>Високе значення MQ показує що компанія активно формує публічний імідж: публікації в основному позитивні або нейтральні, ЗМІ, що згадують бренд, мають велике охоплення. Індекс показує чи накопичує компанія капітал довіри. В період кризи, клієнти, які довіряють компанії, більш схильні залишатися з нею.</p>' +
                '</div>';
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 7, 11]);
            var table = new google.visualization.Table(document.getElementById('2_div'));
            table.draw(myView, table_options);

            var chart = new google.visualization.ComboChart(document.getElementById('2chart_div'));
            chart.draw(myView, chart_options);
        } else if (select.value == 'NS') {
            $('#N').empty();
            document.getElementById("N").innerHTML = '<div class="box1">' +
                '<h4>Мережевий репутаційний індекс (Net Sentiment) NS</h4>\n' +
                '<p>Оцінювання репутації об’єкта у медіапросторі. Кожна публікація оцінюється як позитивна (1), нейтральна (0) або негативна (-1). Індекс обчислюється шляхом віднімання загальної кількості негативних публікацій від загальної кількості позитивних публікацій (Net Sentiment = позитивні – негативні).</p>' +
                '<p>Щоб обчислити % Net Sentiment, цей індекс ділиться на загальну кількість публікацій (позитивних, нейтральних і негативних) за цей період.</p></div>' +
                '</div>';
            var myView = new google.visualization.DataView(data);
            myView.setColumns([0, 8, 12]);
            var table = new google.visualization.Table(document.getElementById('2_div'));
            table.draw(myView, table_options);

            var chart = new google.visualization.ComboChart(document.getElementById('2chart_div'));
            chart.draw(myView, chart_options);
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
