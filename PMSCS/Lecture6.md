Masters program algorithm course notebook

> 24 Oct, 2019

# Lecture 6


### [ Quick Sort ]

- There will be a pivote to traverse the elements
- check each element against pivote
- if we find any element 





2, 5, 8, 9, 4, 1, 7, 10, **6** <- Pivote

2, 5, 8, ***4, 9,*** 1, 7, 10, **6** <- Compare with 6 and exchange 

2, 5, 8, 4, 9, 1, 7, 10, **6**




#### PSEUDO CODE 

    PARTITION(A,p,r)
    x = A[r]
    i=p-1
    for j=p to r-1
    if A[j] ,=x
        i = i+1
        exchange A[i]with e ...
        exchange a[i+1] with A[r]
        
    return i+1

After partition

    QUICKSORT( A, p, r){
        if p<r then 
        q = PARTITION(A,p,r)
        QUICKSORT( A, p, q-1)
        QUICKSORT(A,q+1,r)
    }


> EXAM ALERT : Show the Quick sort and the steps / I-J value traverse; 

Master Rule:
- If the number is grater then. equal to pivote, stay
- if the number is less then pivote , swapte it with 1st element >/= then Pivote


### Complexity:  [ When the pivot is the last element or first element ]

- Partition Complixty: 
    - O(n) for the "for" loop
    - **Worse case** when the the array is already sorted. -> Like Linear Search **n*n**
    - **Best Case** when the elements are *equally balanced* - > Like merge Sort - **nLog(n)**
    -  **Average Case** is when 





### Randomise Quick Sort
    - To avoid the N*N time complexity quick sort pivote can be choosen randomly. 
    - Pivot should be choosen randomly.
    - 
### Complexity:  [ When the pivot is the last element or first element ]



-> 	:boom: [ MERGE SORT VS QUICK SORT ]
- MERGE SORT TAKES MORE MEMORY THEN QUICK SORT
- RANDOMIZED QUICK SORT IS FASTER then MERGE SORT
