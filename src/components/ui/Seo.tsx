/**
 * Título e meta description por rota. O React 19 içá essas tags para o <head>.
 */
export function Seo({ titulo, descricao }: { titulo: string; descricao: string }) {
  return (
    <>
      <title>{titulo}</title>
      <meta name="description" content={descricao} />
    </>
  )
}
