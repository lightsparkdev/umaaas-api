'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';

interface FormData {
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

export default function Home() {
  const [formData, setFormData] = useState<FormData>(() => ({
    platformUserId: faker.string.uuid(),
    umaAddress: `$${faker.internet.username().toLowerCase()}@${process.env.NEXT_PUBLIC_UAAS_UMA_DOMAIN || (typeof window !== 'undefined' ? window.location.hostname : 'localhost:3000')}`,
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
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{ status: number | string; data: unknown } | null>(null);
  
  const [users, setUsers] = useState<Array<{
    id?: string;
    umaAddress?: string;
    fullName?: string;
    platformUserId?: string;
    createdAt?: string;
  }>>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [currUser, setCurrUser] = useState<{
    id?: string;
    umaAddress?: string;
    fullName?: string;
    platformUserId?: string;
    createdAt?: string;
  } | null>(null);

  const [lookupAddress, setLookupAddress] = useState('$php@test.uma.me');
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupResponse, setLookupResponse] = useState<{ status: number | string; data: unknown } | null>(null);

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
    setFormData({
      platformUserId: faker.string.uuid(),
      umaAddress: `$${faker.internet.username().toLowerCase()}@${process.env.NEXT_PUBLIC_UAAS_UMA_DOMAIN || (typeof window !== 'undefined' ? window.location.hostname : 'localhost:3000')}`,
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
    setResponse(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse({ status: res.status, data });
      
      // If user creation was successful, add to users list
      if (res.status === 201 && data) {
        setCurrUser(data);
        setUsers(prevUsers => [data, ...prevUsers]);
      }
    } catch {
      setResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await fetch('/api/user');
      const data = await res.json();
      if (res.ok) {
        setUsers(data.data || []);
      } else {
        console.error('Error fetching users:', data);
        setUsers([]);
      }
    } catch (error) {
      console.error('Network error fetching users:', error);
      setUsers([]);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const handleLookup = async () => {
    if (!lookupAddress) return;
    
    setIsLookingUp(true);
    setLookupResponse(null);

    try {
      const searchParams = new URLSearchParams({
        receiverUmaAddress: lookupAddress,
        userId: currUser?.id || 'test-user-id'
      });
      
      const res = await fetch(`/api/payments/lookup?${searchParams}`);
      const data = await res.json();
      setLookupResponse({ status: res.status, data });
    } catch {
      setLookupResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsLookingUp(false);
    }
  };

  const truncateText = (text: string, maxLength: number = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">UMA as a service quickstart</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add a new user</h2>
            <button
              type="button"
              onClick={generateNewData}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Generate New Data
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Platform User ID</label>
                <input
                  type="text"
                  value={formData.platformUserId}
                  onChange={(e) => handleInputChange('platformUserId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UMA Address</label>
                <input
                  type="text"
                  value={formData.umaAddress}
                  onChange={(e) => handleInputChange('umaAddress', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                  <input
                    type="text"
                    value={formData.address.line1}
                    onChange={(e) => handleInputChange('address.line1', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                  <input
                    type="text"
                    value={formData.address.line2}
                    onChange={(e) => handleInputChange('address.line2', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    value={formData.address.state}
                    onChange={(e) => handleInputChange('address.state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={formData.address.postalCode}
                    onChange={(e) => handleInputChange('address.postalCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={formData.address.country}
                    onChange={(e) => handleInputChange('address.country', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Bank Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.accountNumber}
                    onChange={(e) => handleInputChange('bankAccountInfo.accountNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.routingNumber}
                    onChange={(e) => handleInputChange('bankAccountInfo.routingNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Category</label>
                  <select
                    value={formData.bankAccountInfo.accountCategory}
                    onChange={(e) => handleInputChange('bankAccountInfo.accountCategory', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="CHECKING">Checking</option>
                    <option value="SAVINGS">Savings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.bankName}
                    onChange={(e) => handleInputChange('bankAccountInfo.bankName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform Account ID</label>
                  <input
                    type="text"
                    value={formData.bankAccountInfo.platformAccountId}
                    onChange={(e) => handleInputChange('bankAccountInfo.platformAccountId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Creating User...' : 'Create User'}
              </button>
            </div>
          </form>

          {response && (
            <div className="mt-6 p-4 rounded-md border">
              <h3 className="text-lg font-medium mb-2">
                Response {response.status === 201 ? '(Success)' : '(Error)'}:
              </h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">UMA Address Lookup</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">UMA Address to Lookup</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={lookupAddress}
                  onChange={(e) => setLookupAddress(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter UMA address..."
                />
                <button
                  onClick={handleLookup}
                  disabled={isLookingUp || !lookupAddress}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLookingUp ? 'Looking up...' : 'Lookup'}
                </button>
              </div>
            </div>

            {lookupResponse && (
              <div className="p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-2">
                  Lookup Response {lookupResponse.status === 200 ? '(Success)' : '(Error)'}:
                </h3>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                  {JSON.stringify(lookupResponse.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Users</h2>
            <button
              onClick={fetchUsers}
              disabled={isLoadingUsers}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoadingUsers ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>

          {users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">UMA Address</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Platform User ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id || index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.id || 'N/A', 20)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.umaAddress || 'N/A', 40)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.fullName || 'N/A', 25)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {truncateText(user.platformUserId || 'N/A', 25)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {isLoadingUsers ? 'Loading users...' : 'No users found. Click "Fetch Users" to load users.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
