const express = require('express');
const process = require('process');
const path = require('path');
var cors = require('cors');
const app = express();

// Middleware Routes
const { notFound, errorHandler } = require('./middleware');
const register = require('./utils/api/register');
const login = require('./utils/api/login');

const {
  addressRoutes,
  cartRoutes,
  productRoutes,
  userRoutes,
  paymentRoutes,
  orderRoutes,
  ratingReviewRoutes,
  categoryRoutes,
  brandRoutes,
  discountRoutes,
  wishListRoutes,
  taxRoutes,
} = require('./routes');

// CORS Middleware
app.use(cors());

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(register);
app.use(login);
app.use('/api/users', userRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/ratingreviews', ratingReviewRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/wishlists', wishListRoutes);
app.use('/api/taxes',taxRoutes);


// eslint-disable-next-line no-undef
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(notFound);
app.use(errorHandler);

const PORT = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
