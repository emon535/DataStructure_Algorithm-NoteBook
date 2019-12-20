Masters program algorithm course notebook

:date: 20 Dec, 2019

# Lecture 10



## 🎯 Greedy Algorithm : 

🍌 What is greedy problem ?

### 🅿️ Problem : 1️⃣ 
Designing a greedy Algorithm : Scheduling a meeting ( Interval Scheduling Problem )


#

#️⃣ Strategy 1: Earliest First - Not best solution

#️⃣ Strategy 2: Shortest first - Not best solution 

#️⃣ Strategy 3: Least conflict first : Not getting the best solution

#️⃣ **Strategy 4**: Finish first : This will find the four slot and it's the solution for the problem.


⏰ EXAM : Sort the interval with finish time.
Activity selection aka interval scheduling Problem ; 



‼️ Extension : Weighted interval scheduling problem : 🔕 not for exam;

#

### 🅿️ Problem : 2️⃣ Knapsack Problem : 

Given a set S of n items such that each item i has a positive benifit bi and a positive weight Wi, the goal is to find the maximum benefit subset that does not exceed a given weight ... 

- Total Profit 
- Capacity used 
- Ratio of accumulated profit of capacity used.
  

👍 **Fractional** knapsack Problem : 


item | Benifit | weight|
|--------|--------|----|
|A|15|18|
|B|23|3|
C|25|15|

➡️ Third Strategy: Strives to achive a balance between the rate an which profit increase and the rate at which capacity is used .
  
‼️ Extension : 0/1 Knapsack Problem : will not work for max unit price. 

#

### 🅿️ Problem : 3️⃣ Huffman Codes :

➡️ Fixed length codes: 

➡️ Variable length codes: 






## 🎯 Graph : 

- Difference between graph and tree ⏰
- Connected and disconnected graph 🔕 No exam
  
### 👍 BFS 
  - Explore a graph and turn it into a tree.
    - One vartex at a time.
    - Expand frontire of explored vertices across the breadth of the frontier.
  - Builds a tree over the graph 👍
    - pick a source vertex to be the root
    - Find ( discover ) all of its children then their children.


Algorithm Steps: 
  1. Input the source / root in queue.
  2. Set infinity to all the vertex distance
  3. Check till queue has no element:
  4. pop an element and check from vertex:
  5. check the adjacents are infinity or not: 
  6. set (currentValue+1) as distance value for the neighbours.
  7. push the neighbours to the queue.
  8. update the vartex distances.


🚀 From BFS we find two things 👍:
  - Is the vartex are connected
  - Distance between source and other nodes.

