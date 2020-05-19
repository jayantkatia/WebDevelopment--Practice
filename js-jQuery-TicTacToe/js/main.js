$(document).ready(function(){
    
    let clickAble=function(){
        if($(event.currentTarget).hasClass('box'))
            if(type=='cross'){
                $(event.currentTarget).addClass('cross');
                $('#cross').hide();
                $('#circle').show();
            }
            else{
                $(event.currentTarget).addClass('circle');            
                $('#circle').hide();
                $('#cross').show();
            }
        $(event.currentTarget).removeClass('box');
        $('.box').unbind('click',clickAble);
    };


    $('button').click(function(){
         type=$(this).html();
        $('.box').bind('click',clickAble);
    });

    

});