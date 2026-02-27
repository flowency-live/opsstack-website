import StackAccent from './StackAccent';

interface BoldHeadlineProps {
  leadIn: string;
  statement: string;
  description?: string;
  withStackAccent?: boolean;
  accentPosition?: 'before' | 'after';
  className?: string;
  light?: boolean;
}

const BoldHeadline = ({
  leadIn,
  statement,
  description,
  withStackAccent = false,
  accentPosition = 'before',
  className = '',
  light = false,
}: BoldHeadlineProps) => {
  const textColor = light ? 'text-white' : 'text-foreground';
  const mutedColor = light ? 'text-white/70' : 'text-muted-foreground';

  return (
    <div className={className}>
      {/* Lead-in text - small italic */}
      <p
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-light italic tracking-wide mb-2 ${textColor}`}
      >
        {leadIn}
      </p>

      {/* Statement - massive bold */}
      <h2
        className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] ${textColor}`}
      >
        {withStackAccent && accentPosition === 'before' && (
          <>
            <StackAccent size="xl" className="mr-2" />
          </>
        )}
        {statement}
        {withStackAccent && accentPosition === 'after' && (
          <>
            <StackAccent size="xl" className="ml-2" />
          </>
        )}
      </h2>

      {/* Description - supporting text */}
      {description && (
        <p
          className={`mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed ${mutedColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default BoldHeadline;
