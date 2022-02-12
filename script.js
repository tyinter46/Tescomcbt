// function submitAndStart () {
//   e.preventDefault()
//   var username = document.getElementById("userName").value 
//  var ogNumber = document.getElementById("ognumber").value
//   sessionStorage.setItem("username", username)
//   sessionStorage.setItem("ogNumber", ogNumber)
//   location.href.endsWith("tescomcbtor.html")
//   }



if (    location.href.endsWith("tescomcbtor.html")) {
   var username = prompt("Please input your name");
  var ogNumber = prompt("Please input your OgNumber")

 sessionStorage.setItem("username", username)
 sessionStorage.setItem("ogNumber", ogNumber)
  


 document.getElementById(  "name"  ).innerHTML = `<br>Welcome ${username}  OgNumber: ${ogNumber}`;
let timeleft = 1199;
let minutes = 29;
let seconds = 59;
function timer() { 
 document.getElementById("progressBar").value = timeleft;
 document.getElementById(   "demo" ).innerHTML = `<h5>${minutes}  m   ${seconds}  s </h5>`;
 timeleft -= 1;

 //console.log(minutes, seconds, timeleft)

 if (seconds == 0) {
   minutes -= 1;
   seconds = 60;
 }

 if (seconds <= 59 && minutes == 0) {
   document.getElementById("demo").style.color = "red";
   document.getElementById("progressBar").style.accentColor = "red";
 }
 seconds -= 1;

 // If the count down is finished, redirect to another page
 if (minutes == 0 && seconds == 0) {
   clearInterval("timer()");
   location.href = "./resultsubmitted.html";
   // document.getElementById("demo").innerHTML = "Time up";
 }
}
setInterval("timer()", 1000);


const questions = [
  {
    question: "I am question 1",
    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 2",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a correct answer", value: 1 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 3",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a correct answer", value: 1 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 4",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 5",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a  correct answer", value: 1 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 6",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a  correct answer", value: 1 },
  },
  {
    question: "I am question 7",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 8",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 9",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am the wrong answer", value: 0 },
  },
  {
    question: "I am question 10",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 11",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 12",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 13",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 14",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 15",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 16",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 17",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 18",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 19",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 20",

    option1: { choice: "i am the wrong answer", value: 0 },
    option2: { choice: "i am the correct answer", value: 1 },
    option3: { choice: "i am the wrong answer", value: 0 },
    option4: { choice: "i am the wrong answer", value: 0 },
  },
  {
    question: "I am question 21",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 22",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 23",

    option1: { choice: "i am the wrong answer", value: 0 },
    option2: { choice: "i am the correct answer", value: 1 },
    option3: { choice: "i am the wrong answer", value: 0 },
    option4: { choice: "i am the wrong answer", value: 0 },
  },
  {
    question: "I am question 24",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 25",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 26",
    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 27",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a correct answer", value: 1 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 28",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a correct answer", value: 1 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 29",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 30",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a  correct answer", value: 1 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 31",

    option1: { choice: "i am a wrong answer", value: 0 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a  correct answer", value: 1 },
  },
  {
    question: "I am question 32",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 33",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 34",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am the wrong answer", value: 0 },
  },
  {
    question: "I am question 35",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 36",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 37",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 38",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 39",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 40",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 41",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 42",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 43",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 44",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 45",

    option1: { choice: "i am the wrong answer", value: 0 },
    option2: { choice: "i am the correct answer", value: 1 },
    option3: { choice: "i am the wrong answer", value: 0 },
    option4: { choice: "i am the wrong answer", value: 0 },
  },
  {
    question: "I am question 46",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 47",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
  {
    question: "I am question 48",

    option1: { choice: "i am the wrong answer", value: 0 },
    option2: { choice: "i am the correct answer", value: 1 },
    option3: { choice: "i am the wrong answer", value: 0 },
    option4: { choice: "i am the wrong answer", value: 0 },
  },
  {
    question: "I am question 49",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },

  {
    question: "I am question 50",

    option1: { choice: "i am a correct answer", value: 1 },
    option2: { choice: "i am a wrong answer", value: 0 },
    option3: { choice: "i am a wrong answer", value: 0 },
    option4: { choice: "i am a wrong answer", value: 0 },
  },
];


function replace(idOfdivToShow) {
  for (let i = 0; i < questions.length; i++) {
    if (idOfdivToShow == "question" + `${i + 1}`) {
      document.getElementById(idOfdivToShow).style.display = "block";
       
    } else {
      document.getElementById("question" + `${i + 1}`).style.display = "none";
    }
  }
  return document.getElementById(idOfdivToShow).id
}

const arrayOfFormattedQuestions = [];
for (let i = 0; i < questions.length; i++) {
 
  const formattedQuestions = `
  <div class = "list group-item"><h2>${questions[i].question  }</h2></div>
  <div class ="radiowrapper">
  <input type = "radio" id= "radio${i + 1}" value = "${questions[i].option1.value}" >
        <label for='radio${i + 1}' ><h3>${ questions[i].option1.choice}</h3></label> 
   </div>
  <div class ="radiowrapper">
  <input type = "radio"  id= "radio${i + 2}"   value = "${questions[i].option2.value}" >
        <label for="radio${i + 2}" ><h3>${questions[i].option2.choice}</h3></label> 
   </div>
  <div class ="radiowrapper">
        <input type = "radio"  id= "radio${i + 3}"  value = "${questions[i].option3.value}" >
        <label for="radio${i + 3}"><h3>${ questions[i].option3.choice}</h3></label> 
  </div> 
  <div class ="radiowrapper">
        <input type = "radio"  id= "radio${i + 4}"  value = "${questions[i].option4.value}"  >
        <label for="radio${i + 4}"><h3>${ questions[i].option4.choice}</h3></label> 
  </div>
        `;
 
  arrayOfFormattedQuestions.push(formattedQuestions);

}



const arrayOfQuestionsDiv = [];

for (let i = 0; i < questions.length; i++) {
  arrayOfQuestionsDiv.push(document.getElementById("question" + `${i + 1}`));
}

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}
// swap function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let slot = arr.length - 1; slot > 0; slot--) {
    let element = randomIndex(slot + 1);
    swap(arr, element, slot);
  }
  return arr;
}
shuffle(arrayOfFormattedQuestions);

