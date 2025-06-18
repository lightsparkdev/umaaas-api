'use client';

import { useState } from 'react';
import { User } from '../../types/user.types';
import { ApiResponse } from '../../types/payment.types';
import ResponseDisplay from '../shared/ResponseDisplay';
import LoadingButton from '../shared/LoadingButton';

interface UmaLookupProps {
  currUser: User | null;
  onLookupSuccess: (response: ApiResponse) => void;
}

export default function UmaLookup({ currUser, onLookupSuccess }: UmaLookupProps) {
  const [lookupAddress, setLookupAddress] = useState('$php@test.uma.me');
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupResponse, setLookupResponse] = useState<ApiResponse | null>(null);

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
      const response = { status: res.status, data };
      setLookupResponse(response);
      
      if (res.status === 200) {
        onLookupSuccess(response);
      }
    } catch {
      setLookupResponse({ status: 'error', data: { error: 'Network error' } });
    } finally {
      setIsLookingUp(false);
    }
  };

  return (
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
            <LoadingButton
              onClick={handleLookup}
              disabled={!lookupAddress}
              loading={isLookingUp}
              loadingText="Looking up..."
              className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            >
              Lookup
            </LoadingButton>
          </div>
        </div>

        <ResponseDisplay 
          response={lookupResponse} 
          title="Lookup Response"
        />
      </div>
    </div>
  );
}