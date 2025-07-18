# Ink Resume Benutzerhandbuch

## Einführung
Ink Resume ist ein Markdown-basierter Online-Lebenslauf-Editor, der Echtzeit-Vorschau, mehrsprachigen Wechsel und professionelle Druckausgabe unterstützt.

## Hauptfunktionen

### 1. Sprachwechsel
- Unterstützt 7 Sprachen: Chinesisch, Englisch, Japanisch, Koreanisch, Französisch, Deutsch, Spanisch
- Klicken Sie auf die Sprachbuttons oben zum Wechseln
- Lädt automatisch entsprechende Sprachvorlagen nach dem Wechsel

### 2. Bearbeitung der Grundinformationen
#### Persönliches Foto
- Klicken Sie auf den Fotobereich, um ein persönliches Foto hochzuladen
- Unterstützt gängige Bildformate (JPG, PNG, etc.)
- Fotos werden in der Vorschau automatisch angepasst

#### Grundinformationen
- Bearbeiten Sie persönliche Informationen mit Markdown-Syntax
- Unterstützt Überschriften, fetten Text, Links und andere Formate
- Formatbeispiel:
  ```markdown
  ### Max Mustermann
  **Telefon:** +49-30-12345678  
  **E-Mail:** max.mustermann@example.com  
  **Adresse:** Berlin, Deutschland
  ```

### 3. Verwaltung der Lebenslauf-Abschnitte
#### Neue Abschnitte hinzufügen
- Klicken Sie auf die Schaltfläche "+ Neuen Abschnitt hinzufügen"
- Geben Sie den Abschnittstitel ein (z.B. "Berufserfahrung", "Ausbildung")
- Jeder Abschnitt unterstützt Markdown-Bearbeitung

#### Bearbeitung des Abschnittsinhalts
**Normaler Bearbeitungsmodus:**
- Tippen Sie direkt in das Textfeld
- Unterstützt Tab-Taste Einrückung (4 Leerzeichen)

**Fokussierter Bearbeitungsmodus:**
- Klicken Sie auf die 📝 Schaltfläche oben rechts im Textfeld
- Oder doppelklicken Sie auf das Textfeld, um die fokussierte Bearbeitung zu betreten
- Großes Editor-Panel gleitet von links herein
- Unterstützt automatisches Speichern (1 Sekunde Verzögerung)
- Drücken Sie ESC oder klicken Sie auf "Fokussierte Bearbeitung beenden" zum Beenden

#### Neuordnung der Abschnitte
- Klicken Sie auf die ↕ Schaltfläche neben dem Abschnittstitel
- Ziehen Sie zur Zielposition, um neu zu ordnen

#### Löschen von Abschnitten
- Klicken Sie auf die "Löschen" Schaltfläche oben rechts im Abschnitt
- Bestätigen Sie, um diesen Abschnitt zu löschen

### 4. Markdown-Syntax-Unterstützung
Unterstützt vollständige Markdown-Syntax:

#### Überschriften
```markdown
# Überschrift Ebene 1
## Überschrift Ebene 2
### Überschrift Ebene 3
```

#### Textformatierung
```markdown
**Fetter Text**
*Kursiver Text*
```

#### Listen
```markdown
- Ungeordneter Listeneintrag 1
- Ungeordneter Listeneintrag 2
  - Unter-Listeneintrag
  - Unter-Listeneintrag

1. Geordneter Listeneintrag 1
2. Geordneter Listeneintrag 2
```

#### Links
```markdown
[Link-Text](https://example.com)
```

### 5. Stil-Anpassung
#### Schriftauswahl
- Standardschrift: Microsoft YaHei + Arial
- SimSun: Geeignet für offizielle Dokumente
- Times New Roman: Klassische englische Schrift
- Arial: Moderne serifenlose Schrift

