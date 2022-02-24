import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Switch } from "antd";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { menuData } from "../../data/menu";
import { setTimeout } from "timers";

type Props = {};

const MainHeader = (props: any) => {
  // console.log(props)
  // const [isLight, setIsLight] = useState<boolean>(props.theme.lightMode)

  const router = useRouter();
  const dispatch = useDispatch();

  // const changeTheme = () => {
  //     if(props.theme.lightMode){
  //       dispatch(setDarkModeTheme())
  //     } else{
  //       dispatch(setLightModeTheme())
  //     }
  //   }

  // useEffect(()=> {
  //   setTimeout(()=> {
  //     if(props.theme.lightMode){
  //       setIsLight(true)
  //     } else{
  //       setIsLight(false)
  //     }

  //   }, 200)

  // }, [])

  return (
    <header className="bg-light dark:bg-dark-background py-2 px-5 hidden md:flex justify-between items-center sticky top-0">
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

      <div className="flex gap-6 items-center">
        <div className="inline-flex gap-5">
          {menuData.map((menu) => (
            <Link href={menu.link} key={menu.title}>
              <a
                className={`text-lg  ${
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
      </div>
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MainHeader);
