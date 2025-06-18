import { useState } from 'react';
import { User } from './types/user.types';
import { ApiResponse } from './types/payment.types';
import UserCreationForm from './components/forms/UserCreationForm';
import UmaLookup from './components/forms/UmaLookup';
import PaymentInitiation from './components/forms/PaymentInitiation';
import SandboxPayments from './components/forms/SandboxPayments';
import TransactionsTable from './components/tables/TransactionsTable';
import UsersTable from './components/tables/UsersTable';
import WebhooksDisplay from './components/tables/WebhooksDisplay';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [currUser, setCurrUser] = useState<User | null>(null);
  const [lookupResponse, setLookupResponse] = useState<ApiResponse | null>(null);
  const [quoteResponse, setQuoteResponse] = useState<ApiResponse | null>(null);

  const handleUserCreated = (user: User) => {
    setCurrUser(user);
    setUsers(prevUsers => [user, ...prevUsers]);
  };

  const handleLookupSuccess = (response: ApiResponse) => {
    setLookupResponse(response);
  };

  const handleQuoteSuccess = (response: ApiResponse) => {
    setQuoteResponse(response);
  };

  const handleUsersUpdate = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">UMA as a service quickstart</h1>
        
        <UserCreationForm onUserCreated={handleUserCreated} />
        
        <UmaLookup 
          currUser={currUser} 
          onLookupSuccess={handleLookupSuccess} 
        />
        
        <PaymentInitiation 
          currUser={currUser}
          lookupResponse={lookupResponse}
          onQuoteSuccess={handleQuoteSuccess}
        />
        
        <SandboxPayments 
          currUser={currUser}
          quoteResponse={quoteResponse}
        />
        
        <TransactionsTable />
        
        <UsersTable 
          users={users}
          onUsersUpdate={handleUsersUpdate}
        />
        
        <WebhooksDisplay />
      </div>
    </div>
  );
}

export default App;
