import { promises as fs } from "fs";
import path from "path";

const PREVENTION_DIR = path.join(process.cwd() /*turbopackIgnore: true*/);

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
    path.join(PREVENTION_DIR, ...decodedParts),
  );

  // Only allow serving explicit root files we expect.
  const allowed = new Set([
    path.join(PREVENTION_DIR, "visit doctor every 6 months.png"),
    path.join(PREVENTION_DIR, "Dental xray.png"),
  ]);
  if (!allowed.has(requestedPath)) {
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

