# restful-api

endpoint, method, and desciption :

| URL            | METHOD | DESCRIPTION                               | DATA TO PASS                      | SUCCESS RESPONSE
|----------------|--------|-------------------------------------------|-----------------------------------|--------------------------------------
| /api/sales     | GET    | get all sales report json                 | -                                 |[{}]
| /api/sales/:id | GET    | get one sales based on id given           | :id = paramas                     |
| /api/sales     | POST   | insert new sales report to db             | body.item_name; body.sales_amount |
| /api/sales/:id | PUT    | update one sales report based on id given | :id = paramas                     |
| /api/sales/:id | DELETE | delete one sales report based on id given | :id = paramas                     |


SUCCESS GET /api/sales response:
```
[
  {
    "_id": "58041a748bb3511fad88aad4",
    "item_name": "TV LG 4K",
    "sales_amount": 357,
    "month": 10,
    "year": 2016,
    "date": 17,
    "createdAt": "2016-10-17T00:25:24.829Z",
    "lastUpdate": "2016-10-17T00:25:24.829Z",
    "__v": 0
  },
  {
    "_id": "58041c8e8bb3511fad88aad5",
    "item_name": "Printer laserjet canon",
    "sales_amount": 230,
    "month": 10,
    "year": 2016,
    "date": 17,
    "createdAt": "2016-10-17T00:34:22.938Z",
    "lastUpdate": "2016-10-17T00:34:22.938Z",
    "__v": 0
  }
]
```
SUCCESS POST /api/sales response:
```
[
  {
    "_id": "58041a748bb3511fad88aad4",
    "item_name": "TV LG 4K",
    "sales_amount": 357,
    "month": 10,
    "year": 2016,
    "date": 17,
    "createdAt": "2016-10-17T00:25:24.829Z",
    "lastUpdate": "2016-10-17T00:25:24.829Z",
    "__v": 0
  }
]
```

SUCCESS PUT /api/sales/:id response:
```
{
  "success": "ok",
  "message": "update is successful",
  "data": {
    "_id": "58041a748bb3511fad88aad4",
    "item_name": "TV LG 87 Inch",
    "sales_amount": 357,
    "month": 10,
    "year": 2016,
    "date": 17,
    "createdAt": "2016-10-17T00:25:24.829Z",
    "lastUpdate": "2016-10-17T00:39:34.299Z",
    "__v": 0
  }
}
```


SUCCESS DELETE /api/sales/:id response:
```
{
  "success": "ok",
  "message": "delete is successful"
}
```
