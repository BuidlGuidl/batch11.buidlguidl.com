import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

export async function GET() {
  const buildersPath = path.join(process.cwd(), "app/builders");

  try {
    const directories = await readdir(buildersPath, { withFileTypes: true });
    const addresses = directories
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => name.startsWith("0x"));

    return NextResponse.json(addresses);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
