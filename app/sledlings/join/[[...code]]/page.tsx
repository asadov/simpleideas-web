import { InvitePage, inviteMetadata, type InviteParams } from "../../Invite";

/* Room invite links from the game: /sledlings/join/482K. See ../../Invite.tsx. */
export const metadata = inviteMetadata("join");

export default function SledlingsJoinPage({ params }: { params: InviteParams }) {
  return <InvitePage kind="join" params={params} />;
}
