export interface FormData {
  platformUserId: string;
  umaAddress: string;
  userType: 'INDIVIDUAL';
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  bankAccountInfo: {
    accountType: 'US_ACCOUNT';
    accountNumber: string;
    routingNumber: string;
    accountCategory: 'CHECKING' | 'SAVINGS';
    bankName: string;
    platformAccountId: string;
  };
}

export interface User {
  id?: string;
  umaAddress?: string;
  fullName?: string;
  email?: string;
  platformUserId?: string;
  createdAt?: string;
}