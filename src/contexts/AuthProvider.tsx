import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import api from "@/utils/api";

interface User {
  email: string;
  first_name: string;
  last_name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchUserInfo();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await api.get<User>("/oauth/user_info");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/oauth/login", {
        email,
        password,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      });
      localStorage.setItem("access_token", response.data.token);
      await fetchUserInfo();
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post("/oauth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setUser(null);
      router.push("/");
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const response = await api.post("/oauth/create_account", {
        user: {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        },
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      });
      localStorage.setItem("access_token", response.data.token);
      await fetchUserInfo();
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
