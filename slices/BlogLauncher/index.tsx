import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogLauncher`.
 */
export type BlogLauncherProps = SliceComponentProps<Content.BlogLauncherSlice>;

/**
 * Component for "BlogLauncher" Slices.
 */
const BlogLauncher = ({ slice }: BlogLauncherProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_launcher (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogLauncher;
