function handleTyping(e){
    setTimeout(function(){handleTypingDelayed(e)},500);
}

function handleTypingDelayed(e){

    var text = document.getElementById('hiddenfield').value;
    var stars = document.getElementById('hiddenfield').value.length;
    unicode = eval(unicode);
    var unicode=e.keyCode? e.keyCode : e.charCode;

    if ( (unicode >=65 && unicode <=90) 
            || (unicode >=97 && unicode <=122) 
                || (unicode >=48 && unicode <=57) ){
        text = text+String.fromCharCode(unicode);    
        stars += 1;
    }else{
        stars -= 1;
    }

    document.getElementById('hiddenfield').value = text;
    document.getElementById('field').value = generateStars(stars);
}

function generateStars(n){
    var stars = '';
    for (var i=0; i<n;i++){
        stars += '.';
    }
    return stars;
}
