function quad(a,b,c){
    let result1,result2;
    result1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
    result2 = (b + Math.sqrt(b*b - 4*a*c))/(2*a);
    return [result1.toFixed(2),result2.toFixed(2)];
}
function execute(){
    let input = document.getElementById("val").value.split(" ");
    
    let result = quad(parseFloat(input[0]),parseFloat(input[1]),parseFloat(input[2]));
    document.getElementById("para").innerHTML = result;
    console.log(result);
}