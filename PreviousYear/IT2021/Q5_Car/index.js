$('.btn').on('click', function(e) {
    e.preventDefault();
    data = $('input');
    let manufacturer = data[0].value;
    let model = data[1].value;
    let year = data[2].value;
    let fuelType = data[3].value;
    let color = data[4].value;
    let seatingCapacity = data[5].value;
    let cubicCapacity = data[6].value;

    let carObj = {
        manufacturer: manufacturer,
        model: model,
        year: year,
        fuelType: fuelType,
        color: color,
        seatingCapacity: seatingCapacity,
        cubicCapacity: cubicCapacity
    }
    console.log(carObj);

    let jsonObj = JSON.stringify(carObj);
    console.log(jsonObj);
});