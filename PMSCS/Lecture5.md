Masters program algorithm course notebook

> 19 Oct, 2019

# Lecture 5

From Previous class refresher: 
-  [ Devide and Conqure ]
- [ Merge Sort ]

-> One example of Divide and Conquire is merge sort. 

## Implement Merge sort :

#### Devide the Array into two parts and send them to Merge again : 

    MergeSort(Array, LeftIndex, RightIndex){

        -> Check if the left< right
            -> Find the new right for devided array:
                which is middleIndex = left+right/2 
            -> MergeSort(Array, leftIndex, middleIndex)
            -> MergeSort(Array, middleIndex, rightIndex)
            -> Combine( Array, leftIndex, middleIndex,rightIndex)

    }

#### Then Combine the devided Array:

    Combine(Array, leftIndex, middleIndex, rightIndex){

        -> make an array A[ leftIndex to middleIndex]
        -> make an array B[middleIndex to rightIndex]
        -> make an array NEW[left to right]

        --- HERE USE THE SENTINEL to find the end of A or B 
        --- SENTINEL is importing a value to end of the array and compare later to find the end of the value;

        -> Compare the first element of A and B:
            -> Insert the lower value in NEW[index]
            -> Copy the remaining element to NEW from A
            -> Copy the remaining element to NEW from B
    }


> [Read more about Sentinel and why use it in Merge Sort](https://www.quora.com/Whats-the-purpose-of-a-sentinel-in-the-merge-sort-algorithm)






## Complexity of MergeSort:

> [ Khan Academy Analysis for Merge Sort Time Complexity](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/analysis-of-merge-sort)


> Exam Alert: what is merge sort, what is the time compelxity.  
 WHY CN = in all level we need to calculate the same n. 

- MERGE SORT will always devide the array, so the case does not metter worse case or best case. [ works for all case ]

- Solving recurrence [ Slide ]

> 

- Time complexity for MergeSort is ***n*Log(n);**