# Parse-Todo-Ts

Une API Todo robuste et scalable construite avec **Parse Server**, **Express** et **TypeScript**. Ce projet fournit un backend complet pour la gestion de tâches (CRUD) en utilisant les Cloud Functions de Parse.

## 🚀 Fonctionnalités

- **Parse Server Core** : Gestion native de la base de données et des objets.
- **TypeScript** : Typage fort pour une meilleure maintenabilité et moins d'erreurs.
- **Cloud Functions** : Logique métier centralisée et sécurisée côté serveur.
- **Express Integration** : Serveur web flexible et extensible.
- **Gestion de l'environnement** : Configuration facile via un fichier `.env`.

## 🛠️ Stack Technique

- **Runtime** : Node.js
- **Langage** : TypeScript
- **Framework Web** : Express
- **Backend-as-a-Service** : Parse Server
- **Base de données** : MongoDB

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local ou Atlas)
- Un gestionnaire de paquets (npm, yarn ou pnpm)

## ⚙️ Installation

1.  **Cloner le dépôt** :
    ```bash
    git clone <votre-url-repo>
    cd Parse-Todo-Ts
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Configurer les variables d'environnement** :
    Copiez le fichier `.env.example` vers `.env` et remplissez vos informations.
    ```bash
    cp .env.example .env
    ```

    Exemple de configuration `.env` :
    ```env
    PORT="8000"
    PARSE_APPID="votre_app_id"
    PARSE_MK="votre_master_key"
    SERVER_URL="http://127.0.0.1:8000/parse"
    DB_URL="mongodb://localhost:27017/TodoList"
    ```

## 🏃 Lancement

1.  **Compiler le projet** :
    ```bash
    npm run build
    ```

2.  **Démarrer le serveur** :
    ```bash
    npm start
    ```

Le serveur sera accessible sur `http://127.0.0.1:8000`.

## 📡 API Cloud Functions

Les fonctions suivantes sont disponibles via le SDK Parse ou l'API REST :

### 📝 `addTodo`
Ajoute une nouvelle tâche.
- **Paramètres** : `title` (obligatoire), `description`, `status`, `dueDate`.

### 📚 `getTodos`
Récupère la liste de toutes les tâches.

### 🔍 `getTodo`
Récupère une tâche spécifique par son ID.
- **Paramètres** : `objectId`.

### 🔄 `updateTodo`
Met à jour une tâche existante.
- **Paramètres** : `objectId`, `title`, `description`, `status`, `dueDate`.

### 🗑️ `deleteTodo`
Supprime une tâche.
- **Paramètres** : `objectId`.

## 📂 Structure du Projet

```text
src/
├── cloud/
│   ├── functions/       # Logique des Cloud Functions (CRUD)
│   └── main.ts          # Point d'entrée de la Cloud Code
├── Interface/
│   └── TodoInterface.ts # Définitions des types TypeScript
├── utils/
│   └── env.ts           # Utilitaire de chargement des variables d'env
├── index.ts             # Initialisation de Parse Server et Express
```

## 📄 Licence

Ce projet est sous licence [ISC](LICENSE).
