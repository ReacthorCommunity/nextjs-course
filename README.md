# Reacthor - Cours sur NextJS

> Ce projet est destiné à vous présenter le développement d'une application avec NextJS en lien avec les cours sur Reacthor.

---

# Pour commencer

Pour des raisons de simplicité (de mon côté), ce projet écoute le port `3001` en local. 

Pour récupérer et installer le projet : 

```sh
git clone https://github.com/ReacthorCommunity/nextjs-course.git
cd nextjs-course
npm install
npm run dev
```

Vous pouvez aller sur l'URL : [http://localhost:3001](http://localhost:3001)

## Laisser le port par défaut

Pour ceux qui souhaitent laisser le port par défaut (3000), il vous suffit de modifier le fichier `package.json` et de changer le script `dev` avec ceci :

```sh
"dev": "next dev",
```