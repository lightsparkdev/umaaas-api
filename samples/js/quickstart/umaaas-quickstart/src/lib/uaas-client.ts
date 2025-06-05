import { UaasTest } from 'uaas-test';

export const uaasClient = new UaasTest({
  username: process.env.CLIENT_ID,
  password: process.env.CLIENT_SECRET,
  logLevel: 'info',
  maxRetries: 2
});
