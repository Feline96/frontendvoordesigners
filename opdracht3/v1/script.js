console.log('hoi');
var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector('section');
console.log("section", section);
var header = document.querySelector('header');
console.log("header", header);

var genre = document.querySelector(".genre");
var loaderElement = document.querySelector('.loader');



console.log("loadimagesmetXHR");
var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();

request.onload = function () {
    var movies = request.response;
}



////TEST Keydown


 document.onkeydown = function (event){
     
     if (event.keyCode == 70) { // letter F
     var request = new XMLHttpRequest();
         request.open('get', uri);
         request.responseType = 'json';
         request.send();
         console.log("loadimagesmetXHR", request);
         
         request.addEventListener("load", function (){
             var data = request.response;
             console.log("request is geladen: ", request.response);
             
             populateHeader(data);
         });
     }}


        ////TEST Keydown


        function populateHeader(jsonObj) {
            var myH1 = document.createElement('h1');
            myH1.textContent = jsonObj.title;
            section.appendChild(myH1);

            var myPara = document.createElement('p');
            myPara.textContent = jsonObj['plot'];
            section.appendChild(myPara);

            var myImg = document.createElement('img');
            myImg.src = jsonObj['cover'];
            section.appendChild(myImg);
        }

        function showMovies(jsonObj) {
            var recenties = jsonObj['reviews'];

            for (var i = 0; i < recenties.length; i++) {
                var myArticle = document.createElement('article');
                var myH2 = document.createElement('h2');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myList = document.createElement('ul');

                myH2.textContent = 'Recentie ' + recenties[i].id;
                myPara1.textContent = 'Score: ' + recenties[i].score;

                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myList);

                section.appendChild(myArticle);
            }
        }

        //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
        function loadimagesmetXHR() {
            loaderElement.classList.remove('hide');
            var request = new XMLHttpRequest();
            request.open('get', uri);
            request.responseType = 'json';
            //request.responseType = 'text'; // now we're getting a string!
            request.send();

            request.addEventListener("load", function () {
                console.log("request is geladen: ", request.response);
                //als de data geladen is, mag de loader weg:
                loaderElement.classList.add('hide');
                //functie aanroepen om van de data html te maken
                showMovies(request.response);
            });
            //  request.onload = function() {
            //      console.log("request.onload: ",request.response);
            //    }
            request.timeout = 10000; // time in milliseconds
            request.ontimeout = function (e) {
                // XMLHttpRequest timed out. Do something here.
                console.log("ontimeout: " + request.timeout + ", het laden duurt te lang !", e);
            };
            request.onerror = function () {
                console.log('Fetch Error', request.status);
            };
        } //end: function loadimagesmetXHR();


        //loader feedback eerst onzichtbaar maken
        //loaderElement.classList.add('hide');
        //actie
        button = document.querySelector('button'); button.onclick = function () {
            //loaderElement.classList.remove('hide'); //loader wordt zichtbaar
            //this.classList.add('hide'); //button mag weg
            //section.innerHTML = ""; //main leeghalen. just in case
            var movies = request.response;
            loadimagesmetXHR();
            populateHeader(movies[0]);
            showMovies(movies[0]);
            populateHeader(movies[1]);
            showMovies(movies[1]);
            populateHeader(movies[2]);
            showMovies(movies[2]);
            populateHeader(movies[3]);
            showMovies(movies[3]);
            populateHeader(movies[4]);
            showMovies(movies[4]);
            populateHeader(movies[5]);
            showMovies(movies[5]);
            console.log(movies);
        }; //end: button.onclick
