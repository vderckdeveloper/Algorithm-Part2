const s = "3people unFollowed me";

function solution(s) {
    // split letter, change the first letter to uppercase and the rest to lower case. join letter in the end
    return s.split(" ").map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(" ");
}

solution(s);
