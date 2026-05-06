import type { Quote } from "../types";

type Props = {
  quote: Quote;
};

export default function QuoteCard({ quote }: Props) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div>
        <span className="text-5xl leading-none text-indigo-300 font-serif select-none">
          &ldquo;
        </span>
        <p className="text-gray-700 text-base leading-relaxed mt-1 mb-4">
          {quote.content}
        </p>
      </div>

      <div>
        {quote.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {quote.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm font-semibold text-gray-500">&mdash; {quote.author}</p>
      </div>
    </div>
  );
}
