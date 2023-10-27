player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

answer_turn = "player1"
question_turn = "player2"

function send() {
    number_1 = document.getElementById("Number1").value;
    console.log("Number 1 =" + number_1)

    number_2 = document.getElementById("Number2").value;
    console.log("Number 2 =" + number_2)

    answer = parseInt(number_1) * parseInt(number_2)
    
    question_word = "<h4 id='word_display'>" +number_1+ "X" +number_2+ "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick ='check()'>Check</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
    document.getElementById("Number1").type = "hidden";
    document.getElementById("Number2").type = "hidden";
    document.getElementById("Equation Label").hidden = "hidden";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    console.log("answer given =" + get_answer)
    if(get_answer == answer)
    {
        if (answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }       
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn = " + player2_name;
        console.log("Player 2 Questioning")
    }
    else if(question_turn == "player2")
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn = " + player1_name;
        console.log("Player 1 Questioning")
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn = " + player2_name;
        console.log("Player 2 Answering")
    }
    else if(answer_turn == "player2")
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn = " + player1_name;
        console.log("Player 1 Answering")
    }
    document.getElementById("Number1").type = "text";
    document.getElementById("Number2").type = "text";

    document.getElementById("output").innerHTML = "";
    document.getElementById("Equation Label").hidden = "";
}