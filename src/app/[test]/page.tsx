export const dynamicParams = false

export async function generateStaticParams() {
  return [{ test: "1" }]
}

export default function Homepage({ params }: { params: { test: string } }) {
  const { test } = params
  return (
    <article>
      test {test}
    </article>
  )
}