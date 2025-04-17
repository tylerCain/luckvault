## **React and Node.js web application boilerplate.**

Created By **Tyler Cain**

After cloning this repository:

 1. type `npm init` in the parent directory 
 2. `npm install concurrently` in server terminal
 3. `npm ci` in client and server directory
 4.  add the following scriptto the package.json file:

    "scripts": {
    
    "start": "concurrently \"npm run server\" \"npm run client\"",
    
    }

Postgres:
docker run --name luckvault -p 5432:5432 -e POSTGRES_PASSWORD=luckPOSTGRESvault4077 postgres

docker exec -it luckvault psql -U postgres -d luckvault

Rules for deployment:
✅ Short-Term Setup Tips for Easier AWS/Postgres Deployment
1. Use Environment Variables from Day One
Create a .env file in both client and server (ignore them in .gitignore):

env
Copy
# server/.env
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/luckvault
JWT_SECRET=yourSecret
On AWS, you’ll set these in the environment settings (Elastic Beanstalk, EC2, etc.)

2. Use pg or Prisma for Postgres (if not already)
If you’re using pg (PostgreSQL driver), keep connection logic modular

If you're using an ORM like Prisma or Sequelize, even better — just make sure it supports env-based configs

3. CORS Setup (Important for Prod)
On your server, allow the frontend’s domain:

js
Copy
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
In production, CLIENT_URL could be something like https://luckvault.app.

4. Frontend API URLs from .env
In your client:

env
Copy
REACT_APP_API_URL=http://localhost:5000
In your code:

js
Copy
axios.get(`${process.env.REACT_APP_API_URL}/api/raffles`)
Makes it easy to switch between local/dev/staging/prod.

5. File Uploads?
If you plan to let admins upload prize images:

Consider S3 now or build your file logic in a way that’s easy to plug into it later

Avoid local file storage if you can

6. Prepare for HTTPS
Don’t hardcode http:// anywhere — use protocol-agnostic URLs (//api.luckvault.com) or read from .env.

7. Database Migration Tool
If you're using raw SQL:

Use a tool like knex, sequelize-cli, or Prisma Migrate for managing schema changes

8. Deploy-Ready Build Scripts
In your root package.json, you might eventually want:

json
Copy
"scripts": {
  "heroku-postbuild": "npm install --prefix client && npm run build --prefix client"
}
(This helps if you serve frontend from the backend in production)

9. Logging & Error Handling
Set up basic try/catch logging on your API routes. You’ll be glad you did when you deploy:

js
Copy
console.error('Error creating raffle:', error.message);
res.status(500).send('Server error');


