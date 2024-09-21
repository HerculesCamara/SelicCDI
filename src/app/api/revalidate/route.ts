import { revalidateTag } from 'next/cache'

export async function GET() {
  revalidateTag('bcb')

  return Response.json({
    ok: true,
  })
}
