interface StackAccentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: { width: '0.5em', gap: '2px', barHeight: '0.12em' },
  md: { width: '0.6em', gap: '3px', barHeight: '0.14em' },
  lg: { width: '0.7em', gap: '4px', barHeight: '0.16em' },
  xl: { width: '0.8em', gap: '5px', barHeight: '0.18em' },
};

const StackAccent = ({ size = 'md', className = '' }: StackAccentProps) => {
  const { width, gap, barHeight } = sizeMap[size];

  return (
    <span
      className={`inline-flex flex-col items-start ${className}`}
      style={{ width, gap, verticalAlign: 'middle' }}
      aria-hidden="true"
    >
      <span
        className="rounded-sm"
        style={{
          width: '100%',
          height: barHeight,
          background: 'linear-gradient(90deg, #ffffff, #c8beff)',
        }}
      />
      <span
        className="rounded-sm"
        style={{
          width: '80%',
          height: barHeight,
          background: 'linear-gradient(90deg, #b4a0ff, #9682ff)',
        }}
      />
      <span
        className="rounded-sm"
        style={{
          width: '60%',
          height: barHeight,
          background: 'linear-gradient(90deg, #7c5dfa, #6446dc)',
        }}
      />
    </span>
  );
};

export default StackAccent;
