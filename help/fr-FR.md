# Guide d'utilisation d'Ink Resume

## Introduction
Ink Resume est un éditeur de CV en ligne basé sur Markdown qui prend en charge l'aperçu en temps réel, le changement de langue multiple et la sortie d'impression professionnelle.

## Fonctionnalités principales

### 1. Changement de langue
- Prend en charge 7 langues : chinois, anglais, japonais, coréen, français, allemand, espagnol
- Cliquez sur les boutons de langue en haut pour changer
- Charge automatiquement les modèles par défaut de la langue correspondante après changement

### 2. Sélection de Modèle
- Cliquez sur le bouton "Choisir un Modèle" pour faire glisser le panneau de sélection de modèle depuis la gauche.
- Fournit divers modèles prédéfinis (par exemple, Classique, Moderne, Élégant, Minimal, Professionnel), chacun avec un style de conception unique.
- Cliquez sur l'aperçu d'un modèle pour l'appliquer, et votre CV se mettra instantanément à jour avec le style de ce modèle.
- Les modèles affectent la mise en page globale, les polices, les couleurs et les styles de séparateur de votre CV.
- Après avoir sélectionné un modèle, vous pouvez toujours ajuster la police et la couleur du séparateur dans "Personnalisation du style"; ces personnalisations se superposeront aux styles du modèle.

### 3. Édition des informations de base
#### Photo personnelle
- Cliquez sur la zone photo pour télécharger une photo personnelle
- Prend en charge les formats d'image courants (JPG, PNG, etc.)
- Les photos sont automatiquement redimensionnées dans l'aperçu

#### Informations de base
- Modifiez les informations personnelles en utilisant la syntaxe Markdown
- Prend en charge les titres, le texte en gras, les liens et autres formats
- Exemple de format :
  ```markdown
  ### Jean Dupont
  **Téléphone :** +33-1-23-45-67-89  
  **Email :** jean.dupont@example.com  
  **Adresse :** Paris, France
  ```

### 4. Gestion des sections du CV
#### Ajout de nouvelles sections
- Cliquez sur le bouton "+ Ajouter une nouvelle section"
- Saisissez le titre de la section (par exemple "Expérience professionnelle", "Formation")
- Chaque section prend en charge l'édition Markdown

#### Modification du contenu des sections
**Mode d'édition normal :**
- Tapez directement dans la zone de texte
- Prend en charge l'indentation avec la touche Tab (4 espaces)

**Mode d'édition focalisée :**
- Cliquez sur le bouton 📝 en haut à droite de la zone de texte
- Ou double-cliquez sur la zone de texte pour entrer en édition focalisée
- Un grand panneau d'édition glisse depuis la gauche
- Prend en charge la sauvegarde automatique (délai de 1 seconde)
- Appuyez sur ESC ou cliquez sur "Quitter l'édition focalisée" pour sortir

#### Réorganisation des sections
- Cliquez sur le bouton ↕ à côté du titre de section
- Faites glisser vers la position cible pour réorganiser

#### Suppression de sections
- Cliquez sur le bouton "Supprimer" en haut à droite de la section
- Confirmez pour supprimer cette section

### 5. Support de la syntaxe Markdown
Prend en charge la syntaxe Markdown complète :

#### Titres
```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
```

#### Formatage du texte
```markdown
**Texte en gras**
*Texte en italique*
```

#### Listes
```markdown
- Élément de liste non ordonnée 1
- Élément de liste non ordonnée 2
  - Sous-élément de liste
  - Sous-élément de liste

1. Élément de liste ordonnée 1
2. Élément de liste ordonnée 2
```

#### Liens
```markdown
[Texte du lien](https://example.com)
```

### 6. Personnalisation du style
#### Sélection de police
- Police par défaut : Microsoft YaHei + Arial
- SimSun : Convient aux documents officiels
- Times New Roman : Police anglaise classique
- Arial : Police moderne sans-serif

