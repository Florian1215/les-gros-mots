# LES GROS MOTS — site web

Copie statique du site web de l'agence **LES GROS MOTS**.

Le site a été conçu sur [Webflow](https://webflow.com) (publié sur `lesgrosmotsfinal.webflow.io`), puis exporté en HTML statique avec [HTTrack Website Copier](https://www.httrack.com/) afin de pouvoir être consulté, archivé et hébergé indépendamment de Webflow.

L'interface du site reprend les codes d'un bureau d'ordinateur : dossiers, fenêtres, corbeille, fiches équipe, etc.

![Page Home](.git-medias/homepage.png)
![Page Agence](.git-medias/c57230b7-330f-4dbb-acb2-18f2c025008a.webp)
![Page Agence/psd](.git-medias/8e22dd76-1eb1-4dd1-abd2-87902f4ccc33.webp)
![Page very safe place](.git-medias/21ecd92d-4e36-4120-ac87-407f368238b9.webp)
![Page Agence2](.git-medias/5868af30-4a2f-4b68-b873-fc66b816447c.webp)

## Structure du projet

```
.
├── index.html                    # Index généré par HTTrack (redirige vers la page d'accueil)
├── lesgrosmotsfinal.webflow.io/  # Pages HTML du site exportées depuis Webflow
├── cdn.prod.website-files.com/   # Assets Webflow (CSS, JS, images, polices, favicons)
├── app.lesgrosmots.com/          # Ressources complémentaires (CSS global, scrollbar, médias)
├── procraste-nobel.com/          # Ressources externes récupérées lors de l'aspiration
└── hts-cache/                    # Cache HTTrack (permet de mettre à jour la copie)
```

HTTrack réécrit les liens en chemins relatifs : chaque domaine aspiré devient un dossier, et les pages y font référence via `../<domaine>/...`.

## Consulter le site en local

Ouvrir directement `index.html` dans un navigateur
