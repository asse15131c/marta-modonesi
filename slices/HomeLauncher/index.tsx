import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeLauncher`.
 */
export type HomeLauncherProps = SliceComponentProps<Content.HomeLauncherSlice>;

/**
 * Component for "HomeLauncher" Slices.
 */
const HomeLauncher = ({ slice }: HomeLauncherProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_launcher (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HomeLauncher;
