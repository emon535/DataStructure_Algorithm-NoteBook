Masters program algorithm course notebook

> 11 Oct, 2019

# Lecture 3
### Asymptotic Notation
## O notation ( Big Oh! )

-  ∃  : There exist atleast one value 
- ∀ : Universal quantifier;  ( far all value)

### **Example : 1** 
    Show that 30n+8 is O(n).

    Show ∃c, n0 : 30n+8 <cn , ∀n >=n0
    Let c = 21, n0 = 8
    cn = 31n+n>30n+8
    - So 30n+8 <= cn

> 30n+8 >> O(n)  The growth rate of n is same as the equations

- Big 0 example , graphicslly. 




## Ω Notation - Big Omega
- Takes minimum time to process the program 
## ϴ Notation - Theta 


### **Example : 2**
    Exponential Time algorithm- 2^n


## Linear Search

    public static boolean hasLetter(String word , char letter ){
        for (int i= 0;i<word.length();i++){  
            if(word.charAt(i)==letter)
                return true;
        }
        return false
    }

    // Total 3 operation per iterations
    // total 3 fixed operation to initiate and end the iteration.

**Analysis of the code : ( Big 0 and complexity )**
- Total 7 Operations
- For single iteration - 3 Operations 
- If there is 5 loops , it should be 15+ 1( last check) operations
- For example : **San diago** will have 9 loops and 30 operatios to find X in the string.
- Total operations : 3n+3
- Big O of n should be **O(n)**


```
     if(word.charAt(i)==letter)
                return true;
```
This sections is fixed, So it does not depend on the number of string length
 - If there is a constant type code block the **big O should be 1**

```
    public static boolean hasLetter(String word , char letter ){
        for (int i= 0;i<word.length();i++){  
            count ++ 

            // word.length - > one time
            // i++ -> one time
            // count++ -> one time

            So total 3n times

            // i=0 -> One time
            // Last limit check -> one time
            // 
        }
        return false
    }
```

This section depends on the loop number (n)


**Example #3**

```
public static void reduce (int[] value){
    int minIndex = 0;
    for (int i=0 ; i<vals.length; i++){
        for(some login){
        if(value[i]<=vals[minIndex]){
        
            }
        }

    }
}

// total complexity 1+n+1+n = 2n+2
```

> :exclamation: Exam Alert : Some code may come and need to reduce what is the big O of the code. 


**Exampe #4:**

    sum = 0
    for(i = 1; i<n ; i=i*2>){
        sum+=1
    }
    
    // Big O of the code is O(logN)

**Example #5 :**

    sum = 0;
    for (i = 1; i<n ; i= i*2){
        for (j=1;j<n;j++){
            sum+=i*j
        }
    }

    // Big O for this sample is O(nlogn)

example #6 : 

    sum = 0;
    for (i = 1; i<n ; i= i*2){
        for (j=1;j<n/2;j++){
            sum+=i*j
        }
    }

    // Big O for this example is O(n*n/2) or O(n*n)




## Types of Time Complexity: 
 - Worse Case
    - Running time on worse possible input 
 - Base Case
    - Running time on best possible input 
 - Average Case 
    - we take all possible input and calculate computing time for all of the inputs sum all the calculated value and divided the sum by total number of input


### **Insertion sort Algorithm Revisited**

Pseudo Code
```
Insertion-Sort(A,n) 
for k --> 2 to n :
  do > insert A[j] into the sorted subaray A[1,j-1]
  in such a position that A[1..j] become sorted 
  Key <-- A[j]
  i <-- j-1
  while i>0 and A[i]>key
  do A[i+1] <--A[i]   // Shifting
  i <--i-1
A[i+1] <-- key
```
> Exam Hints

Java code : 

```
public class InsertionSortExample {  
    public static void insertionSort(int array[]) {  
        int n = array.length;  
        for (int j = 1; j < n; j++) {  
            int key = array[j];  
            int i = j-1;  
            while ( (i > -1) && ( array [i] > key ) ) {  
                array [i+1] = array [i];  
                i--;  
            }  
            array[i+1] = key;  
        }  
    }  

    // Big o of Insertion sort is O(N)
```


> :exclamation: Exam Alert : What is the Big O of Insertion Sort.
