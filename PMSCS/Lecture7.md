Masters program algorithm course notebook

> 26 Oct, 2019

# Lecture 6



## :dert: Heapify 

### MAX HEAPIFY

    Procedure:

    MaxHeapify(A,i)
    1. l <--Left(i)
    2. r <-- Right(i)
    if( 1<heap-size[A] and A[l] >A[i]){
        largest <-- l
    }
    else {
        largest <--i
    }

    if(r<=heapsize[A] and A[r]>A[largest]){
        ...
    }
> Todo from Slide



### :rocket: Converting an arry to Max Heap: 

Step 1:  Make a heap from Array


   1   |   2   |   3|4 |5|6|7|8|9|10|
|--------|--------|---------|------|---------|-------|--------------|------|---------|------|
|4|1|3| 2|16|9|10|14|8|7
|



Step 2: Build Max heap: 

    set heap size of a == length [A]
    for length/2 to 1 
        Do- Max heapify




> japanese_ogre:  Exam Alert : There will be given an array of heap, We need to show the steps of the maxheap generation . 




### :rocket: Time complexity of Building Heap :

-  For only root the time complexity is Log(N)


< PROOF of LOG IS SKIPPED - WILL NOT BE ON EXAM >



### :rocket: HeapSort Algorithm

    Build Max Heap (A)
    For I to length of A down to 2
        Exchange A[1] with A[i]
        Heap size of A === heap size of A - 1
        MaxHeap ( A, 1)


   1   |   2   |   3|4 |5|6|7|8|9|10|
|--------|--------|---------|------|---------|-------|--------------|------|---------|------|
|16|1|3| 2|16|9|10|14|8|1
|


                1
            14      10
        8       7 9     3
      2    4  16



> TODO  : LEARN HEAP SORT and Implimentation ( NOT FOR EXAM )