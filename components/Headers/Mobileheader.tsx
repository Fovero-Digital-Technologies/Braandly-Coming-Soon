import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Switch } from "antd";
import { MdWbSunny, MdFormatAlignRight, MdClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { menuData } from "../../data/menu";

type Props = {};

const MobileHeader = (props: any) => {
  // console.log(props);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (props.theme.lightMode) {
      dispatch(setDarkModeTheme());
    } else {
      dispatch(setLightModeTheme());
    }
  };
  return (
    <header className="bg-light dark:bg-dark-background py-2 px-5 flex md:hidden justify-between items-center sticky top-0">
      <Link href="/">
        <a>
          <Image
            src="/img/logo/Braandly.svg"
            alt="Braandly"
            width={70}
            height={28}
            className="cursor-pointer mt-4"
          />
        </a>
      </Link>

      <div className="flex gap-3 items-center">
        <Switch
          checkedChildren={<MdWbSunny className="text-white dark:text-dark" />}
          unCheckedChildren={<FaMoon className="text-white dark:text-dark" />}
          defaultChecked={props.theme.lightMode}
          onChange={(checked) => {
            // console.log(checked)
            if (props.theme.lightMode) {
              dispatch(setDarkModeTheme());
            } else {
              dispatch(setLightModeTheme());
            }
          }}
          checked={props.theme.lightMode}
          className="bg-primary dark:bg-warning text-lg"
        />

        <button
          className="text-2xl text-dark dark:text-white hover:text-primary dark:hover:text-warning transition ease-in-out duration-300"
          onClick={() => setShowMobileNav(true)}
        >
          <MdFormatAlignRight />
        </button>
      </div>

      {showMobileNav && (
        <>
          <div
            className="fixed bg-dark w-full h-full top-0 left-0 opacity-50"
            onClick={() => setShowMobileNav(false)}
          ></div>

          <div className="fixed z-[1000] h-full bg-white top-0 left-0 dark:bg-dark shadow w-[calc(100%-40px)] sm:w-[calc(100%-100px)] text-white flex flex-col gap-4 py-10 px-5">
            <button className="absolute right-3 text-2xl top-2" onClick={()=> setShowMobileNav(false)}>
              <MdClose />
            </button>
            {menuData.map((menu) => (
              <Link href={menu.link} key={menu.title}>
                <a
                  className={`text-xl sm:text-2xl  ${
                    router.pathname === menu.link
                      ? "text-primary dark:text-warning"
                      : "hover:text-primary dark:text-white dark:hover:text-warning"
                  }`}
                >
                  {menu.title}
                </a>
              </Link>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MobileHeader);
