//function buttonClick() {
//    document.getElementById("bigButton").innerText = "You clicked the button didn't you?";
//}

var person;

function buttonClick(id) {
    var element = document.getElementById(id);
    if(element.src == "http://i0.kym-cdn.com/entries/icons/original/000/022/898/827.jpg") {
        element.src = "https://vignette.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110";
    } else {
        element.src = "http://i0.kym-cdn.com/entries/icons/original/000/022/898/827.jpg";
    }
}

function changePerson() {
    var name = document.getElementById("personName").value.replace(/ /g, '');
    var job = document.getElementById("personJob").value.replace(/ /g, '');
    var age = document.getElementById("personAge").value.replace(/ /g, '');

    if(person != null) {
        if ((name != null) && (name != "")) {
            person.name = name;
        }
        if ((job != null) && (job != "")) {
            person.job = job;
        }
        if ((age != null) && (age != "")) {
            person.age = age;
        }
    } else {
        person = {
            name: name,
            job: job,
            age: age,
            quote: "He said \"My name is Elliott\"".toUpperCase()
        }
    }
    getPersonInfo();
}

function string2() {
    document.getElementById("string2").innerHTML = document.getElementById("string2").innerHTML + 1;

}

function arrays1() {
    var el = document.getElementById("arrays1");
    var strings = ["String1", "String2", "String3"];
    el.innerHTML = strings;
    strings.push("String4");
    el.innerHTML = strings;
    strings.splice(strings.length - 1, 1);
    el.innerHTML = strings;

}

function conditionals1() {
    var el = document.getElementById("ageCheck")
    var check;
    if(person != null ) {
        if (person.age >= 20 && person.age <= 40) {
            check = true;
        } else {
            check = false;
        }
        el.innerHTML = "The current person is between 20 and 40 years old? " + check;
    }
}

function iteration1() {
    var el = document.getElementById("iteration1");
    for(var i = 1; i <= 10; i++) {
        el.innerHTML = i;
        //to prove that it works, and should update it but doesnt.
        console.log(i)
    }
}

function getPersonInfo() {
    document.getElementById("personInfo").innerHTML = "Person's name: " + person.name+ ", Job: "+ person.job + ", Age: " + person.age
}

function increaseAge() {
    person.age = +person.age + 1;
    getPersonInfo();
}


function colourButton(id) {

    var element = document.getElementById(id);
    element.style.color = getRandomColor();
    //document.body.style.backgroundColor = getRandomColor();
    document.body.classList.toggle("change");
}

function calculate() {
    var number1 = document.getElementById("squareInput").value;
    document.getElementById("squareOutput").innerHTML = " Input number you want to square, Output: " + number1*number1;
    var sum = +document.getElementById("sumNumber1").value + +document.getElementById("sumNumber2").value + +document.getElementById("sumNumber3").value;
    document.getElementById("sumOutput").innerHTML = " Input 3 numbers, and ill add them up, Output: " + sum;
    string2();
    arrays1();
    conditionals1();
    iteration1();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
