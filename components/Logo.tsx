type Props = { size?: number };

export default function Logo({ size = 40 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Aromal Sathyan, ARS logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="114" height="114" rx="22" fill="#171717" stroke="#F0004F" strokeWidth="4" />
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-montserrat), Arial, sans-serif"
        fontWeight="800"
        fontSize="46"
        letterSpacing="2"
      >
        <tspan fill="#FFFFFF">AR</tspan>
        <tspan fill="#F0004F">S</tspan>
      </text>
      <rect x="26" y="88" width="68" height="4" rx="2" fill="#F0004F" />
    </svg>
  );
}
