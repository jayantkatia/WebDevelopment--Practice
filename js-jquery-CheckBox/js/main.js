$(document).ready(function () {
    $('#All').click(function () {
        if ($(this).prop('checked') == true) {     // true != 'true'  reason in cool basic js in onedrive
            //alert('Hello');
            $('#Books,#SmartPhone,#Laptop').prop('checked', false).prop('disabled', true);
        }
        else {
            $('#Books,#SmartPhone,#Laptop').prop('disabled', false);
        }
    });
    $('#bill').click(function(){
        let total=0;
        $('input[type=checkbox]').each(function(){
            if($(this).prop('checked')==true){
                total+=Number($(this).val());
                console.log($(this).val());
            }
        });
        $('#display').val(total);
    });
});