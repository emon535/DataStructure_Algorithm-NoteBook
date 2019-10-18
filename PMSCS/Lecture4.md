Masters program algorithm course notebook

> 12 Oct, 2019

# Lecture 4
### [ Insertion Sort revesited ]

    How to do the insertion sort : 
    Compare > Sort > Shift

- Insersion Sort Best case analysis for already sorted input
- Insersion soft worse case analysis for reversed sorted input



> Exam digest
> - Code complexity 
> - No peseudo code 
> 

    ```
    sum = 0;
    for (i = 1; i<n ; i= i*2){
        for (j=1;j<n;j++){
            sum+=i*j
        }
    }

    // Big O for this sample is O(nlogn)
    ```

### [ Devide and Conquer ]

- Devide : Devide the problem into independent sub problems which is similar to the original but smaller in size
- Conquer : The subproblem needs to be solved recursively. If the are small enough just solve them in straignt forward manner
- Combine : The solutions of the sub problem is needs to be marged to the origin problem


### < MEGE SORT >
Example : 
```
18, 26, 32, 6, 43, 15, 9 ,1
18, 26, 32, 6 | 43, 15, 9, 1
18, 26 | 32, 6 |
18 | 26
18
 
-> the sub problem is already sorted. ( base problem )
Devided and broken into subproblems

Now need to combine: 
- For 32,6 - the combined result return 6, so the combination will be 6,32

- for this level : 18, 26 | 6,32 
The combine is  6,18,26, 32

The rest algorithm will work accordingly .

```