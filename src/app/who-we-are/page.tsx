import { redirect } from 'next/navigation';

/** Nav “Who We Are” links to /about; keep this URL in sync. */
export default function WhoWeArePage() {
  redirect('/about');
}
