function MergeSort(Data, left, right){
    
    if(left<right){
        let middle = Math.floor(left+right/2);
        MergeSort(Data, left,middle);
        MergeSort(Data, middle, right);
        Merge(Data,left, middle, right)
    }
}


function Merge(Data, left , middle, right){
    
}