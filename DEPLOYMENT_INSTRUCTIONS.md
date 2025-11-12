# Instructions de Déploiement - GitHub Pages

## 📋 Résumé des Changements Effectués

✅ **Dossier public/** créé avec tous les fichiers nécessaires
✅ **Workflow GitHub Actions** configuré pour le déploiement automatique
✅ **Fichier CNAME** créé pour le domaine personnalisé `c.ronzz.org`
✅ **README.md** mis à jour avec les instructions complètes

---

## 🚀 Actions Requises de Votre Part

Pour activer le déploiement GitHub Pages avec le domaine personnalisé `c.ronzz.org`, vous devez effectuer les actions suivantes :

### Étape 1 : Activer GitHub Pages dans les Paramètres du Dépôt

1. Allez sur https://github.com/Ron-RONZZ-org/ProfessionsAfterBUT
2. Cliquez sur **Settings** (Paramètres) dans le menu du dépôt
3. Dans le menu latéral gauche, cliquez sur **Pages**
4. Dans la section **Build and deployment** :
   - **Source** : Sélectionnez **GitHub Actions** (au lieu de "Deploy from a branch")
   - Cela permettra au workflow que j'ai créé de déployer automatiquement le site

### Étape 2 : Configurer le Domaine Personnalisé (après l'activation de Pages)

1. Toujours dans **Settings** > **Pages**
2. Dans la section **Custom domain** :
   - Entrez : `c.ronzz.org`
   - Cliquez sur **Save**
3. GitHub va vérifier le domaine (cela peut prendre quelques minutes)
4. Une fois vérifié, **cochez** la case **Enforce HTTPS** (recommandé pour la sécurité)

### Étape 3 : Configurer les Enregistrements DNS

Vous devez configurer les enregistrements DNS dans votre fournisseur de domaine (celui qui gère `ronzz.org`).

#### Option A : Utiliser un enregistrement CNAME (Recommandé)

Ajoutez cet enregistrement DNS :

```
Type:   CNAME
Nom:    c
Valeur: ron-ronzz-org.github.io.
TTL:    3600 (ou laissez automatique)
```

**Note** : Le point final après `.io.` est important !

#### Option B : Utiliser des enregistrements A (Alternative)

Si votre fournisseur DNS ne supporte pas les CNAME pour les sous-domaines, utilisez ces enregistrements A :

```
Type: A | Nom: c | Valeur: 185.199.108.153
Type: A | Nom: c | Valeur: 185.199.109.153
Type: A | Nom: c | Valeur: 185.199.110.153
Type: A | Nom: c | Valeur: 185.199.111.153
```

### Étape 4 : Fusionner la Pull Request

1. Une fois toutes les configurations ci-dessus effectuées
2. Allez dans l'onglet **Pull Requests**
3. Trouvez la PR créée par Copilot
4. Vérifiez les changements
5. Cliquez sur **Merge pull request** pour fusionner vers la branche `main`

### Étape 5 : Vérification du Déploiement

1. Une fois la PR fusionnée, le workflow GitHub Actions se lancera automatiquement
2. Allez dans l'onglet **Actions** du dépôt pour voir la progression
3. Le déploiement prend généralement 1-2 minutes
4. Une fois terminé, votre site sera accessible à :
   - **https://c.ronzz.org** (domaine personnalisé - après propagation DNS)
   - **https://ron-ronzz-org.github.io/ProfessionsAfterBUT/** (URL par défaut)

---

## ⏱️ Temps d'Attente

- **Propagation DNS** : Peut prendre de quelques minutes à 48 heures (généralement < 1 heure)
- **Certificat SSL** : Généré automatiquement par GitHub (quelques minutes après configuration du domaine)
- **Déploiement** : 1-2 minutes après chaque push sur `main`

---

## 🔍 Comment Vérifier que Tout Fonctionne

### Vérifier le DNS (depuis votre terminal)
```bash
# Vérifier l'enregistrement CNAME
dig c.ronzz.org CNAME +short

# Devrait retourner : ron-ronzz-org.github.io.
```

### Vérifier le déploiement GitHub Actions
1. Onglet **Actions** du dépôt
2. Cherchez le workflow "Deploy to GitHub Pages"
3. Il doit être en vert (succès)

### Tester le site
1. Ouvrez https://c.ronzz.org dans un navigateur
2. Vérifiez que :
   - La page principale s'affiche correctement
   - Les styles CSS sont chargés
   - Le JavaScript fonctionne (notamment le QR code sur a3-print.html)
   - Le PDF est accessible

---

## 📂 Structure du Projet

Après ces changements, votre projet a cette structure :

```
ProfessionsAfterBUT/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # Workflow de déploiement automatique
├── public/                      # 📦 Dossier déployé sur GitHub Pages
│   ├── CNAME                    # Configuration domaine personnalisé
│   ├── index.html               # Page principale
│   ├── a3-print.html            # Version A3 imprimable
│   ├── styles.css               # Styles principaux
│   ├── a3-print.css             # Styles pour A3
│   ├── script.js                # JavaScript principal
│   ├── qrcode.min.js            # Bibliothèque QR code
│   └── InterviewQuestionList-AfterBUT.pdf
├── index.html                   # (Source - reste dans le dépôt)
├── a3-print.html                # (Source - reste dans le dépôt)
├── styles.css                   # (Source - reste dans le dépôt)
├── a3-print.css                 # (Source - reste dans le dépôt)
├── script.js                    # (Source - reste dans le dépôt)
└── README.md                    # Documentation complète
```

**Note** : Les fichiers dans le dossier `public/` sont des copies des fichiers sources. Seul le contenu de `public/` est déployé sur GitHub Pages.

---

## 🔄 Déploiements Futurs

Une fois configuré, **chaque modification** poussée sur la branche `main` déclenchera automatiquement un nouveau déploiement.

Pour modifier le site :
1. Modifiez les fichiers dans le dossier `public/`
2. Committez et poussez vers `main`
3. Le workflow GitHub Actions déploiera automatiquement les changements

**Ou** modifiez les fichiers sources (hors de `public/`) et copiez-les ensuite dans `public/`.

---

## ❓ Résolution de Problèmes

### Le site ne s'affiche pas à c.ronzz.org
- Vérifiez que le DNS est correctement configuré (`dig c.ronzz.org`)
- Attendez la propagation DNS (peut prendre jusqu'à 48h)
- Vérifiez dans Settings > Pages que le domaine personnalisé est bien configuré

### Le workflow GitHub Actions échoue
- Vérifiez dans Settings > Pages que "Source" est bien sur "GitHub Actions"
- Vérifiez que le dépôt a les bonnes permissions

### Le certificat SSL ne fonctionne pas
- Assurez-vous que le DNS est correctement configuré
- Attendez quelques minutes que GitHub génère le certificat
- Cochez "Enforce HTTPS" dans Settings > Pages

### Les fichiers CSS/JS ne se chargent pas
- Vérifiez que tous les fichiers sont bien dans le dossier `public/`
- Vérifiez que les chemins dans les fichiers HTML sont relatifs (sans `/` au début)

---

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes :
1. Vérifiez les logs dans l'onglet **Actions**
2. Consultez la [documentation GitHub Pages](https://docs.github.com/en/pages)
3. Contactez le support GitHub si nécessaire

---

## ✅ Checklist Finale

Avant de considérer le déploiement comme terminé :

- [ ] Activer GitHub Pages (Settings > Pages > Source: GitHub Actions)
- [ ] Configurer le domaine personnalisé dans GitHub (Settings > Pages > Custom domain)
- [ ] Configurer les enregistrements DNS (CNAME ou A records)
- [ ] Fusionner la Pull Request vers main
- [ ] Attendre le déploiement (vérifier dans Actions)
- [ ] Vérifier que le site est accessible à https://c.ronzz.org
- [ ] Activer "Enforce HTTPS" dans Settings > Pages
- [ ] Tester toutes les pages et fonctionnalités

---

**Bon déploiement ! 🚀**
