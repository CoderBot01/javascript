function Recursion(s,e){
    if(s>e){
        return [];
    }
    console.log ([s].concat(Recursion(s+1,e)));
}

Recursion(9,10);