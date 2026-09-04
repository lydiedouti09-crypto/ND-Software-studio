export default function BrowserMockup() {
  return (
    <div className="relative">
      {/* halo lumineux derrière le panneau, écho du logo */}
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-signal/20 blur-3xl" />

      <svg
        viewBox="0 0 480 560"
        className="w-full max-w-[440px] drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* panneau du navigateur */}
        <rect x="4" y="4" width="472" height="552" rx="20" fill="#10151F" />
        <rect
          x="4.5"
          y="4.5"
          width="471"
          height="551"
          rx="19.5"
          stroke="#232B38"
        />

        {/* barre du navigateur */}
        <rect x="4" y="4" width="472" height="46" rx="20" fill="#0E1420" />
        <rect x="4" y="30" width="472" height="20" fill="#0E1420" />
        <circle cx="30" cy="27" r="5" fill="#3A4353" />
        <circle cx="48" cy="27" r="5" fill="#3A4353" />
        <circle cx="66" cy="27" r="5" fill="#3A4353" />
        <rect
          x="94"
          y="18"
          width="220"
          height="18"
          rx="9"
          fill="#181F2B"
        />
        <circle cx="108" cy="27" r="3" fill="#2FD9CB" />
        <rect x="120" y="24" width="120" height="6" rx="3" fill="#3A4353" />

        {/* nav interne du site */}
        <circle cx="36" cy="76" r="7" fill="#2FD9CB" />
        <rect x="52" y="72" width="46" height="8" rx="4" fill="#4A5567" />
        <rect x="330" y="72" width="34" height="8" rx="4" fill="#3A4353" />
        <rect x="374" y="72" width="34" height="8" rx="4" fill="#3A4353" />
        <rect
          x="418"
          y="66"
          width="38"
          height="20"
          rx="10"
          fill="#1B2431"
        />

        {/* titre héro du mockup */}
        <rect x="36" y="120" width="230" height="16" rx="4" fill="#E8EBF0" />
        <rect x="36" y="144" width="170" height="16" rx="4" fill="#E8EBF0" />
        <rect x="36" y="176" width="200" height="8" rx="4" fill="#4A5567" />
        <rect x="36" y="192" width="150" height="8" rx="4" fill="#4A5567" />

        <rect
          x="36"
          y="218"
          width="120"
          height="34"
          rx="17"
          fill="#2FD9CB"
        />
        <rect x="58" y="231" width="76" height="8" rx="4" fill="#0A0E14" />

        {/* bloc visuel du mockup */}
        <rect
          x="290"
          y="118"
          width="154"
          height="140"
          rx="14"
          fill="#181F2B"
        />
        <path
          d="M290 220 L332 186 L364 214 L398 176 L444 214 L444 244 A14 14 0 0 1 430 258 L304 258 A14 14 0 0 1 290 244 Z"
          fill="#1E2A33"
        />
        <circle cx="418" cy="146" r="14" fill="#2FD9CB" fillOpacity="0.35" />
        <circle cx="418" cy="146" r="6" fill="#2FD9CB" />

        {/* rangée de cartes */}
        {[36, 187, 338].map((x, i) => (
          <g key={x}>
            <rect
              x={x}
              y="296"
              width="106"
              height="98"
              rx="12"
              fill="#151B26"
              stroke="#232B38"
            />
            <rect
              x={x + 16}
              y={316}
              width="20"
              height="20"
              rx="6"
              fill={i === 1 ? "#2FD9CB" : "#3A4353"}
            />
            <rect
              x={x + 16}
              y={350}
              width="70"
              height="8"
              rx="4"
              fill="#4A5567"
            />
            <rect
              x={x + 16}
              y={366}
              width="50"
              height="6"
              rx="3"
              fill="#3A4353"
            />
          </g>
        ))}

        {/* pied de mockup : liste + statut */}
        <rect x="36" y="428" width="408" height="1" fill="#232B38" />
        <rect x="36" y="452" width="130" height="8" rx="4" fill="#4A5567" />
        <rect x="36" y="470" width="90" height="8" rx="4" fill="#3A4353" />

        <g>
          <circle cx="404" cy="466" r="20" fill="#0E1420" stroke="#232B38" />
          <circle cx="404" cy="466" r="4" fill="#2FD9CB">
            <animate
              attributeName="opacity"
              values="1;0.35;1"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <rect x="36" y="508" width="408" height="30" rx="8" fill="#151B26" />
        <rect x="52" y="519" width="8" height="8" rx="4" fill="#2FD9CB" />
        <rect x="70" y="519" width="180" height="8" rx="4" fill="#4A5567" />
      </svg>
    </div>
  );
}
