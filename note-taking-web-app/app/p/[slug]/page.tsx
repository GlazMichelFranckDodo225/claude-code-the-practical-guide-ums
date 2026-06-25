export default async function PublicNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Public Note</h1>
      <p>Viewing public note: {slug} — coming soon</p>
    </main>
  );
}
