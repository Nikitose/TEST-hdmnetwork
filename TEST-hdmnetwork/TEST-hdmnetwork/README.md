
# TEST-hdmnetwork
# **Gestionnaire de Tâches avec React, Axios et MUI**

*Par KUZNETSOV Nikita*

---

---

## **Installation**

### **1. Clonage des dépôts**

J'ai forké les dépôts nécessaires sur mon compte GitHub, puis cloné les deux répertoires sur ma machine locale à l'aide de Git Bash :

git clone https://github.com/Nikitose/hdm-todo-test-api.git
git clone https://github.com/Nikitose/hdm-todo-test-web-app.git


### **2. Installation de Yarn**

Pour gérer les dépendances, j'ai installé **Yarn** via PowerShell. Cette étape a été complexe, car j'ai rencontré des difficultés pour l'installation de Yarn. Après plusieurs tentatives et recherches, j'ai réussi à l'installer correctement. Pour installer Yarn, j'ai utilisé la commande suivante :

npm install --global yarn

### **3. Installation des dépendances**

Une fois **Yarn** installé, j'ai navigué dans les répertoires des projets et installé les dépendances pour chaque projet :

cd hdm-todo-test-api
yarn install

cd ../hdm-todo-test-web-app
yarn install

### **4. Configuration de la base de données**
J'ai créé la base de données todo_app à l'aide de XAMPP. Pour ce faire, j'ai ouvert le terminal de XAMPP et exécuté la commande suivante :

bash
Copier
Modifier
mysql -u root -p
CREATE DATABASE todo_app;

### **5. Configuration de l'environnement**
Dans le fichier .env du répertoire hdm-todo-test-api, j'ai mis à jour la variable DATABASE_URL pour correspondre à ma configuration locale :

env
Copier
Modifier
DATABASE_URL="mysql://root:@localhost:3306/todo_app"

### **6. Migration de la base de données**
J'ai exécuté les migrations pour configurer la base de données :

bash
Copier
Modifier
cd hdm-todo-test-api
yarn prisma migrate dev

### **7. Démarrage des serveurs**
Pour démarrer le backend et le frontend, j'ai utilisé les commandes suivantes :

Backend :
bash
Copier
Modifier
cd hdm-todo-test-api
yarn start
Frontend :
bash
Copier
Modifier
cd ../hdm-todo-test-web-app
yarn dev
Cependant, j'ai rencontré un problème où le serveur local ne se lançait pas. Après avoir vidé le cache DNS en exécutant la commande suivante dans PowerShell :

bash
Copier
Modifier
Clear-DnsClientCache
Le problème a été résolu et le serveur a démarré correctement.

### **Développement des fonctionnalités**
Backend
Création et édition de tâches : J'ai implémenté les points de terminaison API pour la création et l'édition de tâches en utilisant Express.js et Prisma.
Frontend
Création et édition de tâches : J'ai développé les interfaces utilisateur permettant la création et l'édition de tâches en utilisant React et MUI.

Suppression de tâches : J'ai intégré la fonctionnalité de suppression de tâches en appelant le point de terminaison API approprié.

### **Difficultés rencontrées**
Installation de Yarn : J'ai rencontré des difficultés pour installer Yarn, ce qui a retardé le démarrage du projet. Après plusieurs tentatives et recherches, j'ai réussi à l'installer correctement.

Problème de démarrage du serveur : Le serveur local ne se lançait pas initialement. Après avoir vidé le cache DNS en exécutant la commande Clear-DnsClientCache dans PowerShell, le problème a été résolu.

## **Difficulté principale rencontrée**
Le principal défi réside dans le fait que le langage utilisé était presque nouveau pour moi, ayant eu peu d'expérience avec celui-ci en dehors du cadre universitaire. Malgré cela, je suis parvenu à réaliser certaines tâches dans le cadre de cet exercice.

Je ne fournirai pas de vidéo, car je n'ai finalement pas réussi à faire fonctionner la page et à résoudre l'erreur rencontrée.



