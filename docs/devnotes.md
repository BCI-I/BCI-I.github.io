```
cd docs
sass --watch style/style.sass:style/style.css
```

```
cd docs
python3 -m http.server
```


```
cd docs
source ~/.bashrc
npx babel --watch components --out-dir js --presets react-app/prod
```