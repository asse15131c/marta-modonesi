"use client";
import { GroupField } from "@prismicio/client";
import styles from "./Header.module.css";
import { Link } from "../Link/Link";
import clsx from "clsx";
import { MenuMobile } from "../MenuMobile/MenuMobile";

type Props = {
  menu: GroupField<any>;
  linkedin: string;
  instagram: string;
  mail: string;
  phone: string;
};

export function Header({ menu, instagram, linkedin, mail, phone }: Props) {
  return (
    <header className={styles.header}>
      <h1>Dott.ssa Marta Modonesi</h1>
      <div className={styles.row}>
        <nav>
          <ul className={clsx(styles.list, "hidden lg:flex")}>
            {menu &&
              menu.map((e, i) => (
                <li key={i}>
                  <Link title={e.title} href={e.link.slug} className="py-xs" />
                </li>
              ))}
          </ul>
          <MenuMobile
            menu={menu}
            instagram={instagram as string}
            linkedin={linkedin as string}
            mail={mail as string}
            phone={phone as string}
          />
        </nav>
        <div className={styles.role}>Pedagogista</div>
      </div>
    </header>
  );
}
