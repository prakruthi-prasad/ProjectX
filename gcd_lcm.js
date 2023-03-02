class Solution{
    gcd(a,b){
    if(b==0)
        return a
    return (b%Aa,a)
}
    lcmAndGcd(A, B){
        //code here
        var g= gcd(A,B)
        var l = A*B/g;
        var arr=[2];
        arr[0]=g;
        arr[1]=l;
        return arr
}
}