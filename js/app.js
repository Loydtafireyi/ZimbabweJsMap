var regions=[
        {
        "region_name": "Mashonaland Central",
        "region_code": "ZWE524",
        "infected": 3059,
        "deaths": 300,
        "recoveries": 78,
        },
        {
        "region_name": "Harare",
        "region_code": "ZWE525",
        "infected":  300,
        "deaths": 30,
        "recoveries": 100,
        },
        {
        "region_name": "Matabeleland North",
        "region_code": "ZWE526",
        "infected": 300,
        "deaths": 30,
        "recoveries": 100,
        },
        {
        "region_name": "Midlands",
        "region_code": "ZWE527",
        "infected": 400,
        "deaths": 36,
        "recoveries": 89,
        },
        {
        "region_name": "Mashonaland East",
        "region_code": "ZWE528",
        "infected": 120,
        "deaths": 30,
        "recoveries": 60,
        },
        {
        "region_name": "Manicaland",
        "region_code": "ZWE529",
        "infected": 50837,
        "deaths": 747,
        "recoveries": 947,
        },
        {
        "region_name": "Matabeleland",
        "region_code": "ZWE530",
        "infected": 7783,
        "deaths": 1008,
        "recoveries": 744,
        },
        {
        "region_name": "Bulawayo",
        "region_code": "ZWE531",
        "infected": 74775,
        "deaths": 84764,
        "recoveries": 746,
        },
        {
        "region_name": "Masvingo",
        "region_code": "ZWE532",
        "infected": 1303,
        "deaths": 201,
        "recoveries": 306,
        },
        {
        "region_name": "Mashonaland West",
        "region_code": "ZWE533",
        "infected": 1000,
        "deaths": 300,
        "recoveries": 500,
        },
        ];


        var temp_array= regions.map(function(item){
        return item.infected;
        });
        var temp_array= regions.map(function(item){
        return item.deaths;
        });
        var temp_array= regions.map(function(item){
        return item.recoveries;
        });
        var highest_value = Math.max.apply(Math, temp_array);

        $(function() {

        for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgb(113, 182, 249' + regions[i].infected/highest_value +')'})
        .data('region', regions[i]);
        }

        $('.map g').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'Infected: ' +  region_data.infected.toLocaleString("en-UK") + '<br>' +
            'Deaths: ' +  region_data.deaths + '<br>' +
            'Recovered: ' +  region_data.recoveries + '<br>' +
            '</div>'
         )
        .appendTo('body');
        })
        .mouseleave(function () {
        $('.info_panel').remove();
        })
        .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-120,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });

});