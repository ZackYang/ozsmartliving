// @ts-ignore
import { SessionOptions } from "iron-session";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  email?: string
  isLoggedIn?: boolean
  id?: number
}

export const defaultSession: SessionData = {
  email: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "session",
  cookieOptions: {
    // secure only works in `https` environments
    secure: process.env.NODE_ENV === "production"
  },
};