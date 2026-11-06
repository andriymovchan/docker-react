docker exec -it <container_id> sh
docker-compose up
docker-compose down
docker ps -all
docker-compose ps
docker-compose up --build


docker build -t appka .
docker run appka

docker build -t appka -f Dockerfile.dev .


# volumes mapping - pwd is current directory (command pwd returns path to the current folder)
docker run  -p 3000:3000 -v /app/node_modules -v $(pwd):/app appka

#when we want to run docker-compose with Dockerfile.dev we need to change (build: . ) with build: context: . and dockerfile: Dockerfile.dev
