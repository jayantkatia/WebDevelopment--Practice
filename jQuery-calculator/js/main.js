$(document).ready(function(){
    let $screen=$('#screen');
    $screen.html('');
    let history;
    $('button').click(function(event){

        let txt=$(event.currentTarget).html();
        if(txt=='+'||txt=='-'||txt=='*'||txt=='/'||txt=='.'){
            if(history=='+'||history=='-'||history=='*'||history=='/'||history=='.')
            return;
        } 
        
        if($(this).html()=='='){
            $screen.html(eval($screen.html()));
        }else if($(this).html()=='Back'){
            let length=$screen.html().length;
            $screen.html($screen.html().substring(0,length-1));
        }else if($(this).html()=='CE'){
            $screen.html('');
        }else{
            $screen.html($screen.html()+txt);
        }
        history=txt;

    });

});