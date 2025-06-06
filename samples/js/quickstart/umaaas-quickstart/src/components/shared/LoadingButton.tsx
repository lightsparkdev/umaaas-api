interface LoadingButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function LoadingButton({
  onClick,
  disabled = false,
  loading = false,
  loadingText,
  children,
  className = '',
  type = 'button'
}: LoadingButtonProps) {
  const baseClasses = "px-6 py-2 text-white rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
  const finalClasses = className ? `${baseClasses} ${className}` : `${baseClasses} bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={finalClasses}
    >
      {loading ? loadingText : children}
    </button>
  );
}
