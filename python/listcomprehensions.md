**List Comprehensions**

Suppose there is a list and we want to double all elements in it.

```python
bag = [1,2,3,4,5] like [2,4,6,8,10]
```

people coming  from traditional languages  write
```python
bag = [1, 2, 3, 4, 5]
for i in range(len(bag)):
  bag[i] = bag[i] * 2
```
Using a List comprehension this can be done like this
```python
bag = [elem * 2 for elem in bag]
```

```python
doubled_odds = map(lambda n: n * 2,filter(lambda n:n % 2 == 1,numbers))
doubled_odds = [n * 2 for n in numbers if n % 2 == 1]
```

**Nested Loops**
A for loop that flattens a matrix
```python
flattened = []
for row in matrix:
  for n in row:
    flattened.append(n)
```
A list comprehension that does the same thing
```python
flattened = [n for row in matrix for n in row]
```

**Set Comprehensions**

code that creates a set of all the first letters in a sequence of words
```python
first_letters = set()
for w in words:
  first_letters.add(w[0])
```
Same code written as set comprehension
```python
first_letters = {w[0] for w in words}
```
**Dictionary Comprehensions**
Code that makes a new dictionary by swapping the keys and values of the original one:
```python
flipped = {}
for key, value in original.items():
  flipped[value] = key
```
Same code written as Dictionary comprehension
```python
flipped = {value:key for key, value in original.items()}

```

**_Readability Counts_**

_List comprehension_

Python allows line breaks between brackets and braces.
```python
doubled_odds = [n * 2 for n in numbers if n % 2 == 1]
```
After line breaks

```python
doubled_odds = [
  n * 2
  for n in numbers
  if n % 2 == 1
]
```
_Nested Loops_

Before
```python
flattened = [n for row in matrix for n in row]
```
After line breaks

```python
flattened = [
  n
  for row in matrix
  for n in row
]
```

_Dictionary comprehension_
Before
```python
flipped = {value : key for key, value in original.items()}
```
After Line breaks
```python
flipped = {
  value : key
  for key, value in original.items()
}
```
**List Transversal**

To get first 5 elements of a list

```python
bag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for elem in bag[:5]:  
    print(elem)
```
To get last 5 elements of a list
```python
bag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for elem in bag[:-5]:  
    print(elem)
```
Suppose you wanted to do something to every other element in a list.

```python
bag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  
for elem in bag[::2]:  
    print(elem)

# or equivalently for ranges
bag = list(range(0,10,2))
print(bag)
```
Stepping through the list
list[::2] means that you are going through this list and taking one element for every two steps. 
