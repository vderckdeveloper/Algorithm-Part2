const solution = s =>{
    if(s.length % 2 !== 0) return false;

    let counter = 0;
    for(let i =0; i < s.length; i++) {
        if(s[i] === '(') counter++;
        else counter--;
        if(counter < 0) return false;
    }
    return counter === 0;
}