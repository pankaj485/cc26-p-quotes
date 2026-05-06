import { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./components/Quote";
import type { ApiResponse, Quote, QuotePageData } from "./types";

const API_BASE = "https://api.freeapi.app/api/v1/public/quotes";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [meta, setMeta] = useState<Omit<QuotePageData, "data"> | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}?page=${page}&limit=10`)
      .then((_) => _.json())
      .then((res: ApiResponse) => {
        if (res.success && res.statusCode === 200) {
          const { data: items, ...rest } = res.data;
          setQuotes(items);
          setMeta(rest);
        } else {
          setError("Failed to fetch quotes.");
        }
      })
      .catch(() => setError("Network error. Please try again."))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="min-h-dvh bg-slate-100">
      <header className="bg-indigo-600 text-white py-8 px-4 text-center shadow">
        <h1 className="text-3xl font-bold tracking-tight">
          RandomAPI Quote Gallery
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {error && <p className="text-center text-red-500 mb-6">{error}</p>}

        {loading ? (
          <h2 className="text-center">Loading Quotes ...</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quotes.map((q) => (
              <QuoteCard key={q.id} quote={q} />
            ))}
          </div>
        )}

        {meta && (
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={!meta.previousPage || loading}
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
            >
              &larr; Previous
            </button>

            <span className="text-sm text-gray-500">
              Page {meta.page} of {meta.totalPages}
            </span>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!meta.nextPage || loading}
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
