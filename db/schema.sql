-- creates database and set up table
create database burgers_db;
use burgers_db;
create table burgers (
    id integer auto_increment primary key,
    burger_name varchar(30),
    devoured boolean
)