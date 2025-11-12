
# ProfessionsAfterBUT - Génie Industriel et Maintenance

Site web présentant les métiers possibles après un BUT Génie Industriel et Maintenance.

## 📋 Contenu

Ce projet comprend deux versions d'affiche :

### 1. Affiche Complète en Ligne (`index.html`)
Affiche détaillée consultable en ligne avec toutes les informations sur les métiers après BUT GIM :
- Qualités et compétences nécessaires
- Expérience personnelle avec journée type
- Ressentis (points forts/faibles, likes/dislikes)
- Rémunération selon les niveaux d'expérience
- Évolutions de carrière possibles
- Principaux métiers accessibles

### 2. Sommaire A3 pour Impression (`a3-print.html`)
Version compacte format A3 pour impression avec :
- Résumé des compétences clés
- Aperçu d'une journée type
- Points forts et faibles
- Informations salariales
- Liste des métiers principaux
- Évolutions de carrière
- **QR Code** vers l'affiche complète en ligne

## 🚀 Utilisation

### Consultation en ligne
1. Ouvrez `index.html` dans un navigateur web
2. Naviguez à travers les différentes sections

### Impression A3
1. Ouvrez `a3-print.html` dans un navigateur web
2. Utilisez Ctrl+P (ou Cmd+P sur Mac) pour imprimer
3. Sélectionnez le format A3 dans les paramètres d'impression
4. Le QR code généré automatiquement pointera vers l'affiche complète

## 📁 Structure du Projet

```
ProfessionsAfterBUT/
├── public/             # Dossier de déploiement GitHub Pages
│   ├── index.html      # Affiche complète en ligne
│   ├── a3-print.html   # Sommaire A3 pour impression
│   ├── styles.css      # Styles pour l'affiche complète
│   ├── a3-print.css    # Styles spécifiques A3
│   ├── script.js       # JavaScript (QR code, animations)
│   ├── qrcode.min.js   # Bibliothèque QR code
│   ├── InterviewQuestionList-AfterBUT.pdf  # PDF des questions
│   └── CNAME           # Configuration domaine personnalisé
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # Workflow de déploiement
└── README.md           # Documentation
```

## 🛠️ Technologies Utilisées

- **HTML5** : Structure des pages
- **CSS3** : Stylisation et design responsive
- **JavaScript** : Interactivité et génération du QR code
- **QRCode.js** : Bibliothèque pour la génération de QR codes

## 📱 Responsive Design

Les deux versions sont optimisées pour :
- Desktop (écrans larges)
- Tablettes
- Smartphones
- Impression (format A3 pour le sommaire)

## ✨ Fonctionnalités

- Design moderne et professionnel
- Navigation fluide
- Animations au scroll
- QR code dynamique
- Optimisation pour l'impression
- 100% responsive

## 🌐 Déploiement GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages avec un domaine personnalisé.

### URL de déploiement
- **Domaine personnalisé** : https://c.ronzz.org
- **URL GitHub Pages par défaut** : https://ron-ronzz-org.github.io/ProfessionsAfterBUT/

### Configuration automatique

Le déploiement est automatique via GitHub Actions. À chaque push sur la branche `main`, le workflow `.github/workflows/deploy-pages.yml` :
1. Clone le dépôt
2. Configure GitHub Pages
3. Déploie le contenu du dossier `public/`

### Actions requises par le propriétaire du dépôt

#### 1. Activer GitHub Pages dans les paramètres du dépôt
1. Aller dans **Settings** > **Pages**
2. Dans **Source**, sélectionner **GitHub Actions**

#### 2. Configurer le domaine personnalisé
1. Dans **Settings** > **Pages** > **Custom domain**
2. Entrer : `c.ronzz.org`
3. Cocher **Enforce HTTPS** (une fois le DNS configuré)

#### 3. Configurer les enregistrements DNS
Ajouter les enregistrements suivants dans la configuration DNS de `ronzz.org` :

**Pour un sous-domaine avec CNAME** :
```
Type: CNAME
Nom: c
Valeur: ron-ronzz-org.github.io
TTL: 3600 (ou automatique)
```

**Ou avec des enregistrements A (alternatif)** :
```
Type: A
Nom: c
Valeur: 185.199.108.153
```
```
Type: A
Nom: c
Valeur: 185.199.109.153
```
```
Type: A
Nom: c
Valeur: 185.199.110.153
```
```
Type: A
Nom: c
Valeur: 185.199.111.153
```

#### 4. Vérification
- Attendre la propagation DNS (peut prendre jusqu'à 48h, généralement quelques minutes)
- Vérifier que le site est accessible à https://c.ronzz.org
- Le certificat SSL sera automatiquement généré par GitHub

## 📄 Licence

© 2024 - BUT Génie Industriel et Maintenance
=======
# affiche sur métier possible après BUT Génie Industriel et Maintenance

## Exigences
- sommaire A3 à imprimer
  - avec code QR à l'affiche complète
- affiche complète pour consultation en ligne
- Orthographe : aucune faute grammaticale
- HTML/CSS/JS*
  - JS : pour version en ligne

## Points clés

- Qualités et compétences nécessaires
- Expérience personnelle
  - une journée type
  - ressentis
    - points forts/faibles
    - ce que j’aime, ce que je déteste...
      - charge de travail ?
      - nature d'activité ?
- Rémunération : (à rechercher)
  - [En France](https://sup-recherche.org/votre-statut/remuneration/)
- Évolutions possibles
  - professeur d’université
  - médiateur scientifique
  - ingénieur R&D

