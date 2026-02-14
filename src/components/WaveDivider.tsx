interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ flip = false, className = "" }: WaveDividerProps) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
      <path
        d="M0,40 C320,80 440,0 720,50 C1000,100 1200,20 1440,60 L1440,100 L0,100Z"
        className="fill-background"
      />
    </svg>
  </div>
);

export default WaveDivider;
