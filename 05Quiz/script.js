document.addEventListener('DOMContentLoaded' , () => {
    const questions = [
        {
            questions: "Which is The Most Highest Shiva Temple in the World?",
            choices: ["Tungnath" , "Kedarnath" , "Himalaya" , "Badrinath"],
            answer: "Tungnath",
        },
        {
            questions: "Where is The Most Highest Shiva Temple located?",
            choices: ["Chopta" , "Uttarkashi" , "Dehradun" , "Ladakh"],
            answer: "Chopta",
        },{
            questions: "Who written Shiv Tandav Stotaram?",
            choices: ["Lord Ram" , "Shiva" , "Ravan" , "Brahma"],
            answer: "Ravan",
        }
    ]



    const questionContainer = document.getElementById("question-container")
    const questionText = document.getElementById("question-text")
    const choiceList = document.getElementById("choices-list")
    const startBtn = document.getElementById("start-btn")
    const nextBtn = document.getElementById("next-btn")
    const resultContainer = document.getElementById("result-container")
    const scoreDisplay = document.getElementById("score")
    const restartBtn = document.getElementById("restart-btn")


    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click' , startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    })
    restartBtn.addEventListener('click' , () => {
        currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
    })

    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion(){
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].questions;
        choiceList.textContent = ""  //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click' , () => selectAnswer(choice))
            choiceList.appendChild(li)

        })
    }

    function selectAnswer(choice){
        if(choice === questions[currentQuestionIndex].answer){
            score++;
        }
        nextBtn.classList.remove('hidden');
        
    }

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}`

    }
    

})