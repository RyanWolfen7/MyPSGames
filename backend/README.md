# Backend 

### /users/register

```
/users/register:
     post:
       tags:
       - "users"
       summary: "registers a new user"
       description: "add user"
       operationId: "addUser"
       produces:
       - "application/json"
       parameters:
       - in: "body"
         name: "body"
         description: "full user body"
         required: true
         schema:
           type: "object"
           example: {
             name: "Ryan",
             email: "wolfen7lada@gmail.com",
             password: "123",
           }
       responses:
         200:
           description: "success"
           schema:
             type: "array"
             example: {
               avatar: "//www.gravatar.com/avatar/d9d6413146c1dba0cdb4619d0bd75267?s=200&r=pg&d=mm",
               name: "Ryan",
               email: "wolfen7lada@gmail.com",
               _id: "5ce9330073666e33cd9ff648",
               token: "access token"
             }
         400:
           description: "validation error or invalid DB response"
```
