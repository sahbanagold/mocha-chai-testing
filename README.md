# restful-api

endpoint, method, and desciption :

| URL            | METHOD | DESCRIPTION                               | DATA TO PASS                      |
|----------------|--------|-------------------------------------------|-----------------------------------|
| /api/sales     | GET    | get all sales report json                 | -                                 |
| /api/sales/:id | GET    | get one sales based on id given           | :id = paramas                     |
| /api/sales     | POST   | insert new sales report to db             | body.item_name; body.sales_amount |
| /api/sales/:id | PUT    | update one sales report based on id given | :id = paramas                     |
| /api/sales/:id | DELETE | delete one sales report based on id given | :id = paramas                     |
