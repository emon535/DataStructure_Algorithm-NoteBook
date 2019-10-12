function InsertionSort(arr) {
    let length = arr.length;
    for(let index=0; index<length; index++){
        let element = arr[index];
        let current;
        for(current=index-1; current>=0 && arr[current]>element; current--){
            arr[current+1]= arr[current]
        }
        arr[current+1] = element;
    }

    console.log(arr);
}

InsertionSort([5, 3, 8, 12, 5, 0]);
