# Link of hosted website : https://app.netlify.com/projects/tangerine-buttercream-4b96eb/configuration/deploys

## Assignment verview

This project is a showcase webpage for the ICC Music Club at IIT Bombay.  
It demonstrates clean design, responsiveness, interactive features, and (optionally) backend integration for form submissions.

**Assignment Requirements Implemented:**
- Club name, description, and secretary contact details
- List of events and event-related photos
- "Join Us" form (Name, Email, Confirm)
- Responsive design for desktop and mobile
- Enhanced visual styling (shadows, gradients, animations)
- [Optional] Calendar for club meetings
- [Optional] Backend: Save "Join Us" form data to MongoDB

---

## Features

- **Responsive Navbar** with club logo and social links
- **Hero Section** with background video and animated ticker
- **About Section** with testimonials carousel
- **Signature Events Carousel**
- **Event Highlights Grid** with real event images and icons
- **Interactive Meeting Calendar** (clickable, highlights dates)
- **Join Us Form** (with backend integration)
- **Newsletter Subscription**
- **Contact Section** with secretary details and WhatsApp FAB
- **Modern Visuals:** glassmorphism, gradients, transitions

---

## Screenshots

*(Add screenshots here if required by your instructor)*

---

## How to Run (Frontend)

1. **Clone or download** this repository.
2. Ensure all files (`index.html`, `style.css`, `script.js`, images) are in the same directory.
3. Open `index.html` in your browser.
4. All interactive features (except backend form submission) work out of the box.

---

## How to Run (Backend) *(Optional Section Attempted)*

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally or on Atlas
- [MongoDB Compass](https://www.mongodb.com/products/compass) (optional, for viewing data)

### Steps

1. Open a terminal and navigate to the `server` folder: cd path/to/your/project/server
2. Install dependencies: npm install express mongoose 
3. Start MongoDB (if not running):
- On Windows: Start the MongoDB service or run `mongod`
- On Mac/Linux: `brew services start mongodb-community` or `mongod`
4. Start the backend server:node server.js
5. Open the frontend (`index.html`) in your browser.
6. Submit the "Join Us" form. You should see a confirmation message.
7. To view saved data, open MongoDB Compass, connect to `mongodb://localhost:27017`, and check the `icc_musicclub` database, `joins` collection.

---

## Project Structure

project-root/
│
├── index.html
├── style.css
├── script.js
├── server/
│ └── server.js
├── images/
│ ├── surbahar.png
│ ├── mi.png
│ └── ... (other event images)
└── README.md




---

## Optional Sections Attempted

- **Enhanced Visual Styling:** Custom fonts, gradients, glassmorphism, transitions, animations
- **Club Meeting Calendar:** Clickable calendar with date highlight/message
- **Backend Integration:** Node.js + Express + MongoDB for "Join Us" form (see [How to Run (Backend)](#how-to-run-backend))

---

## Technologies Used

- **Frontend:** HTML5, CSS3 (Flexbox, Grid, Animations), JavaScript (ES6)
- **Backend:** Node.js, Express, MongoDB, Mongoose, CORS
- **Other:** MongoDB Compass (for viewing data), Google Fonts

---

## Contact

**Club Secretary:** Rohit Parida  
**Email:** rohitparida@cse.iitb.ac.in  
**Phone:** +91-9861644087

---




