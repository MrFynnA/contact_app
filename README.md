# React + Vite
How to run contact app locally :

1. First npm install to install required dependencies
2. Then npm run dev to start local development server and run project

For data persistence intall json server.
In the src folder you would find db folder with db.json file attached thats the resource contact data will be stored and modified for all requests.
In terminal you run npx json-server --watch src/db/db.json --port 8080 to allow server watch the file and listen for requests.
