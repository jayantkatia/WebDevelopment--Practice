$(document).ready(function(){
    let $user=$('.field input[type=text]');
    $user.focus();
    $user.blur(function(){
        if($user.val()=='')
        {
            $user.next().html('Please fill something....');
            $user.next().css('color','red'); }
         else{
                $user.next().html('');
            }
    });
    let $password=$('.field input[type=password]');
    $password.keyup(function(){                           //note keypress does not works for backspace
        //keydown doesnt solves logic as value entered is rgistered upon key up
        if($password.val().length>8){
            $password.next().html('Strong Password');
            $password.next().addClass("green").removeClass('red');
        }else if($password.val().length>0){
            $password.next().html('Weak Password');
            $password.next().addClass("red").removeClass('green');
        }else{
            $password.next().html('Fill in something');
            $password.next().removeClass(['green','red']);
        }
    });
    $('#eye-btn').mousedown(function(){
        $(this).toggleClass(['fa-eye','fa-eye-slash']);
        if($(this).hasClass('fa-eye-slash')){
            $(this).siblings('input').prop('type','text');
        }
    });
    $('#eye-btn').mouseup(function(){
        $(this).toggleClass(['fa-eye','fa-eye-slash']);
        if($(this).hasClass('fa-eye')){
            $(this).siblings('input').prop('type','password');
        }
    });





});