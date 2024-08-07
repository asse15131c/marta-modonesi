"use client";
import { lock, unlock } from "tua-body-scroll-lock";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GroupField } from "@prismicio/client";
import clsx from "clsx";
import { CustomEase } from "gsap/CustomEase";

import styles from "./MenuMobile.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, CustomEase);

CustomEase.create("custom.standard", "0.76, 0, 0.24, 1");
CustomEase.create("custom.expo", "0.87, 0, 0.13, 1");
CustomEase.create("custom.scroll", "0.25, 1, 0.5, 1");

type Props = {
  menu: GroupField<any>;
  linkedin: string;
  instagram: string;
  mail: string;
  phone: string;
};

export function MenuMobile({ menu, instagram, linkedin, mail, phone }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null!);
  const pathName = usePathname();

  const tl = useRef(gsap.timeline()).current;
  useGSAP(
    () => {
      if (open) {
        lock();
        tl.clear();
        tl.set(".gsap\\:modal", { autoAlpha: 1 });
        tl.fromTo(
          ".gsap\\:inner",
          {
            yPercent: -100,
          },
          {
            yPercent: 0,
            ease: "custom.expo",
            duration: 1.2,
          },
          "enter"
        );
        tl.to(
          [".gsap\\:open", ".gsap\\:close"],
          {
            yPercent: -100,
            ease: "custom.expo",
            duration: 1,
          },
          "enter"
        );

        tl.fromTo(
          [".gsap\\:navlink", ".gsap\\:mail", ".gsap\\:tel"],
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            ease: "custom.expo",
            duration: 1.6,
            stagger: 0.1,
          },
          "enter+=0.08"
        );

        tl.fromTo(
          ".gsap\\:social",
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            ease: "custom.expo",
            duration: 1.6,
          },
          "enter+=0.1"
        );
      } else {
        tl.clear();
        tl.to(
          [".gsap\\:navlink", ".gsap\\:mail", ".gsap\\:tel", ".gsap\\:social"],

          {
            yPercent: 100,
            ease: "custom.standard",
            duration: 1,
          },
          "enter"
        );
        tl.to(
          [".gsap\\:open", ".gsap\\:close"],
          {
            yPercent: 0,
            ease: "custom.expo",
            duration: 1.2,
          },
          "enter"
        );

        tl.to(
          ".gsap\\:inner",
          {
            yPercent: -100,
            ease: "custom.standard",
            duration: 0.8,
            onComplete: () => unlock(),
          },
          "enter+=0.6"
        );
      }
    },
    { scope: containerRef, dependencies: [open] }
  );

  return (
    <div className={styles.container} ref={containerRef}>
      <button className={styles.button} onClick={() => setOpen((e) => !e)}>
        <div className={clsx("gsap:open")}>Menu</div>
        <div className={clsx("gsap:close", styles.close)}>Chiudi</div>
      </button>
      <aside className={clsx(styles.modal, "gsap:modal")} data-initial-hidden>
        <div className={clsx(styles.inner, "gsap:inner")}>
          <nav className={clsx(styles.nav)}>
            <ul className={clsx(styles.main)}>
              {menu &&
                menu.map((e, i) => (
                  <li key={i}>
                    <Link
                      href={e.link.slug}
                      className={clsx(styles.link)}
                      data-active={pathName == e.link.slug}
                    >
                      <div className={clsx("gsap:navlink")}>{e.title}</div>
                    </Link>
                  </li>
                ))}
            </ul>
            <ul className={clsx(styles.secondary)}>
              <li>
                <Link
                  href={"mailto:" + instagram}
                  className={styles.link}
                  target="_blank"
                >
                  <div className={clsx("gsap:mail")}>Mail</div>
                </Link>
              </li>
              <li>
                <Link
                  href={"tel:" + phone}
                  className={styles.link}
                  target="_blank"
                >
                  <div className={clsx("gsap:tel")}>Telefono</div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.footer}>
            <Link href={instagram} className={styles.link} target="_blank">
              <div className={clsx("gsap:social")}>Instagram</div>
            </Link>
            <Link href={linkedin} className={styles.link} target="_blank">
              <div className={clsx("gsap:social")}>Linkedin</div>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
