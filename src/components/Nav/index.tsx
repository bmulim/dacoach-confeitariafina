import Link from "next/link";

export type NavLink = {
  href: string;
  label: string;
};

export interface NavProps {
  links: NavLink[];
  className?: string; // applied to the root <nav>
  listClassName?: string; // applied to the <ul>
  itemClassName?: string; // applied to each <li>
  linkClassName?: string; // applied to each <Link>
  logo?: React.ReactNode; // optional logo node
  onLinkClick?: () => void; // called when any link is clicked
}

/**
 * Nav
 * - Sem estilização interna: todas as classes devem ser passadas via props.
 * - Marcaçao limpa e acessível (nav > ul > li > a).
 * - Projetado para ser reutilizável em outros projetos.
 */
export default function Nav({
  links,
  className,
  listClassName,
  itemClassName,
  linkClassName,
  logo,
  onLinkClick,
}: NavProps) {
  return (
    <nav className={className} aria-label="Primary navigation">
      {logo && <div>{logo}</div>}
      <ul className={listClassName}>
        {links.map((l) => (
          <li key={l.href} className={itemClassName}>
            <Link href={l.href} className={linkClassName} onClick={onLinkClick}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
