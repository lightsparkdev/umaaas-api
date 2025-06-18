interface StatusBadgeProps {
  status: string;
  type?: 'transaction' | 'payment' | 'general';
}

export default function StatusBadge({ status, type = 'general' }: StatusBadgeProps) {
  const getStatusClasses = (status: string, type: string) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    
    if (type === 'transaction') {
      switch (status) {
        case 'COMPLETED':
          return `${baseClasses} bg-green-100 text-green-800`;
        case 'PENDING':
        case 'PROCESSING':
          return `${baseClasses} bg-yellow-100 text-yellow-800`;
        case 'FAILED':
        case 'REJECTED':
          return `${baseClasses} bg-red-100 text-red-800`;
        case 'INCOMING':
          return `${baseClasses} bg-green-100 text-green-800`;
        case 'OUTGOING':
          return `${baseClasses} bg-blue-100 text-blue-800`;
        default:
          return `${baseClasses} bg-gray-100 text-gray-800`;
      }
    }
    
    // Default general status colors
    return `${baseClasses} bg-gray-100 text-gray-800`;
  };

  return (
    <span className={getStatusClasses(status, type)}>
      {status}
    </span>
  );
}