$(document).ready(function () {
    //obj to store values of boxes
    let obj = {};
    let score = {
        cross: 0,
        circle: 0,
    };
    type = 'cross';
    //1.  to make boxes have imgs and boxes unclickable after one time
    $('#container div').click(function () {
        alert("1");
        if ($(this).hasClass('box')) {
            alert("2");
            if (type == 'cross') {
                $(this).addClass('cross');
                obj[this.id] = type;
                type = 'circle';
            }
            else {
                $(this).addClass('circle');
                obj[this.id] = type;
                type = 'cross';
            }
            check(this.id);
            $(this).removeClass('box');
            alert("4");
        }
    });
    //2. check if winning or tie condition reached 
    function check(num) {
        let flagHorizontal = false, flagVertical = false;
        switch (num) {
            case '1': case '2': case '3':
                flagHorizontal = checkCondition('1', '2', '3');
                break;
            case '4': case '5': case '6':
                flagHorizontal = checkCondition('4', '5', '6');
                break;
            case '7': case '8': case '9':
                flagHorizontal = checkCondition('7', '8', '9');
                break;
        }
        if (!flagHorizontal) {
            switch (num) {
                case '1': case '4': case '7':
                    flagVertical = checkCondition('1', '4', '7');
                    break;
                case '2': case '5': case '8':
                    flagVertical = checkCondition('2', '5', '8');
                    break;
                case '3': case '6': case '9':
                    flagVertical = checkCondition('3', '6', '9');
                    break;
            }
            if (!flagVertical) {
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
            }

        }
    };
    //3i  check for horizontal and vertical
    function checkCondition(a, b, c) {
        if (obj[a] == obj[b] && obj[a] == obj[c]) {
            result(obj[a]);
            return true;
        }
        else if (Object.keys(obj).length == 9)
            result('tie');
    }
    //3ii  check for diagonal
    function checkConditionDiagonal(a, b, c, d, e) {
        if (obj[a] == obj[b] && obj[a] == obj[c] || obj[d] == obj[e] && obj[e] == obj[a]) {
            result(obj[a]);
            return true;
        }
        else if (Object.keys(obj).length == 9)
            result('tie');
    }
    //4 Result display
    function result(res) {
        $('#container div').removeClass('box');
        let str;
        if (res == 'tie') {
            str = "It's a Tie...";
        }
        else {
            score[res] += 1;
            updateScore();
            str = res.toUpperCase() + "  wins the game.....";
        }
        $('#result-bar').html(str);
    }
    //update score on screen
    function updateScore() {
        $('#1P').html(score.cross);
        $('#2P').html(score.circle);
    }
    //to reset 
    $('#reset').click(reset);
    function reset() {
        $('#container div').addClass('box');
        $('#container div').removeClass(['cross', 'circle']);
        obj = {};
        $('#result-bar').html('');
    }
    //to clear
    $('#clear').click(function () {
        reset();
        score = {
            cross: 0,
            circle: 0,
        }
        updateScore();
    });
});