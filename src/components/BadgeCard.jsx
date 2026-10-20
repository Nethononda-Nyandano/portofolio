import { useState } from "react";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  X,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const BadgeCard = ({ badge }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isCredlyBadge = Boolean(badge.credlyBadgeId);

  return (
    <>
      {/* Badge Card */}
      <article className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white font-aenik-regular transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Badge Display */}
        <div className="flex h-60 shrink-0 items-center justify-center overflow-hidden bg-neutral-50 p-6">
          {isCredlyBadge ? (
            <iframe
              title={`${badge.title} - Credly Badge`}
              src={`https://www.credly.com/embedded_badge/${badge.credlyBadgeId}`}
              className="h-60 w-full max-w-sm border-0"
              loading="lazy"
            />
          ) : badge.image ? (
            <img
              src={badge.image}
              alt={`${badge.title} badge`}
              className="max-h-44 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <Award
              size={64}
              strokeWidth={1.2}
              className="text-neutral-400"
            />
          )}
        </div>

        {/* Badge Details */}
        <div className="flex flex-1 flex-col p-5">
          {/* Issuer */}
          <p className="mb-2 text-xs uppercase tracking-wider text-neutral-500">
            {badge.issuer}
          </p>

          {/* Fixed-height title area */}
          <h3 className="mb-3 line-clamp-2 min-h-12 text-lg font-semibold leading-6 text-neutral-900">
            {badge.title}
          </h3>

          {/* Fixed-height description */}
          <p className="line-clamp-3 min-h-18 text-sm leading-6 text-neutral-600">
            {badge.description || "A professional digital badge recognising this achievement."}
          </p>

          {/* Tags: display up to 3 */}
          <div className="mt-4 flex min-h-7 flex-wrap content-start gap-2">
            {badge.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}

            {badge.tags?.length > 3 && (
              <span className="px-1 py-1 text-xs text-neutral-500">
                +{badge.tags.length - 3}
              </span>
            )}
          </div>

          {/* Footer stays at the bottom */}
          <div className="flex items-center justify-between gap-3 border-t border-neutral-100 pt-4 mt-5">
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

            {badge.credentialUrl && (
              <a
                href={badge.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${badge.title}`}
                title="Verify credential"
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-200 transition-colors hover:bg-neutral-100"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Expanded Details Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="badge-modal-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white font-aenik-regular shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Digital Credential
              </span>

              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="Close badge details"
                className="flex h-9 w-9 items-center justify-center border border-neutral-200 transition-colors hover:bg-neutral-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* Full Badge Display */}
              <div className="mb-7 flex min-h-56 items-center justify-center bg-neutral-50 p-6">
                {isCredlyBadge ? (
                  <iframe
                    title={`${badge.title} - Credly Badge`}
                    src={`https://www.credly.com/embedded_badge/${badge.credlyBadgeId}`}
                    className="h-64 w-full max-w-sm border-0"
                    loading="lazy"
                  />
                ) : badge.image ? (
                  <img
                    src={badge.image}
                    alt={`${badge.title} badge`}
                    className="max-h-64 max-w-full object-contain"
                  />
                ) : (
                  <Award
                    size={80}
                    strokeWidth={1.2}
                    className="text-neutral-400"
                  />
                )}
              </div>

              {/* Full Information */}
              <p className="mb-2 text-sm text-neutral-500">
                Issued by {badge.issuer}
                {badge.date && ` · ${badge.date}`}
              </p>

              <h2
                id="badge-modal-title"
                className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl"
              >
                {badge.title}
              </h2>

              {badge.description && (
                <div className="mt-5">
                  <h3 className="mb-2 text-xs uppercase tracking-wider text-neutral-500">
                    About this achievement
                  </h3>

                  <p className="text-sm leading-7 text-neutral-700">
                    {badge.description}
                  </p>
                </div>
              )}

              {/* All Tags */}
              {badge.tags?.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 text-xs uppercase tracking-wider text-neutral-500">
                    Skills & Topics
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {badge.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification */}
              {badge.credentialUrl && (
                <a
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full font-aenik-regular items-center justify-center gap-2 bg-neutral-900 px-5 py-3 text-sm text-white transition-colors hover:bg-neutral-700 sm:w-auto"
                >
                  
                  View verified credential
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

export default BadgeCard;