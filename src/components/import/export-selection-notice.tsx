import { TriangleAlert } from "lucide-react";

export function ExportSelectionNotice() {
  return (
    <aside
      aria-label="Importante: selecione apenas Seguidores e seguindo"
      className="border-2 border-primary bg-primary/10 p-5 sm:p-6"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <TriangleAlert
          className="mt-1 size-6 shrink-0 text-primary"
          aria-hidden="true"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Atenção antes de gerar o ZIP
          </p>
          <h2 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
            Selecione{" "}
            <strong className="text-primary">
              APENAS Seguidores e seguindo
            </strong>
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Na exportação do Instagram, entre em{" "}
            <strong>Personalizar informações</strong>,
            <strong> desmarque todas as categorias</strong> e, em{" "}
            <strong>Conexões</strong>, marque somente{" "}
            <strong>Seguidores e seguindo</strong>.
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Não selecione todas as informações, fotos ou vídeos. Eles aumentam o
            tamanho do ZIP e não são usados na análise. Exporte em{" "}
            <strong className="text-foreground">JSON</strong>.
          </p>
        </div>
      </div>
    </aside>
  );
}
