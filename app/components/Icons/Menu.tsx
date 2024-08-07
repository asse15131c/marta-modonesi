import { HTMLAttributes } from "react";

type Props = {
  className?: HTMLAttributes<HTMLOrSVGElement>["className"];
};
export function Menu({ className }: Props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 303 109"
      className={className}
    >
      <path
        d="M18.0224 107.213H0V0H25.8048L33.9969 72.7125L42.0523 0H67.9937V107.213H49.9713V60.0668L50.5174 38.6242L39.7313 107.213H28.1259L17.3398 38.6242L18.0224 60.0668V107.213Z"
        fill="currentColor"
      />
      <path
        d="M133.677 42.8852V62.1286H108.418V87.9697H140.504V107.213H86.2999V0H140.504V19.2434H108.418V42.8852H133.677Z"
        fill="currentColor"
      />
      <path
        d="M176.969 107.213H156.079V0H179.426L208.235 66.5271L207.552 44.947V0H228.579V107.213H205.231L176.286 40.686L176.969 62.2661V107.213Z"
        fill="currentColor"
      />
      <path
        d="M303 0V73.2623C303 96.6293 293.579 109 271.461 109C249.342 109 240.058 96.6293 240.058 73.2623V0H262.176V72.575C262.176 83.9836 265.726 89.7566 271.461 89.7566C277.195 89.7566 280.882 83.9836 280.882 72.575V0H303Z"
        fill="currentColor"
      />
    </svg>
  );
}
