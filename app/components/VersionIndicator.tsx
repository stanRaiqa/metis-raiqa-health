'use client';

type Props = {
  showFullText?: boolean;
};

export default function VersionIndicator({ showFullText = false }: Props) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
      {showFullText ? 'Beta' : 'B'}
    </span>
  );
}


