import { navbarItems } from "@/data/navbar-items";
import NavbarItem from "./navbar-item";
import Link from "next/link";
import { MenuOutlined, GlobalOutlined, MoonFilled, SunFilled } from "@ant-design/icons";
import { useState } from "react";
import { Switch, Select } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/utils/theme-context";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { toggleTheme } = useTheme();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <header className="w-screen h-15 bg-white overflow-hidden dark:bg-primaryBlack md:max-h-auto">
      <nav className="container mx-auto flex justify-around items-center py-4">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          <Link href="/">M</Link>
        </div>

        <div className="flex flex-col space-x-4 md:flex-row text-center">
          <MenuOutlined
            onClick={toggleMenu}
            className="bg-gray-200 dark:bg-gray-950 text-gray-900 dark:text-gray-50 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer md:hidden"
          />
        </div>

        <ul className="hidden md:flex gap-8 flex-row text-center items-center">
          {navbarItems.map((item, index) => (
            <NavbarItem
              key={index}
              titleKey={t(`navbar.${item.titleKey}` as any)}
              path={item.path}
              toggleMenu={toggleMenu}
            />
          ))}
          <li>
            <Select
              title={i18n.language === 'pt' ? t('pt') : t('en')}
              defaultValue={i18n.language || 'pt'}
              style={{ width: 80 }}
              onChange={handleLanguageChange}
              suffixIcon={<GlobalOutlined />}
              options={[
                { value: 'pt', label: 'PT' },
                { value: 'en', label: 'EN' },
              ]}
            />
          </li>

          <li>
            <Switch
              title={t('toogleTheme')}
              onClick={toggleTheme}
              checkedChildren={<MoonFilled className="text-gray-50 text-sm" />}
              unCheckedChildren={<SunFilled className="text-gray-50 text-sm" />}
              className="text-center"
              defaultChecked={true}
            />
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden overflow-hidden origin-top"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: {
                height: 0,
                opacity: 0,
                transition: { duration: 0.22, ease: [0.4, 0.0, 0.2, 1] },
              },
              open: {
                height: "auto",
                opacity: 1,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <ul className="flex flex-col text-center mt-5">
              {navbarItems.map((item, index) => (
                <NavbarItem
                  key={index}
                  titleKey={t(`navbar.${item.titleKey}` as any)}
                  path={item.path}
                  toggleMenu={toggleMenu}
                />
              ))}
              <li className="p-5 flex justify-center gap-3">
                <Select
                  title={i18n.language === 'pt' ? t('pt') : t('en')}
                  defaultValue={i18n.language || 'pt'}
                  style={{ width: 80 }}
                  onChange={handleLanguageChange}
                  suffixIcon={<GlobalOutlined />}
                  options={[
                    { value: 'pt', label: 'PT' },
                    { value: 'en', label: 'EN' },
                  ]}
                />
                <Switch
                  title={t('toogleTheme')}
                  onClick={toggleTheme}
                  unCheckedChildren={<SunFilled className="text-gray-50 text-sm" />}
                  checkedChildren={<MoonFilled className="text-gray-50 text-sm" />}
                  className="text-center"
                  defaultChecked={true}
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
