import { toNextJsHandler } from "better-auth/next-js";
import { auth } from './auth';

export const routes = toNextJsHandler(auth);
