import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { themeChange, themeOSLoad } from "../../functions/theme";
import Backtotop from "../Elements/Backtotop";
import GoogleAnalytics from "../GoogleAnalytics";
import FacebookPixel from "../FacebookPixel";

type Props = {};

const MasterLayout = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    themeChange(props);
  });

  useEffect(() => {
    themeOSLoad(props, dispatch, setDarkModeTheme, setLightModeTheme);
  }, []);
  return (
    <>
      {props.children}
      <Backtotop />
      <GoogleAnalytics />
      <FacebookPixel />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MasterLayout);