#### Couleur du séparateur
- Utilisez le sélecteur de couleur pour personnaliser la couleur du séparateur
- Aperçu couleur en temps réel
- Par défaut : jaune doré (#b8860b)

#### Réinitialisation des styles
- Cliquez sur "Réinitialiser les styles" pour restaurer tous les paramètres par défaut

### 7. Paramètres d'impression
Cliquez sur le bouton "👇Imprimer CV👆" à droite pour entrer dans les paramètres d'impression :

#### Paramètres de page
- **Marges gauche/droite** : Ajustable 1-25mm
- **Mise à l'échelle globale** : Ajustable 50%-150%
- Mise à l'échelle 120% recommandée pour de meilleurs résultats

#### Paramètres de police
- **Taille de police du titre** : Ajustable 12-28px
- **Taille de police du contenu** : Ajustable 8-20px
- **Hauteur de ligne** : Ajustable 0.2-1.5

#### Avis d'impression
Lors de l'impression, dans la boîte de dialogue d'impression système :
- Sélectionnez "Enregistrer au format PDF"
- Décochez "En-têtes et pieds de page" dans "Plus de paramètres"

### 8. Gestion des données
#### Exportation de données
- Cliquez sur le bouton "Exporter les données"
- Télécharge un fichier de données au format YAML
- Contient tout le contenu du CV et les paramètres

#### Importation de données
- Cliquez sur le bouton "Importer les données"
- Sélectionnez le fichier YAML précédemment exporté
- Restaure automatiquement tout le contenu et les paramètres

#### Effacer le cache
- Cliquez sur le bouton "Effacer le cache"
- Efface les données stockées localement dans le navigateur
- Utilisez avec prudence : effacera tout le contenu non exporté

### 9. Aperçu en temps réel
- La zone d'aperçu de droite affiche le CV en temps réel
- Calcule automatiquement et affiche le nombre de pages
- L'aperçu correspond à la sortie d'impression

## Conseils d'utilisation

### 1. Suggestions d'organisation du contenu
- **Informations de base** : Nom, coordonnées, résumé professionnel
- **Expérience professionnelle** : Ordre chronologique inverse, mettre en évidence les réalisations clés
- **Formation** : Diplômes, spécialités, cours pertinents
- **Expérience de projet** : Descriptions de projets importants et stacks technologiques
- **Compétences** : Compétences professionnelles, langues, certifications

### 2. Suggestions de format Markdown
```markdown
## Expérience professionnelle

### Ingénieur logiciel senior | Société ABC | 2020.01 - Présent
- Responsable de la conception d'architecture et du développement de produits centraux
- A dirigé une équipe de 5 personnes pour livrer des projets importants
- Stack technique : React, Node.js, MongoDB

### Ingénieur logiciel | Société XYZ | 2018.06 - 2019.12
- Participé au développement et à la maintenance de plusieurs applications web
- Optimisé les performances du système, amélioré la vitesse de réponse de 30%
```

### 3. Alignement multi-espaces
Utilisez plusieurs espaces pour l'alignement si nécessaire :
```markdown
**Nom :**       Jean Dupont
**Téléphone :** +33-1-23-45-67-89
**Email :**     jean.dupont@example.com
```

### 4. Recommandations de sauvegarde de données
- Exportez régulièrement les données pour la sauvegarde
- Exportez la version actuelle avant les modifications importantes
- Maintenez plusieurs versions de fichiers de CV

## Raccourcis clavier

- **Tab** : Insérer une indentation de 4 espaces dans les zones de texte
- **Ctrl+S** : Sauvegarde manuelle en mode d'édition focalisée
- **ESC** : Quitter le mode d'édition focalisée

## Protection de la vie privée

- Toutes les données sont traitées localement dans le navigateur uniquement
- Aucune information personnelle n'est téléchargée vers les serveurs
- Peut être utilisé complètement hors ligne

## Questions fréquemment posées

### Q : Comment créer un CV multi-pages ?
R : Le contenu est automatiquement paginé, le nombre de pages s'affiche en haut à droite. Il est recommandé de rester dans les 2 pages.

### Q : Pourquoi la sortie d'impression diffère-t-elle de l'aperçu ?
R : Vérifiez les paramètres d'impression, assurez-vous d'utiliser la mise à l'échelle et les marges recommandées.

### Q : Comment sauvegarder le CV ?
R : Utilisez "Exporter les données" pour sauvegarder le fichier YAML, utilisez "Importer les données" pour restaurer la prochaine fois.

### Q : Quels formats d'image sont pris en charge ?
R : Prend en charge JPG, PNG, GIF et autres formats courants. Format JPG recommandé.

### Q : Comment partager le CV avec d'autres ?
R : Il est recommandé d'exporter au format PDF pour le partage, ou d'exporter le fichier de données pour que d'autres l'importent.

## Support technique

Pour les problèmes, veuillez visiter la [page du projet GitHub](https://github.com/mycloudai/Ink-Resume) pour soumettre un Issue.