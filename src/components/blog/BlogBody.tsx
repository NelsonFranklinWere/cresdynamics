export default function BlogBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).filter((b) => b.trim());

  return (
    <div className="space-y-5 text-white/85 leading-relaxed">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-bold text-white pt-2">
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl font-bold text-white pt-1">
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.split('\n').every((line) => line.trim().startsWith('- '))) {
          const items = trimmed.split('\n').map((line) => line.trim().replace(/^- /, ''));
          return (
            <ul key={i} className="list-disc space-y-1 pl-6">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{trimmed}</p>;
      })}
    </div>
  );
}
