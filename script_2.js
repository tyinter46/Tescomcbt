// function submitAndStart () {
//   e.preventDefault()
//   var username = document.getElementById("userName").value 
//  var ogNumber = document.getElementById("ognumber").value
//   sessionStorage.setItem("username", username)
//   sessionStorage.setItem("ogNumber", ogNumber)
//   location.href.endsWith("tescomcbtor.html")
//   }



if (    location.href.endsWith("tescomcbtor.html")) {

  const password = prompt("Input password to continue")

  if (password == "DEPARTMENT_OF_IT"){

   var username = prompt("Please input your name");
  var ogNumber = prompt("Please input your OgNumber")
  var fileNumber = prompt("Please input your file number")

 sessionStorage.setItem("username", username)
 sessionStorage.setItem("ogNumber", ogNumber)
 sessionStorage.setItem("fileNumber", fileNumber)
  


 document.getElementById(  "name"  ).innerHTML = `<br><h3>Welcome ${username} || OgNumber: ${ogNumber}</h3>`;
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

const futureDate = new Date
console.log(futureDate.getDay())
const questions = [
  {
    question: "_____________ is the body of rules and regulations governing the rights, duties and obligations of the public servants.",
    option1: { choice: "Public Service Commission", value: 0 },
    option2: { choice: "Public Service Corporation", value: 0 },
    option3: { choice: "Public Service Rules", value: 1 },
    option4: { choice: "Public Service Board", value: 0 },
  },
  {
    question: "Leave Allowance shall be ____________ of Annual Basic Salary",

    option1: { choice: "25%", value: 0 },
    option2: { choice: "10%", value: 1 },
    option3: { choice: "15%", value: 0 },
    option4: { choice: "12%", value: 0 },
  },
  {
    question: "____________ is the official information that must not be disclosed without appropriate permission.",

    option1: { choice: "Circular letter", value: 0 },
    option2: { choice: "Posting instruction letter", value: 0 },
    option3: { choice: "Secrecy", value: 1 },
    option4: { choice: "Query letter", value: 0 },
  },
  {
    question: "______________ specifies the qualification require for a specific post as well as duties.",

    option1: { choice: "Civil Service", value: 0 },
    option2: { choice: "Public Service", value: 0 },
    option3: { choice: "Service Reform", value: 0 },
    option4: { choice: "Schemes of Service", value: 1 },
  },
  {
    question: "PER means?",

    option1: { choice: "Progress Evaluation Report", value: 1 },
    option2: { choice: "Performance Evaluation Report", value: 0 },
    option3: { choice: "Performance Evaluation Record", value: 0 },
    option4: { choice: "Progress Evaluation Record", value: 0 },
  },
  {
    question: "___________ is the act of selecting a qualified candidate for a particular post.",

    option1: { choice: "Evaluation", value: 0 },
    option2: { choice: "Deployment", value: 0 },
    option3: { choice: "Appointment", value: 1 },
    option4: { choice: "Election", value: 0 },
  },
  {
    question: "___________ is the upward movement of an officer from lower post to higher post.",

    option1: { choice: "Confirmation", value: 0 },
    option2: { choice: "Review", value: 0 },
    option3: { choice: "Demotion", value: 0 },
    option4: { choice: "Promotion", value: 1 },
  },
  {
    question: "__________ is the act of compliance with the laid down rules and regulations.",

    option1: { choice: "Misconduct", value: 0 },
    option2: { choice: "Discipline", value: 1 },
    option3: { choice: "Motivation", value: 0 },
    option4: { choice: "Incentive", value: 0 },
  },
  {
    question: "Expatriate Officer means?",

    option1: { choice: "a staff who is expert", value: 0 },
    option2: { choice: "a staff who is exporter", value: 0 },
    option3: { choice: "a staff who is not a Nigerian", value: 1 },
    option4: { choice: "a staff who is Committed", value: 0 },
  },
  {
    question: "All first appointments to the pensionable establishment in posts other than trainee post will be on_________",

    option1: { choice: "Selection", value: 0 },
    option2: { choice: "Recruitment", value: 0 },
    option3: { choice: "Probation", value: 1 },
    option4: { choice: "Allowances", value: 0 },
  },
  {
    question: "_______ is defined as specific act of wrongdoing or improper behaviors, which can be investigated and proved.",

    option1: { choice: "Justice", value: 0 },
    option2: { choice: "Attitude", value: 0 },
    option3: { choice: "Omission", value: 0 },
    option4: { choice: "Misconduct", value: 1 },
  },
  {
    question: "The following medical certificates are used in connection with the sickness of staff except",

    option1: { choice: "Light duty certificate", value: 0 },
    option2: { choice: "Heavy duty certificate", value: 1 },
    option3: { choice: "Excuse duty certificate", value: 0 },
    option4: { choice: "All of the above", value: 0 },
  },
  {
    question: "What is the full meaning of MDA’s",

    option1: { choice: "Missions Development Associations", value: 0 },
    option2: { choice: "Ministry Development Agencies", value: 0 },
    option3: { choice: "Ministries, Departments and Agencies", value: 1 },
    option4: { choice: "Medical Department Awards", value: 0 },
  },
  {
    question: "The following are the major government expenditure except",

    option1: { choice: "Recurrent Expenditure", value: 0 },
    option2: { choice: "Construction Expenditure", value: 1 },
    option3: { choice: "Capital Expenditure ", value: 0 },
    option4: { choice: "None of the above", value: 0 },
  },
  {
    question: "What is the maturity period for GL.14 to GL.15",

    option1: { choice: "4years", value: 0 },
    option2: { choice: "2years", value: 0 },
    option3: { choice: "5years", value: 0 },
    option4: { choice: "3years", value: 1 },
  },
  {
    question: "There are __________ geographical zones in Nigeria.",

    option1: { choice: "12", value: 0 },
    option2: { choice: "36", value: 0 },
    option3: { choice: "18", value: 0 },
    option4: { choice: "6", value: 1 },
  },
  {
    question: "MFR stands for what in Nigeria?",

    option1: { choice: "Ministry Fund and Revenue ", value: 0 },
    option2: { choice: "Mission For Road", value: 0 },
    option3: { choice: "Motivation For Rehabilitation", value: 0 },
    option4: { choice: "Member of the Federal Republic", value: 1 },
  },
  {
    question: "The Eagle in the Coat of Arms of Nigeria represents?",

    option1: { choice: "Power", value: 0 },
    option2: { choice: "Peace", value: 0 },
    option3: { choice: "Strength", value: 0 },
    option4: { choice: "Dignity", value: 1 },
  },

  {
    question: "The First Political Party in Nigeria is?",

    option1: { choice: "Nigeria National Democratic Party (NNDP)", value: 1 },
    option2: { choice: "National Council of Nigeria and Cameroons (NCNC)", value: 0 },
    option3: { choice: "United Nigeria People’s Party (UNDP)", value: 0 },
    option4: { choice: "Unity Party of Nigeria (UPN)", value: 0 },
  },
  {
    question: "__________is the smallest independent Country in the World. ",

    option1: { choice: "New York City", value: 0 },
    option2: { choice: "Brazil", value: 0 },
    option3: { choice: "Vatican City", value: 1 },
    option4: { choice: "Liberia", value: 0 },
  },
  {
    question: "OFN means",

    option1: { choice: "Operation Feed Nigeria", value: 0 },
    option2: { choice: "Operation For Nigeria", value: 0 },
    option3: { choice: "Operation Feed the Nation", value: 1 },
    option4: { choice: "Operation Feed the Nigeria", value: 0 },
  },

  {
    question: "The First indigenous President of Nigeria is _________ ",

    option1: { choice: "Olusegun Obasanjo", value: 0 },
    option2: { choice: "Dr. Nnamdi Azikiwe", value: 1 },
    option3: { choice: "Tafawa Balewa", value: 0 },
    option4: { choice: "Alhaji Sir Ahmadu Bello", value: 0 },
  },
  {
    question: "The current National Anthem was introduced in_________",

    option1: { choice: "1979", value: 1 },
    option2: { choice: "1966", value: 0 },
    option3: { choice: "1963", value: 0 },
    option4: { choice: "1976", value: 0 },
  },
  {
    question: "FCC means",

    option1: { choice: "Federation Character Commission", value: 0 },
    option2: { choice: "Federal Code of Conduct", value: 0 },
    option3: { choice: "Federal Civil Conduct", value: 0 },
    option4: { choice: "Federal Character Commission", value: 1 },
  },

  {
    question: "The largest Country in World by land mass is_________ ",

    option1: { choice: "Russia", value: 1 },
    option2: { choice: "China", value: 0 },
    option3: { choice: "India", value: 0 },
    option4: { choice: "USA", value: 0 },
  },

  {
    question: "Western Education is the education received in",
    option1: { choice: "Political gathering", value: 0 },
    option2: { choice: "Social gathering", value: 0 },
    option3: { choice: "Schools", value: 1 },
    option4: { choice: "Economical gathering", value: 0 },
  },
  {
    question: "Which of the Naira notes that was introduced in April, 2001",

    option1: { choice: "N100", value: 0 },
    option2: { choice: "N200", value: 0 },
    option3: { choice: "N500", value: 1 },
    option4: { choice: "N1000", value: 0 },
  },
  {
    question: "__________is the most populated Country World.",

    option1: { choice: "India", value: 0 },
    option2: { choice: "China", value: 1 },
    option3: { choice: "Indonesia", value: 0 },
    option4: { choice: "Russia", value: 0 },
  },
  {
    question: "FESTAC was first held in Nigeria in",

    option1: { choice: "1967", value: 0 },
    option2: { choice: "1957", value: 0 },
    option3: { choice: "1977", value: 1 },
    option4: { choice: "1987", value: 0 },
  },
  {
    question: "Ogun State borders with ______State to the South",

    option1: { choice: "Lagos", value: 1 },
    option2: { choice: "Ondo", value: 0 },
    option3: { choice: "Oyo", value: 0 },
    option4: { choice: "Osun", value: 0 },
  },
  {
    question: "Each of the following are Members of the School Based Management Committee (SBMC) except ______",

    option1: { choice: "Principals", value: 0 },
    option2: { choice: "Parents", value: 0 },
    option3: { choice: "Representative of the Ministry", value: 0 },
    option4: { choice: "Philanthropist ", value: 1 },
  },
  {
    question: "Statutory records includes except ",

    option1: { choice: "Attendance Register", value:0 },
    option2: { choice: "Diary", value: 0 },
    option3: { choice: "Student notes", value: 1 },
    option4: { choice: "Visitors book", value: 0 },
  },
  {
    question: "What is the core of the classroom setting in every school?",

    option1: { choice: "Instruction", value: 0 },
    option2: { choice: "Syllabus", value: 0 },
    option3: { choice: "Curriculum", value: 1 },
    option4: { choice: "Research", value: 0 },
  },
  {
    question: "Among the Major schools of learning theories, which see learning in terms of changing what we do?",

    option1: { choice: "Behavioral theories", value: 0 },
    option2: { choice: "Cognitive theories", value: 1 },
    option3: { choice: "Field theories", value: 0 },
    option4: { choice: "Social theories", value: 0 },
  },
  {
    question: "Which of the following processes usually comes first in developing curriculum?",

    option1: { choice: "Identifying learning goals and objectives", value: 1 },
    option2: { choice: "Selection of educational content", value: 0 },
    option3: { choice: "Evaluating educational experiences", value: 0 },
    option4: { choice: "Organization of learning experiences ", value: 0 },
  },
  {
    question: "The Three (3) Domains of Education are:_______________",

    option1: { choice: "Cognitive, Psychomotor, effective", value: 0 },
    option2: { choice: "Cognitive, Psychomotor, Affective", value: 1 },
    option3: { choice: "Psychomotor, Teaching, Learning", value: 0 },
    option4: { choice: "Cognitive, Education, Skills", value: 0 },
  },
  {
    question: "BECE means ________________________",

    option1: { choice: "Basic Education Certification Examination", value: 1 },
    option2: { choice: "Basic Education Curriculum Examination", value: 0 },
    option3: { choice: "Basic Examination Certification Education", value: 0 },
    option4: { choice: "Board Education Certificate Examination", value: 0 },
  },
  {
    question: "The three types of education are __________________",

    option1: { choice: "Formal, teaching, learning", value: 0 },
    option2: { choice: "Formal, informal, non-formal", value: 1 },
    option3: { choice: "Knowledge, learning, understanding", value: 0 },
    option4: { choice: "Teaching, non formal, efficiency", value: 0 },
  },
  {
    question: "Stakeholders in education includes the following except _______________",

    option1: { choice: "AMIS", value: 0 },
    option2: { choice: "NUT", value: 0 },
    option3: { choice: "NLC", value: 1 },
    option4: { choice: "AOPSHON", value: 0 },
  },
  {
    question: "Why is the teacher’s authority important in managing the classroom?",

    option1: { choice: "To motivate the learners to internalize self discipline", value: 1 },
    option2: { choice: "To sow fear of the teachers to make students focus on classroom learning", value: 0 },
    option3: { choice: "To make the student to obey the orders of the teachers", value: 0 },
    option4: { choice: "To coerce the students to behave properly", value: 0 },
  },
  {
    question: "Teachers make effort for learners to discover personal values applicable for life in her lessons. What domain of learning is served in this instance?",

    option1: { choice: "Skills learning", value: 0 },
    option2: { choice: "Cognitive learning", value: 0 },
    option3: { choice: "Affective learning", value: 1 },
    option4: { choice: "Metacognitive learning", value: 0 },
  },
  {
    question: "A teaching cycle is not complete without _____________of learning",

    option1: { choice: "Reviewing", value: 0 },
    option2: { choice: "Recycling", value: 0 },
    option3: { choice: "Planning", value: 0 },
    option4: { choice: "Assessment", value: 1 },
  },
  {
    question: "Features of lesson notes includes the following except",

    option1: { choice: "Topic", value: 0 },
    option2: { choice: "Content", value: 0 },
    option3: { choice: "Assignments", value: 0 },
    option4: { choice: "Log book", value: 1 },
  },

  {
    question: "_______ is a plan that outlines all the learning to be covered in a classroom over a given period of time",

    option1: { choice: "Assignment", value: 0 },
    option2: { choice: "Scheme of work", value: 0 },
    option3: { choice: "Chart", value: 0 },
    option4: { choice: "Topic ", value: 1 },
  },
  {
    question: "What is the full meaning of TSC?",

    option1: { choice: "Teaching Service Commission", value: 1 },
    option2: { choice: "Teaching Service Committee", value: 0 },
    option3: { choice: "Teaching Services Community", value: 0 },
    option4: { choice: "Teaching Same Commission", value: 0 },
  },
  {
    question: " The last level of the cognitive domain is",

    option1: { choice: "Evaluation", value: 1 },
    option2: { choice: "Analysis", value: 0 },
    option3: { choice: "Comprehension", value: 0 },
    option4: { choice: "Knowledge", value: 0 },
  },

  {
    question: "Teacher Bolu conducted a quiz after discussing the topic “item analysis” to get feed back on how much the students learned, which may not be used for grading purposes is classified as a________ ",

    option1: { choice: "Placement assessment", value: 1 },
    option2: { choice: "Summative assessment", value: 0 },
    option3: { choice: "Formative assessment", value: 0 },
    option4: { choice: "Diagnostic assessment", value: 0 },
  },
  {
    question: "To increase the difficulty of a multiple-choice test item, which of the following should be done?",

    option1: { choice: "Make the options homogenous", value: 1 },
    option2: { choice: "Make the item short and clear", value: 0 },
    option3: { choice: "Make it grammatically correct", value: 0 },
    option4: { choice: "Make the options equal in length", value: 0 },
  },
  {
    question: "Which of the following is the main purpose of administering a pre-test and post-test to the students?",

    option1: { choice: "Measure the value of the materials used", value: 0 },
    option2: { choice: "Accustom the students in frequent testing", value: 0 },
    option3: { choice: "Measure gains in learning", value: 1 },
    option4: { choice: "Measure the effectiveness of instruction. ", value: 0 },
  },

  {
    question: "The parents play a vital role in monitoring and evaluation.",

    option1: { choice: "True", value: 0 },
    option2: { choice: "False", value: 1 },
    option3: { choice: "None of the above", value: 0 },
    option4: { choice: "All of the above", value: 0 },
  },
];


function replace(idOfdivToShow) {
  for (let i = 0; i < questions.length; i++) {
   
    if ((idOfdivToShow == "question1" )){
             
        document.getElementById("prev").style.display = "none"
       } else {
        document.getElementById("prev").style.display = "block"
       }
    if ((idOfdivToShow == "question50" )){
             
        document.getElementById("next").style.display = "none"
       } else {
        document.getElementById("next").style.display = "block"
       }
    if (idOfdivToShow == "question" + `${i + 1}`) {
            
      document.getElementById(idOfdivToShow).style.display = "block";
       
    } else {
      document.getElementById("question" + `${i + 1}`).style.display = "none";
    }
   
  }
 
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
  // console.log(arrayOfQuestionsDiv[i].style.display)
}


function next () {
  document.getElementById("prev").style.display = "block"
  for (let i = 1; i < 50; i++) {
  
    while (document.getElementById("question" + `${i }`).style.display == "block"  ){
       document.getElementById("question" + `${i + 1}`).style.display = "block"
        document.getElementById("question" + `${i }`).style.display = "none"
        if (i == 49){
           document.getElementById("next").style.display = "none"
        } 
      
        
        return
  }
 }
}

function prev (){
  document.getElementById("next").style.display = "block"
  
  for (let i = 50; i > 0; i--) {
    while (document.getElementById("question" + `${i }`).style.display == "block"  ){
      document.getElementById("question" + `${i - 1}`).style.display = "block"
       document.getElementById("question" + `${i }`).style.display = "none"
       
       if (i == 2){
          document.getElementById("prev").style.display = "none"
       }
       return
      }
}
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


// let l = 0
//   for (let j=0; j<200; j++) {
//     l++   
//     if (j < 51){
//   inputArray[j].addEventListener("click", ()=>{
//   document.getElementById("button" + `${l}` ).style.backgroundColor ="blue"
  
// })
 
//   } else {
//     break
//   }

//   }
  
  
       
   }  else {
     location.href = "./tescomcbtor.html"
   } 
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


function checkResult() {
  const password = prompt("please enter password");
  if (password === "TSC_ADMIN") {
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


const score = sessionStorage.getItem("score")
console.log(score)
