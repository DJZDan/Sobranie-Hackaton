// /pages/api/search.js

export default async function handler(req, res) {
  const { query, page = 1 } = req.query;
  const pageSize = 10; // Define how many results per page

  // Mock data to simulate search results
  const mockData = [
    { id: 1, title: "Law on Technology", description: "Description for Law on Technology.", timePublished: "5" },
    { id: 2, title: "Financial Literacy Law", description: "Description for Financial Literacy Law." , timePublished: "7" },
    { id: 3, title: "Career Development Act", description: "Description for Career Development Act." , timePublished: "12" },
    { id: 4, title: "Law on Technology", description: "Description for Law on Technology." , timePublished: "16" },
    { id: 5, title: "Financial Literacy Law", description: "Description for Financial Literacy Law." , timePublished: "22" },
    { id: 6, title: "Career Development Act", description: "Description for Career Development Act." , timePublished: "25" },
    { id: 7, title: "Law on Technology", description: "Description for Law on Technology." , timePublished: "33" },
    { id: 8, title: "Financial Literacy Law", description: "Description for Financial Literacy Law." , timePublished: "40" },
    { id: 9, title: "Career Development Act", description: "Description for Career Development Act." , timePublished: "41" },
    { id: 10, title: "Law on Technology", description: "Description for Law on Technology." , timePublished: "43" },
    { id: 11, title: "Financial Literacy Law", description: "Description for Financial Literacy Law." , timePublished: "55" },
    { id: 12, title: "Career Development Act", description: "Description for Career Development Act." , timePublished: "60" },
  ];

  // Filter results based on the query (simple case-insensitive search on title)
  const filteredData = mockData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Calculate pagination details
  const totalResults = filteredData.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedResults = filteredData.slice(start, end);

  res.status(200).json({
    results: paginatedResults,
    totalPages,
  });
}
