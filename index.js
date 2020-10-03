//Starting Vars
let inputs_values = [];
let inputs2 = [];

//Submit FUnctions
function submit(){
    
    
    for(var i =1;i<=6;i++){
        let name_of_the_input = document.getElementById("para1_input_box_"+i).value;
        if(name_of_the_input !=""){
            inputs_values.push(name_of_the_input);
        }
        
        
    }
    inputs_values.join("."+" ");
    document.getElementById("show_paragraph_1").innerHTML= inputs_values.join("."+" ");
}

function submittwo(){
    for(var i =1;i<=6;i++){
        let name_of_the_input2 = document.getElementById("para2_input_box_"+i).value;
        if(name_of_the_input2 !=""){
            inputs2.push(name_of_the_input2);
        }
        
        
    }
    inputs2.join("."+" ");
    document.getElementById("par2").innerHTML= inputs2.join("."+" ");
}

//Clear Functions - I dont knwow how to otherwise LOL
function clear1(){
    document.getElementById("para1_input_box_1").value = "";
}
function clear2(){
    document.getElementById("para1_input_box_2").value = "";
}
function clear3(){
    document.getElementById("para1_input_box_3").value = "";
}
function clear4(){
    document.getElementById("para1_input_box_4").value = "";
}
function clear5(){
    document.getElementById("para1_input_box_5").value = "";
}
function clear6(){
    document.getElementById("para1_input_box_6").value = "";
}
function clear7(){
    document.getElementById("para2_input_box_1").value = "";
}
function clear8(){
    document.getElementById("para2_input_box_2").value = "";
}
function clear9(){
    document.getElementById("para2_input_box_3").value = "";
}
function clear10(){
    document.getElementById("para2_input_box_4").value = "";
}
function clear11(){
    document.getElementById("para2_input_box_5").value = "";
}
function clear12(){
    document.getElementById("para2_input_box_6").value = "";
}

//And for the clear all
function clearall(){
    document.getElementById("para1_input_box_1").value = "";
    document.getElementById("para1_input_box_2").value = "";
    document.getElementById("para1_input_box_3").value = "";
    document.getElementById("para1_input_box_4").value = "";
    document.getElementById("para1_input_box_5").value = "";
    document.getElementById("para1_input_box_6").value = "";
}
function clearall2(){
    document.getElementById("para2_input_box_1").value = "";
    document.getElementById("para2_input_box_2").value = "";
    document.getElementById("para2_input_box_3").value = "";
    document.getElementById("para2_input_box_4").value = "";
    document.getElementById("para2_input_box_5").value = "";
    document.getElementById("para2_input_box_6").value = "";
}










