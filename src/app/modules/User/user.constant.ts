export const USER_ROLE = {
  superAdmin: 'superAdmin',
  admin: 'admin',
  user: 'user',
} as const;

export interface DashboardData {
  totalShoppingAmount: number;
  totalProductsBought: number;
  totalProductsCancelled: number;
  totalRewardsPoints: number;
}

export interface VerifiedEmailUser {
  verifyCode: string;
}
