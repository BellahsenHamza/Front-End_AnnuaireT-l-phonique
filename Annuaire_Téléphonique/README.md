# Travail pratique 01 programmation_web_3

### Architecture app
```
tp01
    ├── client (contient les fichiers pour l'application cliente)
    ├── server (contient les fichier pour le serveur de donnees)
```

### Configuration et installation des dependances
```
cd ./client
npm install
cd ../server
npm install
```

### Lancer projet avec serveur de donnees
```bash
cd ./client
npm run serve
cd ../server
npm run start
```

### Routes pour serveur de donnes
- Les routes seront affiches dans le terminal apres l'execution de `npm run start`
- Fichier db.json se trouve dans : [./server/data/db.json](url)
- **Ajouter les routes au fur et a mesure qu'on ajoute des donnees**
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