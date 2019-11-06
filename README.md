# Increase-Exercise

Aqui se encuentra el codigo implementado para resolver los ejercicios brindados por Increase

## Resumen

La implementacion esta divida en 3 servicios los cuales paso a detallar

### Bot

Es el encargado de obtener la informacion brindada por la API de Increase y enviarla hacia la API que controla la base de datos. Esta operacion se realiza cada 10 minutos

### DB

Este servicio se encarga de controlar la base de datos

### Server

Este servicio es al cual se conectaran los clientes para obtener la informacion requerida

## Configuracion

#### Instalar node

Obtener la ultima version de node de la [pagina oficial](https://nodejs.org/) o usando [nvm](https://github.com/creationix/nvm)

#### Instalando dependencias

Ejecutar `npm install` o `yarn`desde la raiz de cada uno de los servicios.

#### Configuracion de la base de datos

Para este proyecto se utilizo una base de datos Postgresql. En la [pagina oficial](https://www.postgresql.org/download/) se encuentran las instrucciones para descargar e instalar Postgresql

Luego de instalar Postgresql se puede crear una base de datos y un usuario siguiendo las siguientes instrucciones en la terminal:

```
$ sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;
```

#### Configuracion de los servicios

Parado dentro de cada servicio en la terminal se debe ejecutar los siguientes comandos:

```
$ npm install
$ npm run migrations
$ npm start
```

Y se deben ejecutar en el siguiente orden:

1. DB
2. Bot
3. Server

#### Variables de entorno

`Dotenv` es usado para el manejo de las variables de entorno. Son almacendas en el archivo `/.env` que se encuentra en la raiz de cada servicio. Tener en cuenta que las variables que se encuentran en `bashrc` no son pisadas.

Las variables de entorno necesarias son descriptas en el README que se encuentra en cada uno de los servicios.
