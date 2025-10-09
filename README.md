<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar el desarrollo
1. Clonar repositorio
2. Ejecutar
```
npm intall
```
3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```
4. Levantar la base de datos 

```
docker-compose up -d
```
5.- Clonar el archivo __.env.template__ y renombra ka cioia a .env

6.-Llenar las variables de entorno definidas en el ```.env```

7.-Ejecutar ka aokucacuib en el dev 
```
npm run start:dev
```


8. Rescontruir la base de datos con la semilla 

```
http://localhost:3000/api/v2/seed
```


# Productionbuil
1.- Crear el archivo ```.env.prod```
2.-Llenar las variables de entorno prod
3.- Crear la nueva imagen 

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


## stack usado 
*MongoDB
*Nest

