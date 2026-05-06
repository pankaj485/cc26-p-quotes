type Quote = {
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
  id: number;
};

type QuotePageData = {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: Quote[];
};

type ApiResponse = {
  statusCode: number;
  data: QuotePageData;
  message: string;
  success: boolean;
};

export { ApiResponse, Quote, QuotePageData };
