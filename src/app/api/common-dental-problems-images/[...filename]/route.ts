import { promises as fs } from "fs";
import path from "path";

const COMMON_PROBLEMS_DIR = path.join(process.cwd(), "common dental problems");

const CONTENT_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ filename: string[] }> },
) {
  const { filename } = await context.params;
  if (!filename?.length) {
    return new Response("Image not found", { status: 404 });
  }

  const decodedParts = filename.map((part) => decodeURIComponent(part));
  const requestedPath = path.normalize(
    path.join(COMMON_PROBLEMS_DIR, ...decodedParts),
  );

  if (!requestedPath.startsWith(COMMON_PROBLEMS_DIR)) {
    return new Response("Invalid path", { status: 400 });
  }

  try {
    const file = await fs.readFile(requestedPath);
    const ext = path.extname(requestedPath).toLowerCase();
    return new Response(file, {
      headers: {
        "Content-Type": CONTENT_TYPES[ext] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Image not found", { status: 404 });
  }
}

