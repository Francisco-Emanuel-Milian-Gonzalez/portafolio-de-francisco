# Portafolio de Francisco

Portafolio web profesional de **Francisco Emanuel Milian Gonzalez** (Desarrollador web).

Sitio estático con HTML, CSS y JavaScript. Incluye descargas ZIP de los proyectos.

## Abrir en Visual Studio

1. Abre **Visual Studio**.
2. **Archivo → Abrir → Carpeta…** y selecciona esta carpeta (`portafolio-de-francisco`).
3. Abre `index.html`.
4. Usa **Live Preview** (extensión) o haz clic derecho en `index.html` → **View in Browser**.

También puedes abrir la carpeta en **Visual Studio Code / Cursor** y usar Live Server.

## Probar en local (rápido)

Desde esta carpeta:

```bash
python3 -m http.server 5500
```

Luego abre: [http://localhost:5500](http://localhost:5500)

## Publicar en internet (GitHub Pages)

Para que cualquiera pueda entrar (no solo en tu computadora):

1. Crea un repositorio en GitHub llamado, por ejemplo, `portafolio-de-francisco`.
2. Sube este proyecto:

```bash
git add .
git commit -m "Portafolio web de Francisco"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio-de-francisco.git
git push -u origin main
```

3. En GitHub: **Settings → Pages → Build and deployment**.
4. Source: **Deploy from a branch**.
5. Branch: `main` / carpeta `/ (root)` → Save.

Tu URL pública quedará así:

`https://TU_USUARIO.github.io/portafolio-de-francisco/`

> Nota: los ZIP pesan bastante (~177 MB). Si GitHub rechaza algún archivo grande, avísame y lo ajustamos (Git LFS o hosting externo).

## Estructura

```
portafolio-de-francisco/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/img/
└── downloads/          ← ZIP de cada proyecto
```
