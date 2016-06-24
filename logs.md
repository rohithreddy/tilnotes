 You can think of the log as acting as a kind of messaging system with durability guarantees and strong ordering semantics. In distributed systems, this model of communication sometimes goes by the (somewhat terrible) name of atomic broadcast.


 It's worth emphasizing that the log is still just the infrastructure. That isn't the end of the story of mastering data flow: the rest of the story is around metadata, schemas, compatibility, and all the details of handling data structure and evolution. But until there is a reliable, general way of handling the mechanics of data flow, the semantic details are secondary.


The best model is to have cleanup done prior to publishing the data to the log by the publisher of the data. This means ensuring the data is in a canonical form and doesn't retain any hold-overs from the particular code that produced it or the storage system in which it may have been maintained. These details are best handled by the team that creates the data since they know the most about their own data. Any logic applied in this stage should be lossless and reversible.


Any kind of value-added transformation that can be done in real-time should be done as post-processing on the raw log feed produced. This would include things like sessionization of event data, or the addition of other derived fields that are of general interest. The original log is still available, but this real-time processing produces a derived log containing augmented data. 
