export async function POST() {
  const suggestions = [
    "Study React for 1 hour",
    "Complete JavaScript revision",
    "Build a small project",
    "Solve 5 coding problems",
    "Read tech article",
    "Go for a walk",
    "Practice Next.js routing"
  ];

  const random = suggestions
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return Response.json({ tasks: random });
}