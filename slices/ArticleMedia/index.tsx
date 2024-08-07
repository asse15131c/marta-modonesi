import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArticleMedia`.
 */
export type ArticleMediaProps = SliceComponentProps<Content.ArticleMediaSlice>;

/**
 * Component for "ArticleMedia" Slices.
 */
const ArticleMedia = ({ slice }: ArticleMediaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for article_media (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ArticleMedia;
