import { MoveRight } from 'lucide-react';
import Link from 'next/link';

type IAnchorLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;

export function AnchorLink({ children, ...props }: IAnchorLinkProps) {
  return (
    <Link
      {...props}
      className={`transition-transform duration-300 flex items-center gap-1 [font-family:_var(--second-family)] font-bold uppercase text-black group ${props.className}`}
    >
      {children}{' '}
      <MoveRight
        className="transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1}
        absoluteStrokeWidth
      />
    </Link>
  );
}
