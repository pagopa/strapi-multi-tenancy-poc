Come testare velocemente in locale il funzionamento di ciascuna opzione.

PREMESSE:
- Lanceremo Strapi in modalità di sviluppo per permettere di utilizzare il CTBuilder di Strapi e verificare così ogni funzionalità se desiderato.
- Ipotizziamo di avere già clonato la repo e lanciato "npm i" nella cartella dell'opzione che vogliamo testare



--- OPZIONE 1 ---

1. Lanciare il comando "npm run develop"
2. Andare all'indirizzo "localhost:1337/admin" per accedere al pannello admin
3. Fare il primo login inserendo le credenziali richieste (si otterrà accesso come Super Admin)
4. Creare Ruoli per gli utenti dei diversi team prodotto da testare (ne bastano due, per esempio firma e send)
5. Dare ad ogni Ruolo la possibilità di visualizzare e modificare solo i propri dati (firma --> Sito (Firma); send --> Sito (Send))
6. Creare un utente per ciascun Ruolo
7. Fare il login come ciascun utente e testare ciò che si desidera (separazione dati, condivisione Media Library, etc...)



--- OPZIONE 2 ---

1. Se non esistente, creare uno schema DB MySQL vuoto per ogni ambiente che si vuole testare (firma, send, pdnd)
2. Nel file ".env" impostare NODE_ENV all'ambiente che si vuole far girare (per esempio NODE_ENV=firma)
3. Aprire un Prompt/Shell e lanciare il comando "npm run develop"
4. Ripetere gli step 2. e 3. per ogni ambiente che si vuole testare contemporaneamente
5. Andare all'indirizzo "localhost:XXXX/admin" per accedere al relativo pannello admin (la port XXXX dipenderà dall'ambiente: attualmente sono firma:4338, pdnd:4339, send:4340)
6. Fare il primo login inserendo le credenziali richieste (si otterrà accesso come Super Admin)
7. Testare ciò che si desidera sui diversi pannelli admin (separazione dati, condivisione strutture, etc...)



--- OPZIONE 3 ---

1. Se non esistente, creare uno schema DB MySQL vuoto per ogni ambiente che si vuole testare (firma, send, pdnd)
2. Nel file ".env" impostare DATABASE_NAME e PORT rispettivamente con il nome dello schema DB dell'ambiente da testare e la port (unica) su cui servire il pannello admin
3. Aprire un Prompt/Shell e lanciare il comando "npm run develop"
4. Ripetere gli step 2. e 3. per ogni ambiente che si vuole testare contemporaneamente
5. Andare all'indirizzo "localhost:XXXX/admin" per accedere al relativo pannello admin (la port XXXX dipenderà dalla variabile PORT impostata al punto 2.)
6. Fare il primo login inserendo le credenziali richieste (si otterrà accesso come Super Admin)
7. Testare ciò che si desidera sui diversi pannelli admin (separazione dati, condivisione strutture, etc...)