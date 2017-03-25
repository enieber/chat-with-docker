create
  docker build -t pensa-rapido/chat-nodejs .

run
  docker run -p 3000:3000 -d pensa-rapido/chat-nodejs
