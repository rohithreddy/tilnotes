# Architecture of data-intensive applications

The is architecture is designed on the following five layers:

1. Infrastructure layer
2. Persistence layer
3. Integration layer       
4. Analytics layer
5. Engagement layer

Key building block of Spark is RDD ( Resilient Distributed Dataset)

There are two types of operation on RDDs

* Transformations

 A transformation takes an existing RDD and leads to a pointer of a new transformed RDD. An RDD is immutable. Once created, it cannot be changed. Each transformation creates a new RDD. Transformations are lazily evaluated. Transformations are executed only when an action occurs. In the case of failure, the data lineage of transformations rebuilds the RDD.


* Actions

An action on an RDD triggers a Spark job and yields a value. An action operation causes Spark to execute the (lazy) transformation operations that are required to compute the RDD returned by the action. The action results in a DAG of operations. The DAG is compiled into stages where each stage is executed as a series of tasks. A task is a fundamental unit of work.
