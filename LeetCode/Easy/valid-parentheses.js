var isValid = function(s) {
    const stack = [];
    const pairs = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    for (let char of s){
        if ( char == "(" || char == "[" || char == "{"){
            stack.push(char);
        }
        else{
            if(stack.length === 0) return false;
            const a = stack.pop();
            if(pairs[char] !== a) return false;
        }
    }
    return stack.length === 0;
};