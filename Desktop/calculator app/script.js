 function insert(number) 
 { 
     document.getElementById("result").value = document.getElementById("result").value + number; 
 } 
   
 function answer() 
 { 
     let final = eval(document.getElementById("result").value) 
     document.getElementById("result").value = final 
 } 

 function reset() 
 { 
     document.getElementById("result").value = "." 
 } 

