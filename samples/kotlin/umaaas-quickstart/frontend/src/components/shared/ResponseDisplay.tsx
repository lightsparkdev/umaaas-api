import { ApiResponse } from '../../types/payment.types';

interface ResponseDisplayProps {
  response: ApiResponse | null;
  successStatus?: number;
  title?: string;
}

export default function ResponseDisplay({ 
  response, 
  successStatus = 200, 
  title = "Response" 
}: ResponseDisplayProps) {
  if (!response) return null;

  const isSuccess = response.status === successStatus || response.status === 201;

  return (
    <div className="mt-6 p-4 rounded-md border">
      <h3 className="text-lg font-medium mb-2">
        {title} {isSuccess ? '(Success)' : '(Error)'}:
      </h3>
      <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
        {JSON.stringify(response.data, null, 2)}
      </pre>
    </div>
  );
}