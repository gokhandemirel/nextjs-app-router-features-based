import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'countries.json');

  try {
    const response = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(response);

    return NextResponse.json(data);
  } catch (error) {}
}
