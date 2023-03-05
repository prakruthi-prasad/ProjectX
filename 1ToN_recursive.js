class Solution{
    constructor(){
        this.s=""
    }
    printNos(N){
        //code here
        this.printRecursive(N);
        console.log(this.s)
}
printRecursive(N){
    if(N==0){
        return;
    }
    this.printRecursive(N-1);
    this.s += N+ " "
}
}