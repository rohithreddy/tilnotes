# Full Stack Foundations

_CRUD_

* Create
* Read
* Update
* Delete

**SQL**
* INSERT
* SELECT
* UPDATE
* DELETE


Application to make Restaurant Menus

The Restaurants Database would have a structure like this

![Image of DB design]
(https://github.com/rohithreddy/tls/blob/master/python/fullstackf/restDB.png)

**ORM** - Object Relational Mapping

Python code ---> ORM --> DB object
Python code <--- ORM <-- DB object

SQLAlchemy
SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL.

_Configuration_
```python
import sys

from sqlalchemy import Column, ForeignKey, Integer, String

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import relationship

from sqlalchemy import create_engine


Base = declarative_base()

engine = create_engine('sqlite://restaurantmenu.db')

Base.metadata.create._all(engine)

```

_Class_
```python

class Restaurant(Base):
    __tablename__ = 'restaurant'


class MenuItem(Base):
    __tablename__ = 'menu_item'

```
_Mapper_
```python
class Restaurant(Base):

    __tablename__ = 'restaurant'

    name = Column(String(80), nullable = False)

    id = Column(Integer, primary_key = True)


class MenuItem(Base):

    __tablename__ = 'menu_item'

    name = Column(String(80), nullable = False)

    id = Column(Integer, primary_key = True)

    course = Column(String(250))

    description = Column(String(250))

    price = Column(String(8))

    restaurant_id = Column(Integer, ForeignKey('restaurant.id'))

    restaurant = relationship(Restaurant)


```
**INSERTING an Entry**
```python
from sqlalchemy import create_engine
frp, sqlalchemy.orm import sessionmaker
from database_setup import Base, Restaurant,MenuItem

engine = create_engine('sqlite:///restaurantmenu.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind = engine)
session = DBSession()
myFirstRestaurant = Restaurant(name = "pizza Palace")
session.add(myFirstRestaurant)
session.commit()
```

Any changes made to entries will to be saved when session.commit() is called.

**QUERYING**
```python
session.query(Restaurant).all() # returns all restaurants in restaurant table in a list
session.query(MenuItem).filter_by(name='Veggie Burgera')

```

**UPDATING an Entry**
1. Find Entry
2. Reset values
3. add to Session
4. session.commit()


**Delete**
1. Find Entry
2. session.delete(entry)
3. session.commit()


**Protocols**
Communicate through Protocols

1. TCP - Transmission Control Protocol
2. IP  - Internet Protocol
3. HTTP - Hypertext Tranfer Protocol
4. UDP - User Datagram Protocol

DNS - Domain Name Server

Ports
80 - common port for Webserver
8080 - common port for web communication

_**HTTP**_
GET , POST request

Status Code -->
200 Sucessful GET
301 Succesful POST
404 not found

*Making a Web Server*

make a file webserver.py


As we make our website , code becomes repetitive and difficult to maintain
Frameworks are collections of code that simplifies Web Development they take care of repetitive task , so we can focus on Uniqueness of the Project


**Flask**



**Rendering Templates**

```python
render_template('templatename.html', variable)
```
flask searches for templates inside the templates folder 
