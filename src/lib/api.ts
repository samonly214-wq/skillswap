import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-b4947159`;

// Helper function to make authenticated requests
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('supabase_token');
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token || publicAnonKey}`,
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Auth API
export const authApi = {
  async signup(data: { email: string; password: string; name: string; location: string }) {
    return apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Skills API
export const skillsApi = {
  async getAll(params?: { category?: string; search?: string }) {
    const query = new URLSearchParams(params as any).toString();
    return apiRequest(`/skills${query ? `?${query}` : ''}`);
  },

  async getById(id: string) {
    return apiRequest(`/skills/${id}`);
  },

  async create(data: any) {
    return apiRequest('/skills', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: any) {
    return apiRequest(`/skills/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string) {
    return apiRequest(`/skills/${id}`, {
      method: 'DELETE',
    });
  },

  async getMySkills() {
    return apiRequest('/my-skills');
  },
};

// Profile API
export const profileApi = {
  async get(id?: string) {
    return apiRequest(id ? `/profile/${id}` : '/profile');
  },

  async update(data: any) {
    return apiRequest('/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

// Wishlist API
export const wishlistApi = {
  async get() {
    return apiRequest('/wishlist');
  },

  async add(data: { skill_name: string; category: string }) {
    return apiRequest('/wishlist', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async remove(id: string) {
    return apiRequest(`/wishlist/${id}`, {
      method: 'DELETE',
    });
  },
};

// Swap Requests API
export const swapRequestsApi = {
  async get(type?: 'sent' | 'received') {
    const query = type ? `?type=${type}` : '';
    return apiRequest(`/swap-requests${query}`);
  },

  async create(data: { skill_id: string; message: string }) {
    return apiRequest('/swap-requests', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateStatus(id: string, status: string) {
    return apiRequest(`/swap-requests/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },
};
