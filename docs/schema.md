# Schema Information

## users
column name      | data type | details
-----------------|-----------|------------------------
id               | integer   | not null, primary key
email            | string    | not null, indexed, unique
fname            | string    | not null
lname            | string    | not null
image_url        | string    | not null
location         | string    |
password_digest  | integer   | not null
session_token    | integer   | not null, indexed, unique

## spots
column name      | data type | details
-----------------|-----------|------------------------
id               | integer   | not null, primary key
owner_id         | integer   | not null, foreign key (references users), indexed
featured         | boolean   | not null, indexed
latitude         | float     | not null
longitude        | float     | not null
location         | string    | not null
price            | integer   | not null, indexed
guest_limit      | integer   | not null
bedrooms         | string    | not null
bathrooms        | integer   | not null
beds             | integer   | not null
image_url        | string    | not null, indexed
description      | text      | not null


## bookings
column name      | data type | details
-----------------|-----------|------------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references users), indexed
spot_id          | integer   | not null, foreign key (references spots), indexed
start_date       | date      | not null
end_date         | date      | not null
guest_number     | integer   | not null


## reviews
column name      | data type | details
-----------------|-----------|------------------------
id               | integer   | not null, primary key
author_id        | integer   | not null, foreign key (references users), indexed
spot_id          | integer   | not null, foreign key (references spots), indexed
rating           | integer   | not null
body             | string    | not null
