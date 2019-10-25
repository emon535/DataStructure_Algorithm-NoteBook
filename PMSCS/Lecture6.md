Masters program algorithm course notebook

> 24 Oct, 2019

# Lecture 6


### :yellow_heart: [ Quick Sort ]

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



## :yellow_heart:  HEAPSORT

> Every tree is graph but not every graph is tree.

Tree: 
- minimally connected graph and having only one path between any two vertices.
- Tree is a special case of graph having no loops, no circuits and no self-loops.	
- Different types of trees are : Binary Tree , Binary Search Tree, AVL tree, Heaps.	
- Tree always has n-1 edges.	

Graph: 
- There can be cycle in graph
- In graph there is no such concept of root node.
- There are mainly two types of Graphs : Directed and Undirected graphs.



### :seedling: Full Binary Tree: 
- If there is child , it should be 2, if not No child. :family_woman_woman_girl_boy:	or :couple:	

### :seedling: Complete Binary Tree: 
- It should be LEFT Filled up ( Fill up first with left ). 
- Same level siblings :monkey_face: :monkey_face: are full/ Filled up.

<img src ="https://web.cecs.pdx.edu/~sheard/course/Cs163/Graphics/CompleteBinary.jpg" width="400px"> 


- Complete binary tree can be **FULL Binary tree**
- 

:herb:	 Height of a node = the number of edges on the longest simple path from the node down to a leaf.
:herb:	Level of node = the length of a path from the root to the node
:herb:	Height of tree = height of root node.


### :dart: Useful Properties
- There are at most 2^l nodes at level ( or depth ) l of a binary tree. 
- IF the height/ depth is *d* there is at most 2^(d+1) - 1 nodes.
- A Binary tree with n ndes had depth at least  floor[ **log(n)** ].



## :rainbo HEAP : 
- There is two types of heap. 
    - Mean Heap
    - Max Heap
- Complete binary tree :seedling:
- Can be stored in Array. 
- 