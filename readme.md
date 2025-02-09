### intall packages

    - npm i express
    - npm init -y
    - npm i typescript --save-dev
    - npx tsc --init
    - npm i @types/node --save-dev
    - npm i @types/express --save-dev
    - npm i ts-node --save-dev
    - npm i nodemon --save-dev

#

### Setup the Prisma ORM :

    step 1 - npm i prisma @prisma/client // install the prisma

    step 2 - npx prisma init             // Initialize the prisma

1. After All of this Prisma Folder is created, inide the folder we have Schema.prima file is Available.

```
    [Schema.prima]
    ------------------------------
    datasource db {
        provider = "mysql"
        url      = env("DATABASE_URL")
   }

   - set Provider by default [postgresql]
   - url = env("DATABASE_URL")


    create the model [table]
    ------------------------------
    model User {
        id Int @id @default(autoincrement())
        name String
        email String @unique
        password String
        createdAt DateTime @default(now())
        updatedAt DateTime @default(now())

        @@map("users")
    }
   ```

   ```
    .env -
    ----------------------
       DATABASE_URL="mysql://root:password@localhost:3306/mydb_dev?schema=public"

   - setup the database connection after inserting the values in the DATABASE_URL.
   ```

    - step 3 - npx prisma migrate dev --name createusertable

    createusertable -> this is the name of migration file.

    this command will generate the table in the database.
