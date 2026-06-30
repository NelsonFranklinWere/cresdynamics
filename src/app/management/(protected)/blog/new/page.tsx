import { ManagementSection } from '@/components/management/ManagementUI';
import BlogEditorClient from '../BlogEditorClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function NewBlogPostPage() {
  return (
    <ManagementSection
      title="New blog post"
      subtitle="Draft content, then publish when ready"
      fillScreen
      variant="neu"
    >
      <BlogEditorClient />
    </ManagementSection>
  );
}
