# Bug Report for Graphql Gateway Resolve Reference: missing context

repository for reproduces issue: [#712](https://github.com/nestjs/graphql/issues/712)

## How to reproduce the problem

First start the user and post service.

After that start the gateway project.

Run this query on the Gateway (before that add x-locale inside header like: "x-locale": "AT"):

```
{
  getUser(id: 1) {
    id
    name
  }
}
```

Now it will return :

```
{
  "data": {
    "getUser": {
      "id": "1",
      "name": "Test User from AT"
    }
  }
}
```

All good now run the "problem"-query

```
{
  getPosts {
    id
    title
    User {
      id
      name
    }
  }
}
```

Now, the response is not correct. The graphql context is undefinded

```
{
  "data": {
    "getPosts": [
      {
        "id": "1",
        "title": "123",
        "User": {
          "id": "1",
          "name": "Test User from undefined"
        }
      },
      {
        "id": "2",
        "title": "1111",
        "User": {
          "id": "1",
          "name": "Test User from undefined"
        }
      },
      {
        "id": "3",
        "title": "22222",
        "User": {
          "id": "1",
          "name": "Test User from undefined"
        }
      }
    ]
  }
}
```

Notice: Run all services to see the problem.
