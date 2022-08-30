import { FC } from "react";

interface TagsProps {
  tags: string[];
  color?: string;
}
export const Tags: FC<TagsProps> = ({ tags, color }) => {
  return (
    <div className="flex justify-start flex-wrap gap-2 h-fit max-w-full m-1">
      {tags.map((tag, idx) => (
        <div
          key={`tag-${tag}-${idx}`}
          className={`flex text-xs w-fit h-fit px-3 py-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-gray-400 rounded`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
