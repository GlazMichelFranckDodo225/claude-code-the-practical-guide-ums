export default async function NoteEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <h1>Note Editor</h1>
      <p>Editing note: {id} — coming soon</p>
    </main>
  );
}
