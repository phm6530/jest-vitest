import { Link } from "react-router";

export default function GlobalNav({
  paths,
}: {
  paths: Array<{ path: string; pathName: string }>;
}) {
  return (
    <header className="flex gap-4">
      {paths.map((e) => (
        <Link key={e.path} to={e.path}>
          {e.pathName}
        </Link>
      ))}
    </header>
  );
}
