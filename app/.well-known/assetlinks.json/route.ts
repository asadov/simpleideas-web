import { ASSET_LINKS } from "@/lib/app-links";

/* Android App Links. Built once, served as static JSON. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(ASSET_LINKS);
}
