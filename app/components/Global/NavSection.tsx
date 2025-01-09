import Link from "next/link";

interface NavItems {
  name: string;
  href: string;
  isActive?: boolean;
}

interface Props {
  navItems: NavItems;
  key: number;
}

const navSection = ({ navItems, key }: Props) => {
  return (
    <Link key={key} href={navItems.href}>
      {navItems.name}
    </Link>
  );
};

export default navSection;
