$(document).ready(function(){
    let flag=0;
    $('#uid').blur(function(){
        let uid=$('#uid').val();
        let url ="process/ajaxUid.php?uid="+uid;
        $.get(url,function(response){
            //alert(response);
            $('#errUid').html(response);
            if(response=='Available UID'){
                $('#errUid').css('color','green');
                flag=1;
                return;
            }
            $('#errUid').css('color','red');
            flag=0;
        });
    });


    $('#ajaxSignUp').click(function(){
        if(flag){
        let keyValues=$('#form').serialize();
        let url="process/ajaxSignUp.php";
        alert(keyValues);
        $.post(url , keyValues,function (data,status) {
            $('#errAjaxSubmit').html(data);
            alert(data);
            if(data==="Created Record"){
                $('#errAjaxSubmit').css('color','green');
            }
            else{
            $('#errAjaxSubmit').css('color','red');
            }
        });
        flag=0;
    }else{
        $('#errAjaxSubmit').css('color','red');
        $('#errAjaxSubmit').html('Update UID pls.....')
    }
    });



    $('#fetchProfile').click(function(){
        let uid=$('#uid').val();
        let url='process/ajaxFetchProfile.php?uid='+uid;
        //alert(url);
        
        $.getJSON(url,function(response){
            //alert("Hello");
            if(response.length==0){
                alert('Invalid ID');
            }else{
                if(response[0].fileName)
                $('#prev').attr('src',"uploads/"+response[0].fileName);
                $('#FirstName').val(response[0].firstName);
                   $('#LastName').val(response[0].lastName);
                   $('#inputCity').val(response[0].city);
                   
            }
        });

    });

});