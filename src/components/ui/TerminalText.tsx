import { useEffect, useState } from "react";

export function TerminalText({ texts, speed = 80 }: { texts: string[]; speed?: number }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    if (!deleting && display === current) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && display === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
      return;
    }
    const t = setTimeout(
      () => {
        setDisplay((d) =>
          deleting ? current.substring(0, d.length - 1) : current.substring(0, d.length + 1),
        );
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [display, deleting, index, texts, speed]);

  return (
    <span className="font-mono text-[var(--color-accent)]">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}
