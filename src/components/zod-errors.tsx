export const ZodErrors = ({ error }: { error: string[] | undefined }) => {
  if (!error) return null
  return error.map((err: string, index: number) => (
    <div key={index} className="text-red-500 text-xs">
      {err}
    </div>
  ))
}
