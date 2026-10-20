import { useState } from "react";
import {
  ExternalLink,
  FileBadge,
  ShieldCheck,
  X,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const CertificateCard = ({ certificate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Certificate Card */}
      <article className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-neutral-50 font-aenik-regular transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
        {/* Document Preview */}
        <div className="flex h-60 shrink-0 items-center justify-center overflow-hidden bg-[#e8eee9] p-6">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <FileBadge
              size={52}
              strokeWidth={1}
              className="text-neutral-500"
            />
          )}
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="mb-2 font-aenik-bold text-[10px] uppercase tracking-widest text-neutral-500">
            {certificate.issuer}
          </p>

          {/* Consistent title height */}
          <h3 className="mb-3 line-clamp-2 min-h-12 font-aenik-bold text-xl leading-6 tracking-tight text-neutral-900">
            {certificate.title}
          </h3>

          {/* Truncated description */}
          <p className="line-clamp-3 min-h-18 text-sm leading-6 text-neutral-500">
            {certificate.description ||
              "A professional certificate recognising this achievement."}
          </p>

          {/* Skills: show up to 3 */}
          <div className="mt-4 flex min-h-7 flex-wrap content-start gap-2">
            {certificate.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border border-neutral-200 bg-white px-2.5 py-1.5 text-[10px] text-neutral-600"
              >
                {tag}
              </span>
            ))}

            {certificate.tags?.length > 3 && (
              <span className="px-1 py-1.5 text-[10px] text-neutral-500">
                +{certificate.tags.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500"
            >
              View details
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${certificate.title}`}
                title="Verify certificate"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-neutral-900 text-white transition-colors hover:bg-neutral-700"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Expanded Certificate Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white font-aenik-regular shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Certificate
              </span>

              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="Close certificate details"
                className="flex h-9 w-9 items-center justify-center border border-neutral-200 transition-colors hover:bg-neutral-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* Full Certificate Preview */}
              <div className="mb-7 flex min-h-64 items-center justify-center bg-[#e8eee9] p-6">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="max-h-112 max-w-full object-contain"
                  />
                ) : (
                  <FileBadge
                    size={80}
                    strokeWidth={1}
                    className="text-neutral-500"
                  />
                )}
              </div>

              {/* Full Details */}
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                {certificate.issuer}
              </p>

              <h2
                id="certificate-modal-title"
                className="text-2xl leading-tight font-aenik-bold tracking-tight text-neutral-900 sm:text-3xl"
              >
                {certificate.title}
              </h2>

              {certificate.date && (
                <p className="mt-3 text-sm text-neutral-500">
                  Issued {certificate.date}
                </p>
              )}

              {certificate.description && (
                <div className="mt-6">
                  <h3 className="mb-2 text-xs uppercase tracking-wider text-neutral-500">
                    About this certificate
                  </h3>

                  <p className="text-sm leading-7 text-neutral-600">
                    {certificate.description}
                  </p>
                </div>
              )}

              {/* All Skills */}
              {certificate.tags?.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 text-xs uppercase tracking-wider text-neutral-500">
                    Skills & Topics
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification Link */}
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-neutral-900 px-5 py-3 text-sm text-white transition-colors hover:bg-neutral-700"
                >
                  <ShieldCheck size={16} />
                  Verify certificate
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;