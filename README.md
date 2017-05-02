# sdw-3a-react-eval2

# Consignes


## 1. Forker le projet

## 2. Créer votre pull request avec nom prénom

## 3. Cloner votre fork

## 4. Implémenter les fonctionnalités suivantes :

En partant de l'application react présente dans le dossier "client", vous devez implémenter un back-office permettant de :

* lister les users
* créer un user
* modifier un user
* supprimer un user

* lister les projets
* créer un projet en lien avec un user
* modifier un projet
* supprimer un projet

Le tout doit être connecté au backend servi en http://localhost:5000

## 5. Une fois le travail terminé, ajouter un commentaire "terminé" à  votre pull-request

------

# Aides & indices

## API

* End point : https://kickass-sdw-3a.herokuapp.com

* Format d'échange : JSON

### get users : GET /api/users

### create user : POST /api/user

* Request body : 

``` 
{
  'age': Number,
  'name': String,
  'type': String 
}
``` 

### update user : PUT /api/user/:id

* Request body : 

``` 
{
  'age': Number,
  'name': String,
  'type': String 
}
``` 

### delete user : DELETE /api/user/:id

### get projects : GET /api/projects

### create project : POST /api/project

* Request body : 

``` 
{
  'title': String,
  'description': String
  '_creator': String
}
``` 

### update project : PUT /api/project/:id

* Request body : 

``` 
{
  'title': String,
  'description': String 
}
``` 

### delete project : DELETE /api/project/:id

### get user projects : GET /api/user/:id/projects

## Références

* https://github.com/github/fetch
* https://reacttraining.com/react-router/web/guides/quick-start
* https://github.com/ReactTraining/react-router/tree/v2.0.0




