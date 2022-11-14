$('.btn').on('click', function () {
    $('body').css({
        "background-color": "#F7ECDE",
        "font-size": "1.3rem"
    });

    $('h1,h2').css("color", "#B73E3E");


    $('div').css({
        "border": "2px solid",
        "background-color": "#E9DAC1",
        "width": "600px",
        "margin": "50px auto",
        "padding": "20px",
        "text-align": "center"
    });

    $('table').css({
        "display": "inline-block",
        "border-spacing": "10px",
        "text-align": "left"
    });

    $('ul').css("display", "inline-block");
    $('ul').css("text-align", "left");

    $('.btn').css({
        "width": "150px",
        "background-color": "#B73E3E"
    })
})
