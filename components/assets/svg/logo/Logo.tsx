import PathAnimation from "../PathAnimation";

export default function Logo({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      style={{position: 'relative', top: '4px' }}
      viewBox="0 0 347 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 25C0 11.1929 11.1929 0 25 0H295C308.807 0 320 11.1929 320 25V135C320 148.807 308.807 160 295 160H25C11.1929 160 0 148.807 0 135V25Z"
        fill="black"
      />
      <path
        d="M149.731 117V37H182.778C188.768 37 193.937 38.0807 198.286 40.2422C202.661 42.3776 206.034 45.4505 208.403 49.4609C210.773 53.4453 211.958 58.1719 211.958 63.6406C211.958 69.1875 210.747 73.901 208.325 77.7812C205.903 81.6354 202.466 84.5781 198.013 86.6094C193.56 88.6146 188.286 89.6172 182.192 89.6172H161.294V74.3828H178.599C181.515 74.3828 183.95 74.0052 185.903 73.25C187.882 72.4687 189.38 71.2969 190.396 69.7344C191.411 68.1458 191.919 66.1146 191.919 63.6406C191.919 61.1667 191.411 59.1224 190.396 57.5078C189.38 55.8672 187.882 54.6432 185.903 53.8359C183.924 53.0026 181.489 52.5859 178.599 52.5859H169.067V117H149.731ZM194.771 80.4375L214.692 117H193.599L174.067 80.4375H194.771ZM270.962 37H290.259V88.6016C290.259 94.5651 288.84 99.7604 286.001 104.187C283.162 108.589 279.204 112 274.126 114.422C269.048 116.818 263.149 118.016 256.431 118.016C249.634 118.016 243.696 116.818 238.618 114.422C233.54 112 229.595 108.589 226.782 104.187C223.97 99.7604 222.563 94.5651 222.563 88.6016V37H241.899V86.9219C241.899 89.6823 242.498 92.1432 243.696 94.3047C244.92 96.4661 246.626 98.1589 248.813 99.3828C251.001 100.607 253.54 101.219 256.431 101.219C259.321 101.219 261.847 100.607 264.009 99.3828C266.196 98.1589 267.902 96.4661 269.126 94.3047C270.35 92.1432 270.962 89.6823 270.962 86.9219V37Z"
        fill="white"
      />
      <g filter="url(#filter0_d_0_1)">
        <PathAnimation
          d="M81.4251 105.708C85.3091 112.182 94.6909 112.182 98.5749 105.708L140.913 35.1449C144.912 28.4797 140.111 20 132.338 20H90H47.6619C39.889 20 35.0878 28.4797 39.087 35.145L81.4251 105.708Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d_0_1)">
        <PathAnimation
          d="M81.3622 79.1924C85.221 85.8074 94.779 85.8074 98.6378 79.1924L116.227 49.0387C120.116 42.3722 115.308 34 107.59 34H72.4104C64.6925 34 59.8838 42.3721 63.7726 49.0387L81.3622 79.1924Z"
          fill="white"
        />
        <path
          d="M81.3622 79.1924C85.221 85.8074 94.779 85.8074 98.6378 79.1924L116.227 49.0387C120.116 42.3722 115.308 34 107.59 34H72.4104C64.6925 34 59.8838 42.3721 63.7726 49.0387L81.3622 79.1924Z"
          stroke="black"
          strokeWidth="10"
        />
      </g>
      <PathAnimation
        d="M100 130C100 135.523 95.5228 140 90 140C84.4772 140 80 135.523 80 130C80 124.477 84.4772 120 90 120C95.5228 120 100 124.477 100 130Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_0_1"
          x="33.6465"
          y="20"
          width="112.707"
          height="98.5635"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_0_1"
          x="53.3878"
          y="29"
          width="73.2244"
          height="68.1536"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
