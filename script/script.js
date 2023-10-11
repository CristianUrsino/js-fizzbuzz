const wrapperEl = document.getElementById('wrapper');
const fizzDividend = 3;
const BuzzDividend = 5;

for (let i = 1; i < 101; i++){
    let bgBox = '';
    const boxEl = document.createElement('div');
    if(i % fizzDividend === 0 && i % BuzzDividend === 0){
        bgBox = 'fizzbuzz';
        boxEl.innerHTML = 'FizzBuzz';
    }else if(i % BuzzDividend === 0){
        bgBox = 'buzz';
        boxEl.innerHTML = 'buzz';
    }else if(i % fizzDividend === 0){
        bgBox = 'fizz';
        boxEl.innerHTML = 'fizz';
    }else{
        boxEl.innerHTML = i;
    }
    boxEl.className = `box ${bgBox}`;
    wrapperEl.append(boxEl);
}