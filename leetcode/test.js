var multiply = function(num1, num2) {
    const len1 = num1.length
    const len2 = num2.length
    let pos = new Array(len1+len2).fill(0)
    for(let i = len1-1;i>=0;i--){
        for(let j = len2-1;j>=0;j--){
            const num = num1[i]*num2[j]+ pos[i+j+1]
            pos[i+j+1] = num%10
            pos[i+j] += parseInt(num/10)
        }
    }
    return pos.join('')
};

multiply('3','2')