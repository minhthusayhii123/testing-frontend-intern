"use client";
import { Button } from "@/components/ui/button";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Social = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button size="lg" className="w-full" variant="outline">
        <FontAwesomeIcon icon={faGoogle} />
      </Button>
      <Button size="lg" className="w-full" variant="outline">
        <FontAwesomeIcon icon={faGithub} />
      </Button>
    </div>
  );
};
