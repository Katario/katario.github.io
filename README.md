# Portfolio

This Project is made with Vue.js and ViteJs.

This will be the entrypoints for all my incoming projects.

## How does it works?
To use in local, you need to install Docker first.
Then you build the image:
```
docker build --no-cache -t katario-portfolio .
```

You run it:
```
docker run -p 8089:8089 -it --pid=host --rm --name katario-portfolio -v ${PWD}/src:/usr/src/app/src -v ${PWD}/docs:/usr/src/app/docs katario-portfolio
```

Et voilà, it should work properly!

Don't Forget to build before pushing :

```
docker exec -it katario-portfolio npm run build
```

## TODO:

- Clean the readme, use a default template, the simplest possible
- Fix clouds in the day part

# Important note :

This project is under construction. It's going to be rebuild from the ground.