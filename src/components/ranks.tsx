interface CrystalGemProps {
  size?: number;
  className?: string;
}

const CrystalGem: React.FC<CrystalGemProps> = ({
  size = 144,
  className = "",
}) => {
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 626 549"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Filters */}
        <filter
          id="filter0_f"
          x="295.068"
          y="29.5433"
          width="33.6732"
          height="33.6732"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5306"
            result="effect1_foregroundBlur"
          />
        </filter>
        <filter
          id="filter1_f"
          x="89.9674"
          y="29.5436"
          width="439.283"
          height="439.283"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.65302"
            result="effect1_foregroundBlur"
          />
        </filter>
        <filter
          id="filter2_f"
          x="289.558"
          y="22.5025"
          width="44.6932"
          height="47.7547"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.459181"
            result="effect1_foregroundBlur"
          />
        </filter>
        <filter
          id="filter3_dd"
          x="-0.000259399"
          y="8.34465e-05"
          width="625.678"
          height="548.42"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="15.306" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.558594 0 0 0 0 0.710156 0 0 0 0 0.9375 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6.12241" />
          <feGaussianBlur stdDeviation="45.9181" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.670833 0 0 0 0 0.8025 0 0 0 0 1 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>

        {/* Gradients */}
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(311.904 46.3799) rotate(90) scale(22.0407)"
        >
          <stop stopColor="#E7ECFF" />
          <stop offset="0.979167" stopColor="#ABC3FF" stopOpacity="0.8825" />
          <stop offset="1" stopColor="#AACCFF" stopOpacity="0.88" />
        </radialGradient>
        <linearGradient
          id="paint1_linear"
          x1="310.374"
          y1="47.1455"
          x2="310.374"
          y2="374.695"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2DFFF" stopOpacity="0.89" />
          <stop offset="0.28125" stopColor="#CCDDFF" stopOpacity="0.2" />
          <stop offset="1" stopColor="#56D7E0" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="310.374"
          y1="47.1455"
          x2="310.374"
          y2="374.695"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEE7FF" />
          <stop offset="0.0722622" stopColor="#CCDDFF" stopOpacity="0.33" />
          <stop offset="1" stopColor="#98C6F0" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(283.561 391.906) rotate(50.3431) scale(54.5309 61.5554)"
        >
          <stop offset="0.432002" stopColor="#023580" />
          <stop offset="1" stopColor="#0D3D78" />
        </radialGradient>
        <linearGradient
          id="paint14_linear"
          x1="254.284"
          y1="121.783"
          x2="378.574"
          y2="368.705"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFAFA" />
          <stop offset="1" stopColor="#C2C4CD" />
        </linearGradient>
        <linearGradient
          id="paint15_linear"
          x1="253.18"
          y1="142.222"
          x2="360.345"
          y2="339.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CDCFD6" />
          <stop offset="1" stopColor="#EFEFF1" />
        </linearGradient>
        <linearGradient
          id="paint50_linear"
          x1="249.15"
          y1="226.362"
          x2="377.708"
          y2="226.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDF0F2" />
          <stop offset="0.472359" stopColor="#F9F9F9" />
          <stop offset="0.523892" stopColor="#CCCED7" />
          <stop offset="1" stopColor="#E0E2EB" />
        </linearGradient>
        <linearGradient
          id="paint51_linear"
          x1="283.569"
          y1="199.897"
          x2="347.036"
          y2="290.958"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B7B8C6" />
          <stop offset="1" stopColor="#FCFCFF" />
        </linearGradient>
        <linearGradient
          id="paint52_linear"
          x1="266.709"
          y1="252.208"
          x2="360.309"
          y2="252.208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9F9F9" />
          <stop offset="0.439678" stopColor="#F9F9F9" />
          <stop offset="0.526536" stopColor="#DCDDE6" />
          <stop offset="1" stopColor="#C6C7D2" />
        </linearGradient>
        <linearGradient
          id="paint54_linear"
          x1="291.223"
          y1="224.255"
          x2="329.138"
          y2="272.762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#466CC6" />
          <stop offset="1" stopColor="#75D2F4" />
        </linearGradient>
        <linearGradient
          id="paint55_linear"
          x1="310.869"
          y1="224.301"
          x2="331.237"
          y2="233.822"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153262" stopColor="#2251BD" />
          <stop offset="1" stopColor="#3383E8" />
        </linearGradient>
        <linearGradient
          id="paint56_linear"
          x1="328.27"
          y1="226.749"
          x2="336.164"
          y2="257.641"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153262" stopColor="#2E35AC" />
          <stop offset="0.721384" stopColor="#59A5EC" />
        </linearGradient>
        <linearGradient
          id="paint57_linear"
          x1="318.471"
          y1="259.956"
          x2="340.991"
          y2="261.216"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153262" stopColor="#5DB9ED" />
          <stop offset="1" stopColor="#579BEB" />
        </linearGradient>
        <linearGradient
          id="paint58_linear"
          x1="289.731"
          y1="236.803"
          x2="314.58"
          y2="226.269"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153262" stopColor="#3A79F8" />
          <stop offset="1" stopColor="#3C57F7" />
        </linearGradient>
        <linearGradient
          id="paint59_linear"
          x1="298.882"
          y1="229.972"
          x2="290.706"
          y2="263.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.03125" stopColor="#2E35AC" />
          <stop offset="0.901042" stopColor="#3061C2" />
        </linearGradient>
        <linearGradient
          id="paint60_linear"
          x1="298.882"
          y1="248.146"
          x2="311.519"
          y2="271.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153262" stopColor="#2E35AC" />
          <stop offset="0.826605" stopColor="#3380E5" />
        </linearGradient>
        <linearGradient
          id="paint61_linear"
          x1="303.119"
          y1="249.382"
          x2="331.01"
          y2="235.563"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.153262" stopColor="#5DB9ED" />
          <stop offset="1" stopColor="#579BEB" />
        </linearGradient>
        <linearGradient
          id="paint62_linear"
          x1="294.882"
          y1="240.682"
          x2="329.405"
          y2="254.622"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A58C6" />
          <stop offset="1" stopColor="#4FF4FF" />
        </linearGradient>
        <linearGradient
          id="paint63_linear"
          x1="304.078"
          y1="235.906"
          x2="321.568"
          y2="255.285"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#166CFD" />
          <stop offset="1" stopColor="#89DFFF" />
        </linearGradient>
      </defs>

      {/* Star glow at top */}
      <g opacity="0.5" filter="url(#filter0_f)">
        <circle
          cx="311.904"
          cy="46.3799"
          r="13.7754"
          fill="url(#paint0_radial)"
        />
      </g>

      {/* Outer circle glow */}
      <g filter="url(#filter1_f)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M309.609 448.929C419.924 448.929 509.353 359.501 509.353 249.185C509.353 138.87 419.924 49.4414 309.609 49.4414C199.294 49.4414 109.865 138.87 109.865 249.185C109.865 359.501 199.294 448.929 309.609 448.929ZM309.609 453.521C422.46 453.521 513.944 362.037 513.944 249.185C513.944 136.334 422.46 44.8496 309.609 44.8496C196.758 44.8496 105.273 136.334 105.273 249.185C105.273 362.037 196.758 453.521 309.609 453.521Z"
          fill="url(#paint1_linear)"
        />
      </g>

      {/* Outer circle */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M309.609 448.929C419.924 448.929 509.353 359.501 509.353 249.185C509.353 138.87 419.924 49.4414 309.609 49.4414C199.294 49.4414 109.865 138.87 109.865 249.185C109.865 359.501 199.294 448.929 309.609 448.929ZM309.609 453.521C422.46 453.521 513.944 362.037 513.944 249.185C513.944 136.334 422.46 44.8496 309.609 44.8496C196.758 44.8496 105.273 136.334 105.273 249.185C105.273 362.037 196.758 453.521 309.609 453.521Z"
        fill="url(#paint2_linear)"
      />

      {/* Star at top */}
      <g filter="url(#filter2_f)">
        <path
          d="M311.905 23.4209L313.874 44.27L333.333 46.3799L313.874 48.4899L311.905 69.339L309.936 48.4899L290.477 46.3799L309.936 44.27L311.905 23.4209Z"
          fill="white"
        />
      </g>

      {/* Main gem structure */}
      <g filter="url(#filter3_dd)">
        {/* Base platform */}
        <path
          d="M259.808 371.468H365.868V423.393L312.838 449.908L259.808 423.393V371.468Z"
          fill="url(#paint3_radial)"
        />

        {/* Main hexagonal body */}
        <path
          d="M303.311 87.9975L183.993 152.905C177.949 156.193 174.187 162.523 174.187 169.404L174.187 317.776C174.187 324.656 177.949 330.986 183.993 334.274L303.311 399.182C308.907 402.226 315.665 402.226 321.261 399.182L440.579 334.274C446.623 330.986 450.385 324.656 450.385 317.776L450.385 169.404C450.385 162.523 446.623 156.193 440.579 152.905L321.261 87.9975C315.665 84.9533 308.907 84.9533 303.311 87.9975Z"
          fill="url(#paint14_linear)"
        />

        {/* Inner hexagonal face */}
        <path
          d="M303.179 112.285L204.947 165.722C198.926 168.998 195.178 175.304 195.178 182.158L195.178 304.463C195.178 311.318 198.926 317.624 204.947 320.9L303.179 374.337C308.754 377.37 315.487 377.37 321.062 374.337L419.294 320.9C425.315 317.624 429.063 311.318 429.063 304.463L429.063 182.158C429.063 175.304 425.315 168.998 419.294 165.722L321.062 112.285C315.487 109.252 308.754 109.252 303.179 112.285Z"
          fill="url(#paint15_linear)"
        />

        {/* Shield/Badge shape */}
        <g filter="url(#filter3_dd)">
          <path
            d="M249.15 247.237V195.058L310.026 180.311C313.051 179.098 317.336 179.681 319.101 180.311L377.708 195.058C377.456 202.242 377.103 223.038 377.708 248.749C378.313 274.461 358.046 297.777 347.837 306.222L316.454 329.287C315.824 329.413 314.337 329.589 313.429 329.287C312.522 328.984 288.207 312.712 277.131 303.575C255.201 285.485 249.402 258.832 249.15 247.237Z"
            fill="url(#paint50_linear)"
          />
          <path
            d="M260.705 247.045V204.364L310.501 192.301C313.134 191.618 316.48 191.786 317.924 192.301L365.863 204.364C365.657 210.24 365.369 227.251 365.863 248.283C366.358 269.314 349.78 288.387 341.43 295.295L315.759 314.161C315.243 314.264 314.027 314.409 313.284 314.161C312.542 313.914 293.18 300.037 283.592 293.13C265.777 279.026 260.911 256.53 260.705 247.045Z"
            fill="url(#paint51_linear)"
          />
          <path
            d="M266.299 246.795V208.654C266.299 208.654 308.495 198.552 310.797 197.875C313.099 197.197 316.14 197.414 317.43 197.875L360.27 208.654C360.086 213.905 359.828 229.107 360.27 247.901C360.712 266.695 345.898 283.739 338.436 289.912L315.496 306.771C315.035 306.863 313.948 306.992 313.284 306.771C312.621 306.55 295.319 294.149 286.751 287.977C270.832 275.374 266.483 255.271 266.299 246.795Z"
            fill="url(#paint52_linear)"
          />
        </g>
      </g>

      {/* Center crystal/gem */}
      <g filter="url(#filter3_dd)">
        <path
          d="M312.287 214.505L325.665 222.267L339.077 229.972L339.044 245.439L339.077 260.906L325.665 268.612L312.287 276.373L298.908 268.612L285.497 260.906L285.53 245.439L285.497 229.972L298.908 222.267L312.287 214.505Z"
          fill="url(#paint54_linear)"
        />
        <path
          d="M312.287 245.568V214.634L321.696 229.199L339.097 229.972L312.287 245.568Z"
          fill="url(#paint55_linear)"
        />
        <path
          d="M312.287 245.439L339.097 260.906L331.105 245.439L339.097 229.972L312.287 245.439Z"
          fill="url(#paint56_linear)"
        />
        <path
          d="M312.287 245.439V276.374L321.696 261.68L339.097 260.907L312.287 245.439Z"
          fill="url(#paint57_linear)"
        />
        <path
          d="M312.287 245.568V214.634L302.878 229.199L285.477 229.972L312.287 245.568Z"
          fill="url(#paint58_linear)"
        />
        <path
          d="M312.287 245.439L285.477 260.906L293.469 245.439L285.477 229.972L312.287 245.439Z"
          fill="url(#paint59_linear)"
        />
        <path
          d="M312.287 245.439V276.374L302.878 261.68L285.477 260.907L312.287 245.439Z"
          fill="url(#paint60_linear)"
        />

        {/* Inner gem layers with blend modes */}
        <g opacity="0.3">
          <path
            d="M302.947 229.145L312.246 231.521L321.518 229.256L324.221 238.53L330.901 245.508L324.304 252.405L321.712 261.647L312.412 259.271L303.14 261.535L300.437 252.262L293.758 245.284L300.354 238.387L302.947 229.145Z"
            fill="url(#paint61_linear)"
            style={{ mixBlendMode: "hard-light" }}
          />
        </g>
        <g opacity="0.6">
          <path
            d="M302.966 229.207L312.319 238.262L321.672 229.207L318.507 241.835L331.025 245.408L318.507 248.98L321.672 261.608L312.319 252.553L302.966 261.608L306.131 248.98L293.613 245.408L306.131 241.835L302.966 229.207Z"
            fill="url(#paint62_linear)"
            style={{ mixBlendMode: "hard-light" }}
          />
        </g>
        <path
          d="M312.287 231.519L318.307 235.011L324.342 238.479L324.328 245.439L324.342 252.399L318.307 255.867L312.287 259.359L306.267 255.867L300.231 252.399L300.246 245.439L300.231 238.479L306.267 235.011L312.287 231.519Z"
          fill="url(#paint63_linear)"
          style={{ mixBlendMode: "hard-light" }}
        />

        {/* Center sparkle */}
        <g opacity="0.8">
          <path
            d="M304.296 238.994L305.077 239.445L305.858 239.896L305.858 240.799L305.858 241.701L305.077 242.152L304.296 242.603L303.514 242.152L302.733 241.701L302.733 240.799L302.733 239.896L303.514 239.445L304.296 238.994Z"
            fill="#F1F8FA"
            style={{ mixBlendMode: "hard-light" }}
          />
        </g>
      </g>
    </svg>
  );
};

export default CrystalGem;
