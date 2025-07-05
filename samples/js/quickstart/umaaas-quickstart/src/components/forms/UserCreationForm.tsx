'use client';

import { useState } from 'react';
import { User } from '@/types/user.types';
import { ApiResponse } from '@/types/payment.types';
import { useFormData } from '@/hooks/useFormData';
import ResponseDisplay from '@/components/shared/ResponseDisplay';
import LoadingButton from '@/components/shared/LoadingButton';

interface UserCreationFormProps {
  onUserCreated: (user: User) => void;
}

export default function UserCreationForm({ onUserCreated }: UserCreationFormProps) {
  const { formData, handleInputChange, generateNewData } = useFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

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
      if (res.status === 201 && data && data.umaAddress) {
        const derivedEmail = data.umaAddress.startsWith('$') ? data.umaAddress.substring(1) : data.umaAddress;
        const userWithEmail = { ...data, email: derivedEmail };
        onUserCreated(userWithEmail);
      }
    } catch {
      setResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGenerateNewData = () => {
    generateNewData();
    setResponse(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Add a new user</h2>
        <button
          type="button"
          onClick={handleGenerateNewData}
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
            {formData.umaAddress && (
              <p className="mt-1 text-xs text-gray-500">
                Email: {formData.umaAddress.startsWith('$') ? formData.umaAddress.substring(1) : formData.umaAddress}
              </p>
            )}
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
          <LoadingButton
            type="submit"
            loading={isSubmitting}
            loadingText="Creating User..."
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 font-medium"
          >
            Create User
          </LoadingButton>
        </div>
      </form>

      <ResponseDisplay 
        response={response} 
        successStatus={201}
        title="Response"
      />
    </div>
  );
}
