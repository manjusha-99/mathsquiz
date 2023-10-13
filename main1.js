player1_Name = localStorage.getItem("player1_name");
player2_Name = localStorage.getItem("player2_name");

player1_score = 5;
player2_score = 5;
document.getElementById("player1_name").innerHTML = player1_Name + " : " ;
document.getElementById("player2_name").innerHTML = player2_Name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_Name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_Name;

function send(){
    number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) + parseInt(number2);
    console.log(actual_answer);
    
    
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row =   question_number+ input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";                                     
}