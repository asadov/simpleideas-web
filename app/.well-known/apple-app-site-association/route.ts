import { APPLE_APP_SITE_ASSOCIATION } from "@/lib/app-links";

/* iOS universal links (no file extension, by Apple's rule). Built once, served as static JSON. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(APPLE_APP_SITE_ASSOCIATION);
}
