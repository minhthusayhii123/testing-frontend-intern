import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-red-300 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <FontAwesomeIcon icon={faTriangleExclamation} className="h-4 w-4"/>
      <p>{message}</p>
    </div>
  );
};
