INSERT INTO customer (Customer_ID,Customer_Name,Customer_Tel)
value ('CO1','ALI',71321009);

INSERT INTO customer (Customer_ID,Customer_Name,Customer_Tel)
value ('CO2','ASMA',77345823);

INSERT INTO Product (Product_ID,Product_Name,price)
value ('PO2','samsung galaxy s20',3299);

INSERT INTO Product (Product_ID,Product_Name,price)
value ('PO2','ASUS notbook',4599);

insert into order(
    Customer_ID,
    Product_ID,
    Quantity,
    Total_amount
)
value(
    'CO1',
    'PO2',
    2,
    9198
)
value(
    'CO2',
    'PO1',
    1,
    3299
)

