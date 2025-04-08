import * as React from "react";
import { SocialLinkProps } from "./types";

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  ariaLabel,
}) => (
  <a
    className="text-2xl"
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);
