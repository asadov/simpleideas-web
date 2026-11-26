import { InvitePage, inviteMetadata, type InviteParams } from "../../Invite";

/* Friend invite links from the game: /sledlings/friend/SwiftOtter-12345. See ../../Invite.tsx. */
export const metadata = inviteMetadata("friend");

export default function SledlingsFriendPage({ params }: { params: InviteParams }) {
  return <InvitePage kind="friend" params={params} />;
}
