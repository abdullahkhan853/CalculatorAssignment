var a = document.getElementById('output')
function calc(num){
        a.value += num
}
function clearAll(){
    a.value = '';
}
function result(){
    var d = a.value
    for(var i = 0; i < d.length; i++){
        if((d[i] =='+' && d[i+1] == '+') || (d[i] =='-' && d[i+1]== '-')
            || (d[i] =='*' && d[i+1] == '*') || (d[i] =='/' &&  d[i+1] == '/') 
            || (d[i] =='%' && d[i+1] == '%') || (d[i] =='+' && d[i+1] == '*') 
            || (d[i] =='+' && d[i+1] == '/') || (d[i] =='-' && d[i+1] == '/') 
            || (d[i] =='-' && d[i+1] == '*') || (d[i] =='+' && d[i+1] == '%') 
            || (d[i] =='-' && d[i+1] == '%') || (d[i] =='*' && d[i+1] == '/') 
            || (d[i] =='/' && d[i+1] == '*') || (d[i] =='*' && d[i+1] == '%') 
            || (d[i] =='%' && d[i+1] == '*') || (d[i] =='/' && d[i+1] == '%') 
            || (d[i] =='%' && d[i+1] == '/')){
            a.value = 'Syntax Error'
        }
    }
    a.value = eval(a.value)
}
function cutLast(){
    var d = a.value;
    a.value = '';
    for(var i = 0; i < d.length-1; i++){
        a.value += d[i] 
    }
}