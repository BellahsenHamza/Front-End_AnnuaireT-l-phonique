# Annuaire telephonique

### Architecture app
```
tp01
    ├── client (contient les fichiers pour l'application cliente)
    ├── server (contient les fichier pour le serveur de données)
```

### Configuration et installation des dépendances
```
cd ./client
npm install
cd ../server
npm install
```

### Lancer projet avec serveur de données
```bash
cd ./client
npm run serve
cd ../server
npm run start
```

### Routes pour serveur de données
- Les routes seront affichées dans le terminal apres l'exécution de `npm run start`
- Fichier db.json se trouve dans : [./server/data/db.json](url)
```
http://localhost:3000 # Home  
http://localhost:3000/contacts    GET
```

### Compiler pour la version de production
```bash
npm run build
```

### Linter les fichiers et fix
```bash
npm run lint
```
