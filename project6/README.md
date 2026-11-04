

Udfør
```powershell
docker build -t file-drop .
docker run -p 5000:5000 -v ${PWD}/uploads:/uploads file-drop
```

Så kan man (hvis `curl` er installeret (måske fra wsl?)), uploade med:
```
curl -F 'file=@yourfile.txt' localhost:5000
```
hvor `yourfile.txt` er en fil i den aktuelle mappe

