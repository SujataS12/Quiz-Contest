$(document).ready(function(){

const timeSpan = document.getElementById('timer');
const mins =5;
const now = new Date().getTime();
const deadline = mins * 60 * 1000 + now;


setInterval(() => {
  var currentTime = new Date().getTime();
  var distance = deadline - currentTime;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeSpan.innerHTML = minutes + 'min' + seconds+'s';
 }, 500)
 $("input[type='button']").click(function(){
    
      var count=0;
      var q1 = $("input[name='answer1']:checked").val();
      var q2 = $("input[name='answer2']:checked").val();
      var q3 = $("input[name='answer3']:checked").val();
      var q4 = $("input[name='answer4']:checked").val();
      var q5 = $("input[name='answer5']:checked").val();
      
      if(q1=="ans1_03"){
          count=count+1;
      }
      if(q2=="ans2_03"){
        count=count+1;
      }
      if(q3=="ans3_02"){
        count=count+1;
      }
      if(q4=="ans4_02"){
        count=count+1;
      }
      if(q5=="ans5_02"){
        count=count+1;
      }      
      alert("Your score is "+count+" out of 5");  
  });
  });
