interface NumberedStepCardProps {
  number: number;
  content: string;
  highlight?: string;
  className?: string;
}

const NumberedStepCard = ({
  number,
  content,
  highlight,
  className = '',
}: NumberedStepCardProps) => {
  // Parse content to insert highlight
  const renderContent = () => {
    if (!highlight) {
      return <span>{content}</span>;
    }

    const parts = content.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="font-bold text-white">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(180deg,
          rgba(184, 168, 248, 0.25) 0%,
          rgba(124, 93, 250, 0.7) 35%,
          rgba(80, 60, 180, 0.95) 100%
        )`,
        borderRadius: '9999px 9999px 24px 24px',
      }}
    >
      {/* Number container - pill top section */}
      <div className="flex justify-center pt-8 pb-4">
        <span
          className="font-display font-black leading-none"
          style={{
            fontSize: 'clamp(6rem, 15vw, 10rem)',
            background: 'linear-gradient(180deg, #ffffff 0%, #7c5dfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {number}
        </span>
      </div>

      {/* Content section */}
      <div className="px-6 pb-8 text-center">
        <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
          {renderContent()}
        </p>
      </div>
    </div>
  );
};

export default NumberedStepCard;
