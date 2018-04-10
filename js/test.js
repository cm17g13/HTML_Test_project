//function buttonClick() {
//    document.getElementById("bigButton").innerText = "You clicked the button didn't you?";
//}

var Person = {
    name: "Tib",
    job: "Programmer",
    age: 25
}

function buttonClick(id) {
    var element = document.getElementById(id);
    if(element.src == "http://i0.kym-cdn.com/entries/icons/original/000/022/898/827.jpg") {
        element.src = "https://vignette.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110";
    } else {
        element.src = "http://i0.kym-cdn.com/entries/icons/original/000/022/898/827.jpg";
    }
}

function changePerson() {
    var name = document.getElementById("personName").value.replace(/ /g,'');
    var job = document.getElementById("personJob").value.replace(/ /g,'');
    var age= document.getElementById("personAge").value.replace(/ /g,'');
    if((name != null) && (name != "")) {
        Person.name = name;
    }
    if((job != null) && (job != "")) {
        Person.job = job;
    }
    if((age != null) && (age != "")) {
        Person.age = age;
    }
    getPersonInfo();
}

function getPersonInfo() {
    document.getElementById("personInfo").innerHTML = "Person's name: " + Person.name+ ", Job: "+ Person.job + ", Age: " + Person.age
}

function increaseAge() {
    Person.age = +Person.age + 1;
    getPersonInfo();
}


function colourButton(id) {

    var element = document.getElementById(id);
    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor();
}

function calculate() {
    var number1 = document.getElementById("squareInput").value;
    document.getElementById("squareOutput").innerHTML = " Input number you want to square, Output: " + number1*number1;
    var sum = +document.getElementById("sumNumber1").value + +document.getElementById("sumNumber2").value + +document.getElementById("sumNumber3").value;
    document.getElementById("sumOutput").innerHTML = " Input 3 numbers, and ill add them up, Output: " + sum;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
