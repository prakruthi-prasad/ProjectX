class Solution {
    minJumps(arr,n){
        //code here
        let count=0,i=0;
        while(i<n-1){
            i=i+arr[i];
            count++;
        }
        return count;
    }
}