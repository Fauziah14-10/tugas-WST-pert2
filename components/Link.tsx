export function Link({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </a>
  );
}
