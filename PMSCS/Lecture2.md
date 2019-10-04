
Masters program algorithm course notebook

# Lecture 2
## Sorting Algorithm
- Insertion Sort: 
  -- Sorted List 
  -- Unsorted list


What is Array and Structure? 
- Set of data / information.
  
### Process : 
- Devide the list into a sorted sublist and an unsorted sublist


### Pseudocode : 

Algorithm Name ( Parameter ) > 
| for Loop body

```
Insertion-Sort(A,n) 
for k --> 2 to n :
  do > insert A[j] into the sorted subaray A[1,j-1]
  in such a position that A[1..j] become sorted 
  Key <-- A[j]
  i <-- j-1
  while i>0 and A[i]>key
  do A[i+1] <--A[i]
  i <--i-1
A[i+1] <-- key
```

> TODO : Implement in Java or JavaScript


### Analysis of Algorithm :

1. What doew it mean to analyze an algorithm ?
    - Running Time ( Time Complexity )
    - Memory Space ( Space Complexity )
2. What do we mean by running time analysis? 
    - time complexity analysis
    - to determine how running time imcrease as the size of the problem increases. 


## Why  study time complexity ? 

### Measure running time : 
- Use stopwatch
- Actual running time is not meaningful when computing two algorithm
    -  coded in different language
    -  using different data sets. 
    
### Counting operations : 
What we can control ?
-  Count operation instead of time 
    - Inside a for loop that runs 5 times. There is two instructions, that means the number of operation is 10
    - It will be use to determine the performance of an Algorithm.
    - Time complexiry == Number of Operations.
-  Focus on how performance scales

-  Go beyond input size.



#### Asymptotic Analysis: 

- Asymptotic analysis is an analysis of algorithm that focus - ? 

#### Why choose leading term ? 
- Growth Rate of functions : 
    - Linear ~ N
    - Quadratic ~ N*N
    - Cubic ~ N *N *N  
- The growth rate is not affected by 
    - constant function 
    - lower order terms. 


### How do we analyze running time:

- We need to define an **Objective Measure**
    - Count the number of statements executed.

### Intution behind Asymptotic Analysis: 
- Thousand elephant + few goldfish = Thousand elephant.

### The purpose of Asymptotic Analysis : 
- >?

### Asymptotic Notation : 
- Big O notation : **O(g(n))** is the set of functions with smaller or same order of growth as **g(n)**

<img src="https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-1-4842-3988-9_1/MediaObjects/465726_1_En_1_Fig1_HTML.jpg" width="400">


- **g(n)** is an asymptotic *upper bound* for the **f(n)**
