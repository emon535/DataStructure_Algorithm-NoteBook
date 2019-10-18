function MergeSort(Data, left, right){
    
    if(left<right){
        let middle = Math.floor(left+right/2);
        MergeSort(Data, left,middle);
        MergeSort(Data, middle, right);
        Merge(Data,left, middle, right)
    }
}


function Merge(Data, left , middle, right){
    let LeftArray = Data.splice(left, middle);
    let RightArray = Data.splice(middle, right);

    LeftArray.push("999999999");
    RightArray.push("999999999");

    while(LeftArray[index]==RightArray[index]){

    }
}

function compare ( A,B){
    let  newArray = [];

    A.forEach((elementOfA)=>{
        B.forEach((elementofB)=>{
            if(elementOfA<=elementofB){
                newArray.push(elementOfA)
            }
            // else newArray.push(elementofB)
        })
    })

    return newArray
}