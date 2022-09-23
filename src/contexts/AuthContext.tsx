import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";

type User = {
  username: string;
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean;
  loginFailMessage: string;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

interface AuthProviderProps {
  children: ReactNode;
}

export function signOut() {
  destroyCookie(undefined, "endeavourToken");
  destroyCookie(undefined, "endeavourRefreshToken");

  authChannel.postMessage("signOut");
  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const [loginFailMessage, setLoginFailMessage] = useState<string>("");

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          break;
        case "signIn":
          Router.push("/home");
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { endeavourRefreshToken: refreshToken } = parseCookies();
    if (refreshToken) {
      api
        .get("/me")
        .then((response) => {
          const { username, email, permissions, roles } = response.data;
          setUser({ username, email, permissions, roles });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles, username } =
        response.data;

      setCookie(undefined, "endeavourToken", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      setCookie(undefined, "endeavourRefreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setUser({
        username,
        email,
        permissions,
        roles,
      });

      // eslint-disable-next-line dot-notation
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setLoginFailMessage("");
      Router.push("/home");
      authChannel.postMessage("signIn");
    } catch (err) {
      setLoginFailMessage(
        "Invalid Credentials, please check your ID and password"
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loginFailMessage, signOut, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
