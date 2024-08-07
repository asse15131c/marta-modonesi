import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Body`.
 */
export type BodyProps = SliceComponentProps<Content.BodySlice>;

/**
 * Component for "Body" Slices.
 */
const Body = ({ slice }: BodyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for body (variation: {slice.variation}) Slices
    </section>
  );
};

export default Body;
