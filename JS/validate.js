let fnameNode,mobileNode,emailNode,passNode,c_passNode,checkboxNode;
let errorNode1,errorNode2,errorNode3,errorNode4,errorNode5;
$(function(){
     fnameNode=$("#fname");
     mobileNode=$("#contact");
     emailNode=$("#mail");
     passNode=$("#pass");
     c_passNode=$("#confirmpass");
     errorNode1=$("#error1");
     errorNode2=$("#error2");
     errorNode3=$("#error3");
     errorNode4=$("#error4");
     errorNode5=$("#error5");
     checkboxNode=$("#check");
     let array=[errorNode1,errorNode2,errorNode3,errorNode4,errorNode5];
      for(let node of array){
     // node.css('color',"red");
      node.css({color:"red"});
    }
    fnameNode.blur(()=>validate1());
    mobileNode.blur(()=>validate2());
    emailNode.blur(()=>validate3());
    passNode.blur(()=>validate4());
    c_passNode.blur(()=>validate5());
    $("#regForm").submit(()=>validateForm());
    checkboxNode.change(()=>showPassword());
});


function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    return (v1 && v2 && v3 && v4 && v5); 
}

function validate1(){
    let fname=fnameNode.val();
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.html("");
    if(fname===''){
        errorNode1.html("<small>First name is required</small>");
        fnameNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(fname)==false){
        errorNode1.html("<small>First name must have only letters</small>");
        fnameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        fnameNode.css({border:"2px solid green"});
        return true;
    }
}


function validate2(){
    let mobile=mobileNode.val();
    errorNode2.html("");
    let regex=new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if(mobile===''){
        errorNode2.html("<small>Mobile number is required</small>");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode2.html("<small>Mobile number must be 10 digits number</small>");
        mobileNode.css({border:"2px solid red"});
        return false;
    }
    else{
        mobileNode.css({border:"2px solid green"});
        return  true;
    }

}
function validate3(){
    let email=emailNode.val();
    errorNode3.html("");
    if(email===''){
        errorNode3.html("<small>Email is required</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode3.html("<small>Please enter valid email</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else{
        emailNode.css({border:"2px solid green"});
        return true;
    }
}

function validate4(){
    let pass=passNode.val();
    errorNode4.html("");
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode4.html("<small>Password is required</small>");
        passNode.css({border:"2px solid red"});
        return false;
    }
    else if(regx.test(pass)==false){
        errorNode4.html("<small>Password should be 6 to 12 characters long Password should have atleast</small>");
        let ulNode=$('<ul>');
        errorNode4.append(ulNode);
        ulNode.css({fontSize:"10px"});
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let vallue of ar){
            let liNode=$('<li>');
            liNode.text(vallue);
            ulNode.append(liNode);
        }
        passNode.css({border:"2px solid red"});
        return false;
    }
    else{
        passNode.css({border:"2px solid green"});
        return true;
    }
}
function validate5(){
    let cpass=c_passNode.val();
    let pass=passNode.val();
    errorNode5.html("");
    if(cpass===''){
        errorNode5.html("<small>Password is required</small>");
        c_passNode.css({border:"2px solid red"});
        return false;
    }
    else if(cpass!=pass){
        errorNode5.html("<small>Both passwords should match</small>");
        c_passNode.css({border:"2px solid red"});
        return false;
    }
    else{
        c_passNode.css({border:"2px solid green"});
        return true;
    }
}


function showPassword(){
 if(checkboxNode.prop('checked')){
    passNode.attr({type:"text"}); // {} : can add multiple key value pairs
 }else{
    passNode.attr('type',"password"); // short form to add single key value pair
 }
} 