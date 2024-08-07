"use client";
import NextLink from "next/link";

import styles from "./Link.module.css";
import { HTMLAttributes } from "react";
import clsx from "clsx";

type Props = {
  href: string;
  title: string;
  className?: HTMLAttributes<HTMLLinkElement>["className"];
};

export function Link({ href, title, className }: Props) {
  return (
    <NextLink href={href} className={clsx(className, styles.link)}>
      <div className={styles.wrapper}>
        <div className={styles.main}>{title}</div>
        <div className={styles.secondary}>{title}</div>
      </div>
    </NextLink>
  );
}
