# Stock Analytics Backend  📖

## Contents

- [How it works](#How-it-works-📚)
- [Main Dependencies](#Main-Dependencies-🖊)
- [Commands](#Commands)
- [Environment Variable](#Environment-Variable)
- [Developed By](#Developed-By)

## How it works 📚

It works on Nodejs framework 'ExpressJS'

## Main Dependencies 🖊

- **mongoose** for db connection


## Commands

### For connecting both the services like nodejs and mongoDb into same network you have to run the follwing command

```sh
sudo docker network create stock_app_networ
```

### Docker Command

```sh
docker-compose up --build
```

### Node Script

#### For Dev Server

```sh
npm run dev
```

#### For Prod Server

```sh
npm run prod
```

## Environment Variable

```env
    // Used for creating Mongo Connection URL with or without AUTH
    MONGO_AUTH=1   [value = 0/1]
    MONGO_USERNAME  [type = string]
    MONGO_PASSWORD  [type = string]
    MONGO_HOSTNAME  [type = string]
    MONGO_PORT      [type = string]
    MONGO_DB        [type = string]

    // Note: These variable need to be put inside the .env file
    // Note: If mongo auth used then set MONGO_AUTH=1 otherwise if set MONGO_AUTH=0
    // Note: Based on MONGO_AUTH mongo connection URL generated
```

## Developed By

#### **Name**: Rajat
