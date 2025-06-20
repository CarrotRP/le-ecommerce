# Le E-commerce

an ecommerce app, where buyer can browse and buy products and seller can add their products to the store

## Technologies used
- MongoDB
- Express
- React
- NodeJS
## package
- CORS
- Mongoose
- passport
- express-session
- bcrypt

### TODO:
- [ ] store the user info, so it load properly and not reset when page refresh
- [ ] (backend) store seller products
- [ ] (frontend) add user profile image or icon

will pick up, where left off(be back)
left off part: use login complete, store user info

## Screenshots
not yet

## How to use

```
# Clone the repo
git clone https://github.com/CarrotRP/le-ecommerce.git

# NOTE: use 2 terminal for this app

# Go to frontend and install dependencies
cd le-ecommerce
cd frontend
npm install

# Go to backend and install dependencies
cd le-ecommerce
cd backend
npm install

# Create your database in mongoose, get db access, then create .env file inside le-ecommerce/backend
# inside .env
# PORT=YOURPORT(3000 is default)
# name='yourdbaccessname'
# password= 'yourdbaccesspw'
# secret= 'anywordorstringyouwant'

# In the backend terminal run
node app

# In the frontend terminal run
npm run dev

```