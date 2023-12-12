

function generateQuote (){
var text=["Be yourself; everyone else is already taken.” ", "“So many books, so little time.” " , "“A room without books is like a body without a soul.” " , "You only live once, but if you do it right, once is enough.” " , "“Be the change that you wish to see in the world.” " , "“In three words I can sum up everything I've learned about life: it goes on.” "];

    
    
    var outh=["--Oscar Wilde","--Frank Zappa","--Marcus Tullius Cicero" , "--ae West" , "--Mahatma Gandhi", "--Robert Frost"];
    var num = Math.floor(Math.random() * text.length);

    document.getElementById('quote').innerHTML=text[num]
    document.getElementById('outher').innerHTML=outh[num]
    



};