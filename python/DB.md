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
