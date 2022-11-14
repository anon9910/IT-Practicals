let data = [
    {
        name: "Jim Corbett National Park",
        state: "Uttrakhand",
        speciality: "Tigers"
    },
    {
        name: "Kaziranga National Park",
        state: "Assam",
        speciality: "Rhinos"
    },
    {
        name: "Asola Bhatti Wildlife Sanctuary",
        state: "Delhi",
        speciality: "Birds"
    },
    {
        name: "Gir National Park",
        state: "Gujarat",
        speciality: "Lions"
    }
]

let btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let index = parseInt(document.querySelector('input#index').value);
    let property = document.querySelector('input#property').value;
    console.log(index, property);
    console.log(data[index][property]);
    output = data[index][property];
    document.querySelector('.output').innerHTML = output;
});