for (let i = 0; i < arrayOfQuestionsDiv.length; i++) {
  arrayOfQuestionsDiv[i].innerHTML = arrayOfFormattedQuestions[i];
}

//put all radio buttons in an array called inputs
const inputs = document.getElementsByTagName("input");
const inputArray = [...inputs]
//assign the same names to all radio button inputs  per question
let k= 1
let i = 0
while (i < 200){
            for (let j =0; j< 4; j++){ 
   inputArray[i].name = `radiobutton${k}`
     // console.log(inputArray[i].name)
       i++
   }
     k++
}




function next () {

  for (let questionDiv of arrayOfQuestionsDiv){
    if (questionDiv.style.display  )
    console.log(questionDiv)
  }
 
}
next()






// end of if statement
 }

document.addEventListener('DOMContentLoaded', event =>{
  const radioElems = document.querySelectorAll('input[type = "radio"')
  radioElems.forEach((radioElem ) => radioElem.addEventListener('change', ()=>{
    count()
    }))
  const count = () => {
    let score = 0
    document.querySelectorAll('input[type="radio"]:checked').forEach(radioChecked =>{
      score += parseInt(radioChecked.value, 10)
       sessionStorage.setItem("score", score)

          })
  }
     
})




console.log(username)
console.log(ogNumber)

function checkResult() {
  const password = prompt("please enter password");
  if (password === "TES") {
    location.href = "./resultspage.html";
 //document.getElementById("score").innerHTML = sessionStorage.getItem("score")
 } else {
   return
       }

}


function submit() {
  if (confirm("Are you sure you want to submit?") == true) {
   
      location.href = "./answerssubmitted.html";
      
  }
}




// function focusOnAParticularDiv(divId)
// {
//     switch(divId)    {
//         case 'next1':
           
//             // document.getElementById('question2').style.display = 'none';
//             // document.getElementById('question3').style.display = 'none';
//             // document.getElementById('question4').style.display = 'none';
//             // document.getElementById('question5').style.display = 'none';
           
//             for (let i = 1; i < 50; i++) {
//             document.getElementById("question" + `${i + 1}`).style.display = "none";
//             document.getElementById("next" + `${i + 1}`).style.display ="none"
//                                           }
//           document.getElementById('question' + `${i + 1}`).style.display = 'block';
//           document.getElementById("next" + `${i + 1}`).style.display ="block"
//            break;

//         // case 'next2': 

        // for (let i = 1; i < 51 ; i++) {
        //  document.getElementById("question" + `${i + 1}`).style.display =  none;
        //                                                 }
        //      document.getElementById('question2').style.display = 'block';
        //     break;


        // case 'next3':
           
        // for (let i = 1; i < 51 ; i++) {
        //   document.getElementById("question" + `${i + 1}`).style.display = none;
        //                                                  }
        //       document.getElementById('question3').style.display = 'block';
        //      break;
 
//     }
// }







const score = sessionStorage.getItem("score")
console.log(score)
