loadButton = document.querySelector('.load-btn');
loadButton.addEventListener('click', loadData);

function loadData() {
    // Create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Prepare the request
    xhr.open('GET', './pets-data.json', true);
    // Send the request
    xhr.send();
    // When response has loaded
    xhr.onload = function () {
        if (xhr.status == 200) {
            petObj = JSON.parse(xhr.responseText);
            console.log(petObj);
            renderData(petObj.pets);
            loadButton.style.visibility = "hidden";
        } else {
            console.log("Error: Server did not respond");
        }
    }
}

function renderData(petArr) {
    outerContainerText = '';
    for (let i = 0; i < petArr.length; i++) {
        innerContainerText = '<div class="inner-container">' +
            '<h2>' + petArr[i].name + '</h2>' +
            '<p>Age: ' + petArr[i].age + '</p>' +
            '<p>Weight: ' + petArr[i].weight + '</p>' +
            '<p>Type: ' + petArr[i].type + '</p>' +
            '<p>Liking: ' + petArr[i].liking + '</p>' +
            '</div>';
        outerContainerText += innerContainerText;
    }
    document.querySelector('div.outer-container').innerHTML = outerContainerText;
}