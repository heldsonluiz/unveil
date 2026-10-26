import { BarChart3 } from "lucide-react";
import { DashboardView } from "@/components/dashboard/dashboard-view";

export default function DashboardPage() {
  return (
    <main className="app-container page-content page-content--narrow">
      <div className="mb-6 sm:mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Visão geral
        </p>
        <div className="mt-2 flex items-center gap-3 sm:gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-none bg-primary text-primary-foreground sm:size-12 sm:rounded-none">
            <BarChart3 aria-hidden="true" />
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dashboard
          </h1>
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          As contagens refletem sua importação atual. Os dados podem estar
          incompletos e não são atualizados automaticamente.
        </p>
      </div>
      <DashboardView />
    </main>
  );
}
