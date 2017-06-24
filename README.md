# React Bucket List (Containerless)

## Requirements

- Postgres
- Node
- Yarn

## Install

0. Install node modules:

```
cd api && yarn
cd ..
cd app && yarn
cd ..
```

1. Create a psql user:

- username: myappuser
- password: myapppassword

```
sudo -u postgres bash -c "psql -c \"CREATE USER myappuser WITH PASSWORD 'myapppassword';\""
```

2. Create a psql database and assign it to our user:

- db: myappdb
- owner: myappuser

```
sudo -u postgres bash -c "psql -c \"CREATE DATABASE myappdb WITH OWNER myappuser;\""
```

3. Run the migrations:

```
cd api && yarn sequelize db:migrate 
yarn sequelize db:seed:all
```


## Dev

4. Run the API

```
cd api && yarn start:dev
```

5. Run the APP

```
cd app && yarn start
```

Visit [localhost:3000](http://localhost:3000)