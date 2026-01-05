import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const productAPI = {
  // Product endpoints
  getAllProducts: (params) => api.get('/products', { params }),
  getProductById: (id) => api.get(`/products/${id}`),
  getProductsByCategory: (category) => api.get(`/products/category/${category}`),
  searchProducts: (query) => api.get(`/products/search?q=${query}`),
  
  // Category endpoints
  getCategories: () => api.get('/categories'),
  
  // Manufacturer endpoints
  getManufacturers: () => api.get('/manufacturers'),
};

export const dealerAPI = {
  // Dealer endpoints
  registerDealer: (data) => api.post('/dealers/register', data),
  getDealers: (params) => api.get('/dealers', { params }),
  getDealerById: (id) => api.get(`/dealers/${id}`),
  updateDealer: (id, data) => api.put(`/dealers/${id}`, data),
  
  // Order endpoints
  placeOrder: (data) => api.post('/orders', data),
  getOrders: (params) => api.get('/orders', { params }),
  getOrderById: (id) => api.get(`/orders/${id}`),
  updateOrderStatus: (id, status) => api.patch(`/orders/${id}/status`, { status }),
};

export const authAPI = {
  // Authentication endpoints
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh'),
  
  // Password management
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, newPassword) => api.post('/auth/reset-password', { token, newPassword }),
};

export const cartAPI = {
  // Cart endpoints
  getCart: () => api.get('/cart'),
  addToCart: (productId, quantity) => api.post('/cart/add', { productId, quantity }),
  updateCartItem: (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity }),
  removeFromCart: (itemId) => api.delete(`/cart/${itemId}`),
  clearCart: () => api.delete('/cart/clear'),
};

export const contactAPI = {
  // Contact endpoints
  sendContactForm: (data) => api.post('/contact', data),
  sendQuoteRequest: (data) => api.post('/contact/quote', data),
  sendDealerInquiry: (data) => api.post('/contact/dealer', data),
};

export default api;