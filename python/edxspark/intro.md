A **Data Model** is a collection of concepts for describing Data

A **Schema** is a description of a particular collection of data, using a given data model

A relational data model is the most used data model

Every relation(Table) has a Schema defining each column's type

The programmer must statically specify the Schema

Only 20% of data is **Structured**

**Apache Spark**

Real world Use Cases
* Big Data Genomics using ADAM
* Conviva optimizing Internet video stream delivery
* Data Processing for wearables and Internet of Things
* Personalized yahoo news pages
* Analytics for Yahoo Advertising
* Captial One product recommendations


_Big Data Problem_

* Data growing faster than computation
* Growing Data Sources
* Storage getting Cheaper
But Stalling CPU speeds and storage bottlenecks


One machine can not process or even store all the data
Solution is to distribute data over cluster of machines


**The Spark Computing Framework**
Provides programming abstraction and parallel runtime to hide complexities of a fault-tolerance and slow machines


**_Spark Components_**
* Spark SQL
* Streaming
* Mlib
* GraphX


A spark program consists of 2 Programs

**Driver Program**
Runs only on one node and drives the execution
**Worker Program**
Worker programs run on cluster nodes in local threads

_DataFrames_ are distributed across workers

_Spark Context_ tells spark how & where to access a cluster

The **master** parameter for a SparkContext determines which type and size of cluster to use


**DataFrames**
The primary abstraction in Spark
* Immutable once constructed
* Track lineage information to efficiently recompute lost data
* Enable operations on collection of elements in parallel

You construct DataFrames
* by parallelizing exixsting Python collections(lists)
* by transforming an exixsting Spark or Pandas DF's
* from files in HDFS or any other storage system


Each row of a DataFrame is a **Row** object
The fields in a Row can be accessed like attributes


```python
row = Row(name="Alice", age=11)

#now feilds in row can be accessed by
row['name'], row['age']
or
row.name , row.age
```


Two types of operations on DataFrames
* Transformations
* Actions
Transformations are lazy
Transformed DF is executed when action runs on it
Persist(cache) DF's in memory or disk
