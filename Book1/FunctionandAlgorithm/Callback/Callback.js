function testA(){
    function showResult(sum){
        var msg = '결과는 '+sum+' 입니다.';
        document.querySelector('input[name="sum1"]').value = msg; 
    }

    function plusOperation(a,b){
        return a+b;
    }
    
    const result = plusOperation(2,3);

    showResult(result);
}

function testB(){
    function showResult(sum){
        var msg = '결과는 '+sum+' 입니다.';
        document.querySelector('input[name="sum2"]').value = msg; 
    }

    function plusOperation(a,b){
        showResult(a+b);
    }

    plusOperation(4,5);
}

function testC(){
    function showResult(sum){
        var msg = '결과는 '+sum+' 입니다.';
        document.querySelector('input[name="sum3"]').value = msg; 
    }

    function plusOperation(a,b, callback){
        callback(a+b);
    }

    plusOperation(6,7,showResult);
}

testA();
testB();
testC();