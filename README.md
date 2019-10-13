# docker_node_app

- https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

- https://linuxize.com/post/how-to-remove-docker-images-containers-volumes-and-networks/

```
docker image ls
docker image rm 8612445bac20  

docker container ls  
docker container rm fedda80d8673


docker build -t node-web-app1 . 
docker run -p 49160:8080 -d node-web-app1

# Enter the container
$ docker exec -it node-web-app1 /bin/bash
```

## note : Docker Toolbox - Localhost not working
https://stackoverflow.com/questions/42866013/docker-toolbox-localhost-not-working

```
# get the VM ip
docker-machine ip default
```
 - local address is http://192.168.99.100:49160/
 this is because of the VM ip