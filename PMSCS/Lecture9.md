Masters program algorithm course notebook

:date: 13 Dec, 2019

# Lecture 9



## :dart: Linear Sort[Counting sort]:

:important: 
- No comparison between elements. 
but need to find the heighest value.
- Need one extra temp storage / extra memory 
    - The size of the temp storage is 1 to ***heightst value*** , like if we need to sort [ 1,100] , we need a array of [ 1,2,3,...,100]. This is a problem. 

- Need extra array for output 
- Total 3 array. 

### How to do the linear search: 

Step :one: 

Set all the value of the temp storage to zero. 

   4   |   1   |   3|4 |3
|--------|--------|---------|------|---------|-------|--------------|------|---------|------|
|x|x|x| x|x

Temp Memory : 


   0  |   0   |   0|0
|--------|--------|---------|------|




Step  :two:

Count and get the temp memory filled .


  Input |  4   |   1   |   3|4 |3
|--------|--------|---------|------|---------|-------|--------------|------|---------|------|
Output |x|x|x| x|x

Temp Memory : 


  Temp-Memory|  1  |   0   |   2|2
|--------|----|----|---------|------|


Step :three:

Replace the temp array with the following steps : 
- Add the i and i+1 item and store it to i+1. 


By Following the step we get: 


  Temp-Memory|  1  |   0   |   2|2
|--------|----|----|---------|------|


  Temp-Memory|  1  |   1   |   2|2
|--------|----|----|---------|------|

  Temp-Memory|  1  |   1   |   2|2
|--------|----|----|---------|------|

  Temp-Memory|  1  |   1   |   3|2
|--------|----|----|---------|------|
  Temp-Memory|  1  |   1   |   3|5



Step :four:

// Steps are wrong 

- Scan from the last position of input array
- Get 5 position and value 3.
- Check the modified temp array and match with the position ( 5)
- Found 3's index value is 5.  value is 3 - So the index of 5's value ( 3 ) is 3
- -1 from the modified temp array element ( 5's value will be 4)
- 



## :dart: Stable Sort :

- Output and Input order will be same. 
- 👹 What is stable Sort ? :warning:



## :dart: Radix Sort :

-  Digit by Digit Sorting.
-  Can be eighter most significant digit first or least significant digit first. 
- A good way to stably sort least significant digit first. 
  

## 🎯 Greedy Problem : 

  - solves Optimization problem
  - Example: 
    - Activity Selection Problem
    - Dijkstra Shortest Path problem
    - Minimum spanning Tree prblem
    - ⚠️ defination will be less, more conceptual questions will be on exam.



#### 🚩 Optimal Solution : 
  - Global Optimal Solution : The main problem solution is the global optimal solution. 


:new: Decision Problem : All the connected vertex should have unique colors
:one: Search Probelm:
  -  3 coloring Search Problem : 

:two: Optimization Problem : 
      
    3️⃣ Coin Changing Problem : Guveb ciubg debinubatuibs us { C } , makes change for a given amount  A with the minimum number of coins.
-  Example : 
  Coing denominations C = { 25, 10, 5, 1} amount to change . A = 73
    - Choose 2 25 coin so remaining 23
    - choose 2 10 coin, so remaining 3
    - choose 0 5 coin, so remaining 3
    - choose 3 1 coin, so remaining 0


:four: