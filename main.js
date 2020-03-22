//COMP-1073 Module 4 Lab
//Alex Blom - 867295
//3/21/2020

let requestURL = 'https://alexblom89.github.io/Module4Lab/weird.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let weirdDeal = request.response;
    console.log(weirdDeal);
    weirdItems(weirdDeal);
};

function weirdItems(jsonObj) {

    let weirdItems =jsonObj.weirdItems;

    for(let i = 0; i < weirdItems.length; i++) {

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let section = document.querySelector('section');
        img.setAttribute('src', 'https://alexblom89.github.io/Module4Lab/resources/' + weirdItems[i].image);
        img.setAttribute('alt', weirdItems[i].image);
        h2.textContent = weirdItems[i].name;
        p1.textContent = 'Price' + weirdItems[i].price;
        p2.textContent = 'Size' + weirdItems[i].size;
        p3.texContent = 'Details' + weirdItems[i].details;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);

    }
}

function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function() {
        callback(xhr.response);
    };
    xhr.send();
}

loadAsset('')