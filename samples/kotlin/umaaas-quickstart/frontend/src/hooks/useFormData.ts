import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { FormData } from '../types/user.types';

export function useFormData() {
  const [formData, setFormData] = useState<FormData>({
    platformUserId: '',
    umaAddress: '',
    userType: 'INDIVIDUAL',
    fullName: '',
    dateOfBirth: '',
    nationality: 'US',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
    },
    bankAccountInfo: {
      accountType: 'US_ACCOUNT',
      accountNumber: '',
      routingNumber: '',
      accountCategory: 'CHECKING',
      bankName: '',
      platformAccountId: '',
    },
  });

  // Generate initial faker data on client side only
  useEffect(() => {
    const generateInitialData = (): FormData => {
      const domain = import.meta.env.VITE_UMAAAS_UMA_DOMAIN || window.location.hostname;
      return {
        platformUserId: faker.string.uuid(),
        umaAddress: `$${faker.internet.username().toLowerCase()}@${domain}`,
        userType: 'INDIVIDUAL' as const,
        fullName: faker.person.fullName(),
        dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toISOString().split('T')[0],
        nationality: 'US',
        address: {
          line1: faker.location.streetAddress(),
          line2: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state({ abbreviated: true }),
          postalCode: faker.location.zipCode(),
          country: 'US',
        },
        bankAccountInfo: {
          accountType: 'US_ACCOUNT' as const,
          accountNumber: faker.finance.accountNumber(11),
          routingNumber: faker.finance.routingNumber(),
          accountCategory: faker.helpers.arrayElement(['CHECKING', 'SAVINGS']) as 'CHECKING' | 'SAVINGS',
          bankName: faker.company.name() + ' Bank',
          platformAccountId: faker.string.uuid(),
        },
      };
    };

    setFormData(generateInitialData());
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const keys = field.split('.');
      if (keys.length === 1) {
        return { ...prev, [field]: value };
      } else if (keys.length === 2) {
        return {
          ...prev,
          [keys[0]]: {
            ...(prev[keys[0] as keyof FormData] as Record<string, string>),
            [keys[1]]: value,
          },
        };
      }
      return prev;
    });
  };

  const generateNewData = () => {
    const domain = import.meta.env.VITE_UMAAAS_UMA_DOMAIN || (typeof window !== 'undefined' ? window.location.hostname : 'localhost:3000');
    setFormData({
      platformUserId: faker.string.uuid(),
      umaAddress: `$${faker.internet.username().toLowerCase()}@${domain}`,
      userType: 'INDIVIDUAL',
      fullName: faker.person.fullName(),
      dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toISOString().split('T')[0],
      nationality: 'US',
      address: {
        line1: faker.location.streetAddress(),
        line2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        postalCode: faker.location.zipCode(),
        country: 'US',
      },
      bankAccountInfo: {
        accountType: 'US_ACCOUNT',
        accountNumber: faker.finance.accountNumber(11),
        routingNumber: faker.finance.routingNumber(),
        accountCategory: faker.helpers.arrayElement(['CHECKING', 'SAVINGS']),
        bankName: faker.company.name() + ' Bank',
        platformAccountId: faker.string.uuid(),
      },
    });
  };

  return {
    formData,
    handleInputChange,
    generateNewData,
  };
}
