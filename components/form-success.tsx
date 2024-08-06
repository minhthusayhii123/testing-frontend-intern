import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
interface FormSucessProps {
  message?: string;
}

export const FormSucess = ({ message }: FormSucessProps) => {
  if (!message) return null;
  return (
    <div className="bg-green-300 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-700">
      <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4"/>
      <p>{message}</p>
    </div>
  );
};