#### Trennlinienfarbe
- Verwenden Sie den Farbwähler, um die Trennlinienfarbe anzupassen
- Echtzeit-Farbvorschau
- Standard ist goldgelb (#b8860b)

#### Stile zurücksetzen
- Klicken Sie auf "Stile zurücksetzen", um alle Anpassungen zu restaurieren

### 6. Druckeinstellungen
Klicken Sie auf die "👇Lebenslauf drucken👆" Schaltfläche rechts, um zu den Druckeinstellungen zu gelangen:

#### Seiteneinstellungen
- **Linke/Rechte Ränder**: Einstellbar 1-25mm
- **Gesamtskalierung**: Einstellbar 50%-150%
- 120% Skalierung für beste Ergebnisse empfohlen

#### Schrifteinstellungen
- **Titel-Schriftgröße**: Einstellbar 12-28px
- **Inhalt-Schriftgröße**: Einstellbar 8-20px
- **Zeilenhöhe**: Einstellbar 0.2-1.5

#### Druckhinweis
Beim Drucken im System-Druckdialog:
- Wählen Sie "Als PDF speichern"
- Deaktivieren Sie "Kopf- und Fußzeilen" in "Weitere Einstellungen"

### 7. Datenverwaltung
#### Datenexport
- Klicken Sie auf die "Daten exportieren" Schaltfläche
- Lädt YAML-Format Datendatei herunter
- Enthält alle Lebenslaufinhalte und Einstellungen

#### Datenimport
- Klicken Sie auf die "Daten importieren" Schaltfläche
- Wählen Sie die zuvor exportierte YAML-Datei
- Stellt automatisch alle Inhalte und Einstellungen wieder her

#### Cache leeren
- Klicken Sie auf die "Cache leeren" Schaltfläche
- Löscht lokal gespeicherte Browser-Daten
- Vorsichtig verwenden: löscht alle nicht exportierten Inhalte

### 8. Echtzeit-Vorschau
- Rechter Vorschaubereich zeigt Lebenslauf in Echtzeit an
- Berechnet automatisch und zeigt Seitenzahl an
- Vorschau entspricht der Druckausgabe

## Verwendungstipps

### 1. Inhaltsorganisations-Vorschläge
- **Grundinformationen**: Name, Kontaktdaten, berufliche Zusammenfassung
- **Berufserfahrung**: Umgekehrte chronologische Reihenfolge, wichtige Erfolge hervorheben
- **Ausbildung**: Abschlüsse, Hauptfächer, relevante Kurse
- **Projekterfahrung**: Wichtige Projektbeschreibungen und Technologie-Stacks
- **Fähigkeiten**: Berufliche Fähigkeiten, Sprachen, Zertifizierungen

### 2. Markdown-Format-Vorschläge
```markdown
## Berufserfahrung

### Senior Software-Ingenieur | ABC Unternehmen | 2020.01 - Gegenwart
- Verantwortlich für Kernprodukt-Architekturdesign und -entwicklung
- Führte ein 5-köpfiges Team zur Lieferung wichtiger Projekte
- Technologie-Stack: React, Node.js, MongoDB

### Software-Ingenieur | XYZ Unternehmen | 2018.06 - 2019.12
- Teilnahme an Entwicklung und Wartung mehrerer Webanwendungen
- Optimierte Systemleistung, verbesserte Antwortgeschwindigkeit um 30%
```

### 3. Multi-Leerzeichen-Ausrichtung
Verwenden Sie mehrere Leerzeichen für Ausrichtung wo nötig:
```markdown
**Name:**     Max Mustermann
**Telefon:**  +49-30-12345678
**E-Mail:**   max.mustermann@example.com
```

### 4. Datensicherungs-Empfehlungen
- Exportieren Sie regelmäßig Daten zur Sicherung
- Exportieren Sie aktuelle Version vor wichtigen Änderungen
- Pflegen Sie mehrere Versionen von Lebenslaufdateien

## Tastaturkürzel

- **Tab**: 4-Leerzeichen-Einrückung in Textfeldern einfügen
- **Ctrl+S**: Manuelles Speichern im fokussierten Bearbeitungsmodus
- **ESC**: Fokussierten Bearbeitungsmodus beenden

## Datenschutz

- Alle Daten werden nur lokal im Browser verarbeitet
- Keine persönlichen Informationen werden zu Servern hochgeladen
- Kann vollständig offline verwendet werden

## Häufig gestellte Fragen

### F: Wie erstelle ich einen mehrseitigen Lebenslauf?
A: Inhalt wird automatisch paginiert, Seitenzahl wird oben rechts angezeigt. Es wird empfohlen, innerhalb von 2 Seiten zu bleiben.

### F: Warum unterscheidet sich die Druckausgabe von der Vorschau?
A: Überprüfen Sie die Druckeinstellungen, stellen Sie sicher, dass Sie die empfohlene Skalierung und Ränder verwenden.

### F: Wie speichere ich den Lebenslauf?
A: Verwenden Sie "Daten exportieren", um YAML-Datei zu speichern, verwenden Sie "Daten importieren" zur nächsten Wiederherstellung.

### F: Welche Bildformate werden unterstützt?
A: Unterstützt JPG, PNG, GIF und andere gängige Formate. JPG-Format empfohlen.

### F: Wie teile ich den Lebenslauf mit anderen?
A: Empfohlen wird der Export als PDF zum Teilen, oder Export der Datendatei für andere zum Importieren.

## Technischer Support

Bei Problemen besuchen Sie bitte die [GitHub-Projektseite](https://github.com/mycloudai/Ink-Resume), um ein Issue einzureichen.