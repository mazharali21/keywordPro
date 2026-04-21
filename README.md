A keyword research tool built using React, Node.js, and Express.js.

keywordPro allows users to generate and explore keyword ideas using a free external API, making it useful for SEO research, content planning, and marketing workflows

------Features------
Search for keyword ideas in real-time
Fetch data from a free keyword research API
Display keyword suggestions dynamically
Clean and responsive UI
Fast client-server communication
Modular and maintainable code structure

------Installation & Setup------
1. Clone the Repository
git clone https://github.com/mazharali21/keywordPro.git
cd keywordPro

2. Setup Server
cd server
npm install

Create a .env file inside the server directory:

PORT=5000
API_KEY=your_api_key_here

Start the server:
npm start

3. Setup Client

Open a new terminal:

cd client
npm install
npm run dev

-------------------------------------------

Backend runs on: http://localhost:5000
Frontend runs on: http://localhost:5173

Enter a keyword in the search bar to fetch suggestions from the API.
