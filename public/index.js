const questionBank =[
    {
        ques: "Q1: What is the full form of CSS?",
        1: "Cascading Style Sheets",
        2: "Creating Style Sheets",
        3: "Cascading Super Style",
        4: "Considering Style Sheet",
        ans: "ans1"
    },

    {
        ques: "Q2: The first tag in a HTML document-",
        1: "html",
        2: "<!DOCTYPE>",
        3: "head",
        4: "body",
        ans: "ans2"
    },

    {
        ques: "Q3: The latest version of HTML-",
        1: "HTML2",
        2: "HTML5",
        3: "HTML4",
        4: "HTML3",
        ans: "ans2"
    },

    {
        ques: "Q4: Tag defines client-side script-",
        1: "<src script>",
        2: "<script ssc>",
        3: "<script src>",
        4: "<script>",
        ans: "ans4"
    },

    {
        ques: "Q5: Must include a title for the document-",
        1: "<body>",
        2: "<footer>",
        3: "<head>",
        4: "<script>",
        ans: "ans3"
    },

    {
        ques: "Q6: Tag defines parts of a HTML document-",
        1: "<section>",
        2: "<div>",
        3: "<article>",
        4: "<nav>",
        ans: "ans1"
    },

    {
        ques: "Q7: Hooks to multiple CSS elements-",
        1: "type",
        2: "IDs",
        3: "Classes",
        4: "label",
        ans: "ans3"
    },

    {
        ques: "Q8: URL means-",
        1: "Uniform Research Locator",
        2: "Uniform Resource Locator",
        3: "Uniform Reload Locator",
        4: "Uniform Regenerate Locator",
        ans: "ans2"
    },
    
    {
        ques: "Q9: Which of the following handles website presentation and behavior?",
        1: "HTML & CSS",
        2: "CSS & JavaScript",
        3: "HTML & JavaScript",
        4: "Bootstrap",
        ans: "ans2"
    },

    {
        ques: "Q10: What is the functional difference between HTML checkboxes and radio buttons?",
        1: "Radio permit multiple items to be selected, while checkbox buttons permit at most one",
        2: "Both do the same",
        3: "None of these",
        4: "Checkboxes permit multiple items to be selected, while radio buttons permit at most one",
        ans: "ans4"
    },

    {
        ques: "Q11: What needs to be added to a link that forces the browser to open the link in a new window or tab?",
        1: "target='_new'",
        2: "target='_blank'",
        3: "target='_start'",
        4: "target='_another'",
        ans: "ans2"
    },

    {
        ques: "Q12: What is DOM?",
        1: "Document Oriented Model",
        2: "Design Object Model",
        3: "Document Object Model",
        4: "Data Object Model",
        ans: "ans3"
    },

    {
        ques: "Q13: What is parent tag for an ordered list?",
        1: "ul",
        2: "li",
        3: "ol",
        4: "lo",
        ans: "ans3"
    },

    {
        ques: "Q14: If HTML is used to specify the content of the webpage, then what do you use CSS for?",
        1: "To define the page layout",
        2: "Publish to a web server",
        3: "Allows data to be shared between applications",
        4: "Uniform Regenerate Locator",
        ans: "ans1"
    },

    {
        ques: "Q15: Which of the following Cascading Style Sheets (CSS) 3 filters applies transparency to an image?",
        1: "invert",
        2: "blur",
        3: "grayscale",
        4: "opacity",
        ans: "ans4"
    },

];

const questions = document.querySelector('.ques');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const finalScore = document.querySelector('#score');

let count = 0;
let score = 0;

const getQuestions = () => {
    // console.log(questionBank[0].ques);

    const questionSet = questionBank[count];

    questions.innerText = questionSet.ques;

    // option1.innerText = questionSet.a;
    option1.innerText = questionSet[1];
    option2.innerText = questionSet[2];
    option3.innerText = questionSet[3];
    option4.innerText = questionSet[4];
}

getQuestions();

function getAnswers() {
    let answer;

    answers.forEach((currentAns) => {
        if (currentAns.checked) {
            answer = currentAns.id;
        }
    });
    return answer;
}

function uncheckOption() {
    answers.forEach((currentAns) => {
        currentAns.checked = false
    });
}

submit.addEventListener('click', () => {
    const checkAnswer = getAnswers();
    
    console.log(checkAnswer);

    if (checkAnswer === questionBank[count].ans) {
        score++;
    }
    count++;

    if (checkAnswer == null){
        alert ("Please select your answer first!");
        count--;
    }

    uncheckOption();

    function highestScore(score) {
        return Math.max(score);
    }
    

    if (count < questionBank.length) {
        getQuestions();
    }

    else {
        finalScore.innerHTML = `
        <h3> You Got ${score}/${questionBank.length} 👏 </h3>
        <button class="btn" onclick="window.location.href='index.html'">PLAY AGAIN</button>
        `;

        finalScore.classList.remove('score-box')
    }
});