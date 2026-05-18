import {
  CASE_STUDY_H1_CLASS,
  CASE_STUDY_SUBTITLE_CLASS,
  type CaseStudyHeadline,
} from '@/lib/caseStudyHeadlines';

type Props = CaseStudyHeadline & {
  centered?: boolean;
  className?: string;
  titleClassName?: string;
};

export default function CaseStudyHeadline({
  title,
  subtitle,
  centered = false,
  className = '',
  titleClassName = '',
}: Props) {
  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} ${className}`.trim()}>
      <h1 className={`${CASE_STUDY_H1_CLASS} ${centered ? 'mx-auto' : ''} ${titleClassName}`.trim()}>
        {title}
      </h1>
      <p className={`${CASE_STUDY_SUBTITLE_CLASS} ${centered ? 'mx-auto' : ''}`.trim()}>{subtitle}</p>
    </div>
  );
}
