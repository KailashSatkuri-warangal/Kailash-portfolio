export default function ClientComponent({ flags }) {
  if (!flags) return null;

  return (
    <div>
      <p>Show New Section: {String(flags.showNewSection)}</p>
      {flags.showNewSection && <p>🎉 New Section Enabled!</p>}
    </div>
  );
}