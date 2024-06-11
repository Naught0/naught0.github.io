"use client";
export const Randmoji = ({
  emojis = ["❤️", "🐐", "🐀", "🧽", "😅", "💾"],
}: {
  emojis?: string[];
}) => {
  return emojis[Math.ceil(Math.random() * emojis.length) - 1];
};
