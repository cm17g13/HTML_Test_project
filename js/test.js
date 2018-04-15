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
    var numbers = "";
    for(var i = 1; i <= 10; i++) {
        if(i % 2 === 0) {
            if(numbers.length > 0) {
                console.log(i)
                numbers = numbers + ", " + i;
            } else {
                numbers = i.toString();
            }
            //el.innerHTML = i;
            //to prove that it works, and should update it but doesnt.
        }
    }
    el.innerHTML = numbers;
}

function iteration3(max, string1, string2) {
    for(var i = 1; i <= max; i++) {
        var output = "";
        if(i % 3 == 0) {
            //output = output + string1, to make sure that if string1 is an int, that output is still a string
            output +=string1;
        }
        if(i % 5 == 0) {
            output += string2;
        }
        if(output.length == 0) {
            output = i.toString();
        }
        console.log(output);

    }
}

function iteration4(num, iter) {
    if(iter == undefined) {
        iter = 0;
    }

    console.log("The number is: " + num+ " iterations: " + iter);
    if(num != 1) {
        var remainder = num % 3;
        iter += 1
        if (remainder == 0) {
            num = num / 3;
            iteration4(num, iter);
        } else if (remainder == 1) {
            iteration4(+num - 1, iter);
        } else {
            iteration4(+num + 1, iter);
        }
    }
}

function string4(word, count) {
    if(count == undefined) {
        count = 0;
    }
    if(word.length < 3) {
        console.log("There were " + count + " triple's");
    } else {
        var currentLetter = word[0];

        if(currentLetter == word[1] && currentLetter == word[2]) {
            count = +count + 1;
        }
        string4(word.substring(1, word.length ), count);
    }
}

function paragraph() {
    var el = document.getElementById("newP");
    if(!el) {
        var p = document.createElement("p");
        var t = document.createTextNode(document.getElementById("createPara").value);
        p.appendChild(t);
        p.id = "newP";

        var element = document.getElementById("addPara");
        element.appendChild(p);
    } else {
        el.innerText = document.getElementById("editPara").value;
    }
}

function rektangles(word, width, height) {
    //word length = 4
    //width = 4
    //4 + 3 + 3 + 3 
    let widthDistance = width*(word.length-1) + 1;
    let heightDistance = height*(word.length-1) + 1;


    let grid = new Array(widthDistance);
    for (let i = 0; i < widthDistance; i++) {
        grid[i] = new Array(heightDistance);
    }
   
    let stringWidth1 = makeString(word, width);
    let stringWidth2 = makeString(reverseString(word), width);
    let stringHeight1 = makeString(word, height);
    let stringHeight2 = makeString(reverseString(word), height);


    //0, 3, 6, 9
    //0, word.length - 1, 2*(word.length - 1)
    //R E K T K E R
    //E     K     E
    //K     E     K
    //T K E R E K T 

    for(let i = 0; i < widthDistance; i++) {
        if(i % (2*(word.length - 1)) == 0) {
           grid = fillGrid(grid, stringWidth2, "right", ((widthDistance -1) - i));
        } else if(i % (word.length - 1) == 0) {
           grid = fillGrid(grid, stringWidth1, "right", ((widthDistance -1) - i));
        }
    }

    for(let j = 0; j < heightDistance; j++) {
        if(j % (2*(word.length - 1)) == 0) {
           grid = fillGrid(grid, stringHeight2, "down", ((heightDistance-1) - j));
        } else if(j % (word.length - 1) == 0) {
           grid = fillGrid(grid, stringHeight1, "down", ((heightDistance-1) - j));
        }
    }

    console.log(fillBlanks(grid, widthDistance, heightDistance));
}

function fillGrid(grid, str, direction, location) {
    if(direction == "right") {
        for(let x = 0; x < str.length; x++) {
            grid[x][location] = str[x];
        }
    } else {
        for(let y = 0; y < str.length; y++) {
            grid[location][y] = str[y];
        }
    }
    return grid;
}


function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

function makeString(word, length) {
    let output = word;
    for(let i = 1; i < length; i++) {
        if(i % 2 == 1) {
            output = output + reverseString(word.substring(0, (word.length - 1)));
        } else {
            output = output + word.substring(1, word.length);
        }  
    }
    return output;
}

function fillBlanks(grid, width, height) {
    for(let i = 0; i < width; i++) {
        for(let j = 0; j < height; j++) {
            if(grid[i][j] == null) {
                grid[i][j] = " ";
            }
        }
    }
    return grid;
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
    iteration3(100, "Fizz", "Buzz");
    iteration4(1000);
    //string4("abcXXXabc");
    string4("xxxabyyyycd");
    paragraph();
    rektangles("REKT", 1, 1);

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
