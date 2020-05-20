let obj = {};
//check if winning or tie condition reached 
function check(num) {
    switch (num) {
        case '1': case '2': case '3':
            checkCondition('1', '2', '3');
            break;
        case '4': case '5': case '6':
            checkCondition('4', '5', '6');
            break;
        case '7': case '8': case '9':
            checkCondition('7', '8', '9');
            break;
    }
    switch (num) {
        case '1': case '4': case '7':
            checkCondition('1', '4', '7');
            break;
        case '2': case '5': case '8':
            checkCondition('2', '5', '8');
            break;
        case '3': case '6': case '9':
            checkCondition('3', '6', '9');
            break;
    }
    switch (num) {
        case '1': case '9':
            checkCondition('1', '5', '9');
            break;
        case '3': case '7':
            checkCondition('3', '5', '7');
            break;
        case '5':
            checkConditionDiagonal('5', '1', '9', '3', '7');
            break;
    }
    if (Object.keys(obj).length == 9)
        result('tie');
};
//check for horizontal and vertical
function checkCondition(a, b, c) {
    if (obj[a] == obj[b] && obj[a] == obj[c])
        result(obj[a]);
}
//check for diagonal
function checkConditionDiagonal(a, b, c, d, e) {
    if (obj[a] == obj[b] && obj[a] == obj[c] || obj[d] == obj[e] && obj[e] == obj[a])
        result(obj[a]);
}
//Result display
function result(res){
    let str;
    if(res=='tie'){
        str="It's a Tie...";
    }
    else{
        str=res+" wins the game.....";
    }
    //document.getElementById('result').innerHTML=str;
    //document.getElementById('cross').style.hidden=true;
    //document.getElementById('circle').style.display=true;

}
//jQuery to click cross/circle and disabling already selected boxes
$(document).ready(function () {
    let clickAble = function () {
        if ($(this).hasClass('box'))
            if (type == 'cross') {
                $(this).addClass('cross');
                $('#cross').hide();
                $('#circle').show();
                $('#circle').css('border','5px solid red');
            }
            else {
                $(this).addClass('circle');
                $('#circle').hide();
                $('#cross').show();
                $('#cross').css('border','5px solid red');

            }
        $(this).removeClass('box');
        $('.box').unbind('click', clickAble);
        obj[this.id] = type;
        check(this.id);
    };
    $('button').click(function () {
        $(this).css('border','solid 5px green');
        type = $(this).html();
        $('.box').bind('click', clickAble);
    });
});