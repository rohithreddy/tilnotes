** DB API **

Standard python API to connect to a database

```python
import sqlite3
conn = sqlite3.connect("Cookies")
cursor = conn.cursor()
cursor.execute("select host_key from cookies limit 10")
results = cursor.fetchall()
print(results)
conn.close()
```
_Inserts_

changes to DB have to commited after executing a update

when you make any changes to DB , the changes are stored in transaction and reflected after it is commited

atomicity

```python
pg = psycopg2.connect("dbname=somedb")
c = pg.cursor()
c.execute("insert into names values('Jennifer Smith')")
pg.commit()
```


**SQL Injection Attack**
some of text is being treated as SQL query

```python
'); delete from posts; --
```
Use query parameter instead of String Substitution

```python
DB = psycopg2.connect("dbname=forum")
c = DB.cursor()
c.execute("INSERT INTO posts (content) VALUES (%S)", (content,))
DB.commit()
DB.close()

```
Script Injection Attack


python Bleach can be used to prevent script attacks


Simplest Way to use Bleach
```python
>>> import bleach

>>> bleach.clean('an <script>evil()</script> example')
u'an &lt;script&gt;evil()&lt;/script&gt; example'


```


*Input Sanitization*


**Update**

```python
update TABLE set COLUMN = value where Restriction;

update posts set content = 'cheese ' where content like '%<script>%';
```


**Delete**

```python
delete from TABLE where RESTRICTION;
```


**Creating Tables**


_Normalized Design_

1. Every row has the same number of columns.
if there are two values for a given key , they have to end up in different rows.
2. There is a unique _key_, and everything in a row says something about the key.
3. Facts that don't relate to the key belong in different tables.
4. Tables shouldn't imply relationships that don't exist.


**Creating a Table**
```sql
create table tableName(
  column1 type [constraints],
  column2 type [constraints],
  [row constraints]);
```
**Create a DB**

```sql
create database name[options];
drop database name[options];
drop table name[options];
```
**Primary Keys**
A column or columns that uniquely identify what each row in a table is about.

Single value primary key

```sql
create table students (
  id serial primary key,
  name text,
  birthdate date
);
```
In case of multi value primary keys

```sql
create table postal_places(
  postal_code text,
  country text,
  name text,
  primary key(postal_code,country)
);

```
if you try putting a duplicate value into primary key , the database signals an error.

**Declaring Relationships**
_References constraints_

References provides referential integrity,
Columns that are supposed to refer to each other are guaranteed to to so.

```sql
create table sales(
  sku text references products(sku),
  sale_date date,
  count integer);
);
```
_Foreign Keys_


**Self Joins**


 for each sku value in the products table, we want to know the number of times it occurs in the sales table.


_correct_
 ```sql
 select products.name, products.sku, count(sales.sku) as num from products left join sales on products.sku = sales.sku group by products.sku;

 ```
_wrong_
```sql
select products.name, products.sku, count(*) as num
  from products join sales
    on products.sku = sales.sku
  group by products.sku;

```
difference is left Join  and count(sales.sku)

**Join Variants**

Inner Join --> join
Left Outer Join --> left join
Right Outer Join --> right join


**Subquiries**
Result of a query is a table
Queries can be performed on results table


**Views**
A view is a select Query stored in the database in a way that lets you use it like a table.

```sql
create view viewName as select ...
```

```sql
create view course_size as select course_id,count(*) as num from enrollment group by course_id;
```
we can Update or delete  rows in some views but not others .
