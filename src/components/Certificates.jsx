import { GraduationCap, BadgeCheck } from "lucide-react";

import { container } from "../data/constants";
import { certificates } from "../data/certificates";
import { badges } from "../data/badges";

import CertificateCard from "./CertificateCard";
import BadgeCard from "./BadgeCard";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 md:py-30">
      <div className={container}>
        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 font-aenik-bold text-2xl opacity-10 md:text-[50px]">
            /CERTIFICATES & BADGES
          </p>
          <div className="flex items-center justify-between">
            <h2 className="font-aenik-bold text-3xl leading-none tracking-tighter md:text-[60px]">
              Proof of learning.
            </h2>

            <p className="mt-5 hidden md:block max-w-lg font-aenik-regular text-sm leading-6 text-neutral-500 md:text-base">
              Professional certifications and technical achievements earned
              throughout my development journey.
            </p>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap size={22} strokeWidth={1.5} />

            <h3 className="font-aenik-bold text-2xl tracking-tight">
              Certificates
            </h3>

            <span className="font-aenik-regular text-xs text-neutral-400">
              ({certificates.length})
            </span>
          </div>

          {certificates.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
          ) : (
            <p className="font-aenik-regular text-sm text-neutral-500">
              Certificates will appear here as they are added.
            </p>
          )}
        </div>

        {/* Badges */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <BadgeCheck size={22} strokeWidth={1.5} />

            <h3 className="font-aenik-bold text-2xl tracking-tight">
              Digital Badges
            </h3>

            <span className="font-aenik-regular text-xs text-neutral-400">
              ({badges.length})
            </span>
          </div>

          {badges.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {badges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          ) : (
            <p className="font-aenik-regular text-sm text-neutral-500">
              Digital badges will appear here as they are added.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
