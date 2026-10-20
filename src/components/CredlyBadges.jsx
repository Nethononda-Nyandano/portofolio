import { useState } from "react";
import { Award } from "lucide-react";

const CredlyBadge = ({ embedUrl, title }) => {
  const [hasError, setHasError] = useState(false);

  if (!embedUrl || hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid h-20 w-20 place-items-center rounded-full border border-black/10 bg-white/60">
          <Award
            size={36}
            strokeWidth={1.2}
            className="text-neutral-800"
          />
        </div>

        <span className="mt-4 font-aenik-bold text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Verified Achievement
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <iframe
        src={embedUrl}
        title={`${title} Credly badge`}
        loading="lazy"
        className="h-full w-full border-0"
        sandbox="allow-scripts allow-same-origin allow-popups"
        referrerPolicy="strict-origin-when-cross-origin"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default CredlyBadge;