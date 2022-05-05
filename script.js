let data = "";
for(let i=1;i<=15;i++){
    data = data+`
    <div class="program-box">
            <div class="program-input">
              <div class="program-name">Program ${i}</div>
              <hr>
              <input id="input-${i}" placeholder="Enter the input in given format..." type="text"/>
              <button onclick="execute(${i})" class="btn">Run</button>
              <p>( Sample Input: abc )</p>
            </div>
            <div class="line"></div>
            <div class="program-output">
              <p>Output:</p>
              <hr>
              <div id="output-${i}" class="output-para">
                Output...
              </div>
            </div>
          </div>
    `;
}

document.getElementById("main").innerHTML = data;

function execute(n){
    let inputId = "input-"+n;
    let outputId = "output-"+n;
    
    let inputVal = document.getElementById(inputId).value;
    let outputVal = document.getElementById(outputId);

    try{
    switch(n){
        case 1:
            program1(inputVal,outputVal);
            break;
        case 2:
            program2(inputVal,outputVal);
            break;
        case 3:
            program3(inputVal,outputVal);
            break;
        case 4:
            program4(inputVal,outputVal);
            break;
        case 5:
            program5(inputVal,outputVal);
            break;
        case 6:
            program6(inputVal,outputVal);
            break;
        case 7:
            program7(inputVal,outputVal);
            break;
        case 8:
            program8(inputVal,outputVal);
            break;
        case 9:
            program9(inputVal,outputVal);
            break;
        case 10:
            program10(inputVal,outputVal);
            break;
        case 11:
            program11(inputVal,outputVal);
            break;
        case 12:
            program12(inputVal,outputVal);
            break;
        case 13:
            program13(inputVal,outputVal);
            break;
        case 14:
            program14(inputVal,outputVal);
            break;
        case 15:
            program15(inputVal,outputVal);
            break;
        default:
            break;
    }
}catch{
    outputVal.innerHTML = "Enter the proper input...";
}
}