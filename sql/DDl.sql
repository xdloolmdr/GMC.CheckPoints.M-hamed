CREATE table Customer(
    Customer_ID varchar(20) primary key not null,
    Customer_Name varchar(20) not null,
    Customer_Tel float
);
CREATE table Product(
    Product_ID varchar(20) primary key not null,
    Product_Name varchar(40) not null,
    price float check (price > 0)
);
CREATE table orders(
    Quantity float,
    Total_amount float,
    Product_ID varchar(20),
    Customer_ID varchar(20),
    primary key(Product_ID, Customer_ID),
    foreign key(Customer_ID) references Customer(Customer_ID),
    foreign key(Product_ID) references Product(Product_ID)
);
alter table orders
add orderDate datetime default current_timestamp;
alter table Product
add Category varchar(20);