'use client';

import { useState } from 'react';
import { Transaction } from '@/types/payment.types';
import StatusBadge from '@/components/shared/StatusBadge';
import LoadingButton from '@/components/shared/LoadingButton';

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  const fetchTransactions = async () => {
    setIsLoadingTransactions(true);
    try {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      if (res.ok) {
        setTransactions(data.data || []);
      } else {
        console.error('Error fetching transactions:', data);
        setTransactions([]);
      }
    } catch (error) {
      console.error('Network error fetching transactions:', error);
      setTransactions([]);
    } finally {
      setIsLoadingTransactions(false);
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
        <h2 className="text-xl font-semibold">All Transactions</h2>
        <LoadingButton
          onClick={fetchTransactions}
          loading={isLoadingTransactions}
          loadingText="Loading..."
          className="bg-green-600 hover:bg-green-700 focus:ring-green-500"
        >
          Fetch Transactions
        </LoadingButton>
      </div>

      {transactions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">ID</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Type</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Status</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Sender UMA</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Receiver UMA</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Sent Amount</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Received Amount</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Exchange Rate</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Fees</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs">Created At</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction.id || index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {truncateText(transaction.id || 'N/A', 15)}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    <StatusBadge status={transaction.type} type="transaction" />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    <StatusBadge status={transaction.status} type="transaction" />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {truncateText(transaction.senderUmaAddress || 'N/A', 20)}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {truncateText(transaction.receiverUmaAddress || 'N/A', 20)}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {transaction.sentAmount 
                      ? `${(transaction.sentAmount.amount / 100).toFixed(2)} ${transaction.sentAmount.currency.code}`
                      : 'N/A'
                    }
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {transaction.receivedAmount 
                      ? `${(transaction.receivedAmount.amount / 100).toFixed(2)} ${transaction.receivedAmount.currency.code}`
                      : 'N/A'
                    }
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {transaction.exchangeRate ? transaction.exchangeRate.toFixed(4) : 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {transaction.fees && transaction.sentAmount
                      ? `${(transaction.fees / 100).toFixed(2)} ${transaction.sentAmount.currency.code}`
                      : 'N/A'
                    }
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs">
                    {transaction.createdAt ? new Date(transaction.createdAt).toLocaleString() : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          {isLoadingTransactions ? 'Loading transactions...' : 'Click "Fetch Transactions" to load transactions.'}
        </div>
      )}
    </div>
  );
}
