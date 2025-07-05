'use client';

import { useState } from 'react';
import { User } from '@/types/user.types';
import LoadingButton from '@/components/shared/LoadingButton';

interface UsersTableProps {
  users: User[];
  onUsersUpdate: (users: User[]) => void;
}

export default function UsersTable({ users, onUsersUpdate }: UsersTableProps) {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await fetch('/api/user');
      const data = await res.json();
      if (res.ok) {
        onUsersUpdate(data.data || []);
      } else {
        console.error('Error fetching users:', data);
        onUsersUpdate([]);
      }
    } catch (error) {
      console.error('Network error fetching users:', error);
      onUsersUpdate([]);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const truncateText = (text: string, maxLength: number = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">All Users</h2>
        <LoadingButton
          onClick={fetchUsers}
          loading={isLoadingUsers}
          loadingText="Loading..."
          className="bg-green-600 hover:bg-green-700 focus:ring-green-500"
        >
          Fetch Users
        </LoadingButton>
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
  );
}
