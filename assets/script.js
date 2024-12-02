
function handleGrade(score, idOfWhereToWrite){

    var grade = "";
    if (score == ""){
        alert("score cannot be empty");
        return false;
    }


if ((score >= 70) && (score <= 100)){
    grade = ("A");
}
else if((score >= 60) && (score <= 69)){
    grade = ("B");
}
else if((score >= 50) && (score < 60)){
    grade = ("C");
}
else if((score >= 45) && (score < 50)){
    grade = ("D");
}
else if((score >= 40) && (score < 45)){
    grade = ("E");
}
else if(score > 100){
    grade = ("invalid");
    alert("invalid score entered");   //once a number more than 100 is entered, the alert box says invalid.. and inputs the grade as invalid//
}
else{
    grade = ("F");
}

document.getElementById(idOfWhereToWrite).value = grade;
}


function getTotal(){
    var english = document.getElementById('english').value;
    var maths = document.getElementById('maths').value;
    var chemistry = document.getElementById('chemistry').value;
    var physics = document.getElementById('physics').value;
    var biology = document.getElementById('biology').value;
    var french = document.getElementById('french').value;

    //validation

    if(chemistry == "" || english == "" || maths == "" || physics == "" || biology == "" || french ==""){
    alert("all fields are required")
    }
    else if((chemistry >=0 && chemistry <=100) && (english >=0 && english <=100 ) && (maths >=0 && maths <=100 ) && (physics >=0 && physics <=100 ) && (biology >=0 && biology <=100 ) && (french >=0 && french <=100 )){


            //calculate total
            var total = Number(english) + Number(chemistry) + Number(maths) + Number(physics) + Number(biology) + Number(french);

            //average

            var average = parseInt(total/6);

            //remark

            var remark = "";
            if(average > 50){
                 remark = "PASSED...PROUD OF YOU!";

                  document.getElementById('remarks').style="color:green; font-weight:bold; font-style:italic";
                document.getElementById('thumbsup').style = 'display: block';
            }
            else{
                remark = "FAILED...YOU DISAPPOINTED YOUR TEACHER!";
                
                document.getElementById('remarks').style="color:red; font-weight:bold; font-style:italic";
                document.getElementById('sad-emoji').style = 'display: block';
               
            }

            //write all of them
            document.getElementById("totalmarks").innerHTML = total;
            document.getElementById("average").innerHTML = average;
            document.getElementById("remarks").innerHTML = remark;
   
        }
        else{
            alert("INVALID SCORE");
        }

    return false;

}