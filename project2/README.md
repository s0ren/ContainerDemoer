Vi skal have noget skabelon-indhold med avanceret frontend 

Hvis du ikke _har_ __NodeJS__ installeret, og ikke vil installere det nu, så bruger vi bare docker image'et node.

```powershell
docker run -it -p 5173:5173 -v ./app:/app -w /app node:24-alpine sh
```
Dette 
- åbner en container med __node__ image'et 
  - som hentes hvis det ikke er der
- mapper et volume så under-mappen `./app` så den også er `/app` inde i containeren
- `-w app` skifter "current dir" til `app`
- åbner en interaktiv terminal (`-it`)

Så kan vi 
```bash
npm create vite@latest . --template react
```

Du skal vælge nogen foskellige ting... bare vælg noget...
til sidst luk med `q`;

Du skal også
```bash
npm install
```

Afslut med 
```bash
exit
```

Byg nu image'et `my-portfolio`

```powershell
docker build -t my-portfolio .
```
og kør det
```powershell
docker run -p 8080:80 my-portfolio
```