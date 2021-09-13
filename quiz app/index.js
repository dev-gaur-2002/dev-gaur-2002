const quizData = [
    {
        Question : "Who is the President of india?",
        opt_a : "Narendra Modi",
        opt_b : "Rahul Gandhi",
        opt_c : "Arvind Kejriwal",
        opt_d : "Ramnath kovind",
        answer : "d"
    },
    
    {
        Question : "Who is the Prime-minister of india?",
        opt_a : "Narendra Modi",
        opt_b : "Rahul Gandhi",
        opt_c : "Arvind Kejriwal",
        opt_d : "Ramnath kovind",
        answer : "a"
    },
    
    {
        Question : "What is the capital of India?",
        opt_a : "New Delhi",
        opt_b : "Chennai",
        opt_c : "Mumbai",
        opt_d : "Kolkata",
        answer : "a"
    },
    
    {
        Question : "Who was the first indian to go into space?",
        opt_a : "Rakesh Sharma",
        opt_b : "Kalpana Chawla",
        opt_c : "Narendra Modi",
        opt_d : "Niel Armstrong",
        answer : "a"
    },

    {
        Question : "Who built Taj Mahal?",
        opt_a : "Narendra Modi",
        opt_b : "Shah Jahan",
        opt_c : "Babr",
        opt_d : "Akbar",
        answer : "a"
    }
];
let currentQuestion = 0 ;
let questionEl = document.getElementById('question');
let a = document.getElementById('a'); 
let b = document.getElementById('b'); 
let c = document.getElementById('c'); 
let d = document.getElementById('d'); 
let buttonEl = document.getElementById('submit-btn');
let FormEl = document.getElementById('form');


let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');

let score = 0;

function loadQuiz(){
    questionEl.innerText = quizData[currentQuestion].Question
    a_text.innerText = quizData[currentQuestion].opt_a
    b_text.innerText = quizData[currentQuestion].opt_b
    c_text.innerText = quizData[currentQuestion].opt_c
    d_text.innerText = quizData[currentQuestion].opt_d

    scoreCounter();

}



function deselect(){
        a.checked = false ;
        b.checked = false ;
        c.checked = false ;
        d.checked = false ;
}

function scoreCounter(){
    if(a.checked && quizData[currentQuestion-1].answer==='a')
    score++;
    if(b.checked && quizData[currentQuestion-1].answer==='b')
    score++;
    if(c.checked && quizData[currentQuestion-1].answer==='c')
    score++;
    if(d.checked && quizData[currentQuestion-1].answer==='d')
    score++;    
}

function dontGoAhead(){
    let count_checked = 0;
    if(!a.checked)
    count_checked++;
    if(!b.checked)
    count_checked++;
    if(!c.checked)
    count_checked++;
    if(!d.checked)
    count_checked++;  
    
    if(count_checked == 4){
        currentQuestion--;
    }
}
loadQuiz();
buttonEl.addEventListener("click" , ()=>{
    
    if(currentQuestion < quizData.length){
        currentQuestion++;
        dontGoAhead();
        loadQuiz();
        deselect();
    }
    else if(currentQuestion === quizData.length){
      FormEl.innerHTML = `<p class = "para" >The quiz is over !!</p>Your score is : ${score}/${quizData.length}</p>`;
    }
   console.log(score);
});