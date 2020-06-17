$(document).ready(function () {
    let flag = 0;
/////////////////////////////////////////////////
    $('#email').blur(function () {
        flag = 0;
        let email = $('#email').val();
        let regEx = /^[a-zA-Z0-9._]+@[a-zA-Z]{2,10}[.]{1}[a-zA-Z]{1,4}$/;
        if (regEx.test(email) == false) {
            $('#emailHelp').html('Invalid Email id ....pls enter a valid one').removeClass('text-muted').css('color','red');
            return;
        }
        let url = "process/signUpAjaxEmail.php?email=" + email;
        $.get(url, function (response) {
            $('#emailHelp').html(response).removeClass('text-muted');
            if (response == "Available Email....") {
                $('#emailHelp').css('color','green');
                flag = 1;
                return;
            }
            $('#emailHelp').css('color','red');
        });
    });
///////////////////////////////////////////////////////
    $('#signUpSubmit').click(function(){
        if(flag==0){
            event.preventDefault();
            return;
        }
    });
////////////////////////////////////////////////////
    let flagL=0;
    $('#emailL').blur(function(){
        flagL=0;
        let email=$('#emailL').val();       
        let url="process/logInAjaxEmail.php?email="+email;
        $.get(url,function(response){
            //alert(response);
            let data=response.split(',');
            if(data[0]=="false"){
                $('#emailHelpL').html("No such user exists").removeClass('text-muted').css('color','red');
                $('#tick').removeClass('fa-check-square').addClass('fa-times-circle').css('color','red');
            }else{
                $('#emailHelpL').html("Registered user").removeClass('text-muted').css('color','green');
                $('#tick').removeClass('fa-times-circle').addClass('fa-check-square').css('color','green');
                $('#prev').css("background-image", `url('uploads/${data[1]}')`);
                flagL=1;
            }
        });
    });
////////////////////////////////////////////////////
    $('#logInSubmit').click(function(){
        if(flagL==0){
            event.preventDefault();
            return;
        }else{
            let email=$('#emailL').val();
            let password=$('#passwordL').val();
            let url="process/logInAjaxBtn.php";
            $.post(url,{password,email},function(data,status){
                $('#logInHelp').html(data);
            });
            event.preventDefault();
        }
    });
/////////////////////////////////////////////////
    $('#emailP').change(function(){
        let email = $('#emailP').val();
        let url = "process/forgotPassAjax.php?email=" + email;
        $.get(url, function (response) {
            $('#passwordP').val(response);
        });
    });
 ////////////////////////////////////////////
    
});