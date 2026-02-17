// src/utils/roleUtils.js

import { ROLES } from "./constants";

export const isAdmin = (user) => user?.role === ROLES.ADMIN;
export const isSeller = (user) => user?.role === ROLES.SELLER;
export const isBuyer = (user) => user?.role === ROLES.BUYER;

export const canAccess = (user, requiredRole) => {
  if (!user) return false;
  return user.role === requiredRole;
};
