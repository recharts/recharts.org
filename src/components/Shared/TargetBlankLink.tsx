import { ReactNode } from 'react';
import targetBlankSvg from './targetBlank.svg';

type TargetBlankLinkProps = {
  href: string;
  children: ReactNode;
};

export function TargetBlankLink({ href, children }: TargetBlankLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <img height={20} style={{ verticalAlign: 'text-bottom' }} src={targetBlankSvg} alt="Link opens in new tab" />
    </a>
  );
}
