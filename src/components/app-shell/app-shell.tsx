import Link from "next/link";
import Image from "next/image";
import { BarChart3, FileUp } from "lucide-react";
import type { ReactNode } from "react";
import { version } from "../../../package.json";
import { ClearLocalData } from "./clear-local-data";
import { MobileNavigation } from "./mobile-navigation";
import { ProjectActions } from "./project-actions";

const navigation = [
  { href: "/import", label: "Importação", icon: FileUp },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="app-container app-header flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Unveil, início"
          >
            <span className="size-9 shrink-0 overflow-hidden rounded-none sm:size-10">
              <Image
                src="/icon-reciprocidade.png"
                alt=""
                width={40}
                height={40}
              />
            </span>
            <span>
              <span className="block font-heading text-[22px] font-bold tracking-[-0.04em]">
                Unveil
              </span>
            </span>
          </Link>
          <nav
            aria-label="Navegação principal"
            className="ml-auto hidden flex-wrap gap-4 md:flex"
          >
            {navigation.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex min-h-9 items-center gap-2 rounded-none px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </nav>
          <div
            role="group"
            aria-label="Ações do projeto"
            className="hidden flex-wrap items-center gap-0 md:flex [&_button]:px-2 [&_button]:text-xs"
          >
            <ProjectActions />
            <ClearLocalData />
          </div>
          <MobileNavigation />
        </div>
      </header>
      <div className="min-h-[calc(100vh-96px)]">{children}</div>
      <footer className="border-t border-border py-8 sm:pb-16">
        <div className="app-container flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Unveil · v{version}</span>
          <span>
            Nenhum dado é enviado para um servidor. O ZIP fica no seu
            dispositivo. Usamos Google Analytics para medir acessos.
          </span>
          <div className="flex flex-wrap items-center gap-1">
            <ProjectActions />
            <ClearLocalData />
          </div>
        </div>
      </footer>
    </div>
  );
}
