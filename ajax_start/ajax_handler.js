$(document).ready(function () {
    var flag = false;
    $('#exampleInputEmail1').blur(function () {
        // alert("Hello");
        let actionUrl = 'serviceAjax.php';
        let email = $('#exampleInputEmail1').val();
        actionUrl += '?email=' + email;
        $.get(actionUrl, function (response) {
            $('#emailHelp').html(response);
            // alert(response);
            if (response == "Available Email") {
                flag = true;
            } else {
                flag = false;
            }
            //alert(flag);
        });

    });

    $(document).ajaxStop(function () {
        $('#wait').hide();
    });
    $(document).ajaxStart(function () {
        $('#wait').show();
    });



    $('#submitBtn').click(function () {
        if (flag) {
            let email = $('#exampleInputEmail1').val();
            let pass = $('#exampleInputPassword1').val();
            let mobNo = $('#mobNo').val();
            
            
            let obj = { email, pass, mobNo, };



            $.post('signUp.php', obj, function (data, status) {
                $('#msg').html(data);
                console.log(status);
                flag=false;
            });
        }else{
            $('#msg').html("You re using already used email.....");
        }
    })
});