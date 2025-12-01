import styles from "./index.module.css";

interface Props {
  angle: string;
  color: string;
  onClick: VoidFunction;
}

export default function DialButton({ angle, color, onClick }: Props) {
  return (
    <svg
      className={styles["dial_button"]}
      style={{ borderColor: color, transform: `rotate(${angle}deg)` }}
      onClick={onClick}
      width="55"
      height="55"
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0687 23.4258L10.0572 15.4903L9.75961 15.6511L9.59961 16.7029L9.59961 32.2145L9.91961 32.5525L9.59961 32.7215L9.59961 33.2286L9.75961 33.2286L9.91961 33.5666L9.91961 33.7356L9.59961 34.2427L9.59961 34.7497L9.91961 35.0877L10.0796 35.5948L9.59961 36.2708L9.59961 44.1405L9.91961 44.2145L10.6251 43.86L16.3196 40.387L16.4796 39.3131L17.2796 37.792L19.0396 37.1159L20.3196 37.1159L21.2796 36.4399L22.0796 36.4399L22.5596 36.5813L31.6704 31.0249L31.1996 30.6934L30.5596 30.3553L30.2396 29.3413L30.7196 30.0173L32.6396 30.1863L33.0647 30.1746L33.5996 29.8483L24.1596 24.0911L22.3996 24.1018L21.5996 24.7779L22.3996 23.7638L23.0687 23.4258ZM22.4548 36.6452L16.4177 40.3272L16.7996 39.1441L17.5996 38.13L19.3596 37.792L20.6396 37.623L21.4396 36.7779L22.0525 36.6452L22.4548 36.6452Z"
        fill={color}
      ></path>
    </svg>
  );
}
