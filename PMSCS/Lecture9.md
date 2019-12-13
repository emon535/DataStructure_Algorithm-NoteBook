Masters program algorithm course notebook

:date: 13 Nov, 2019

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
