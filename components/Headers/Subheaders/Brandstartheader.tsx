import Image from 'next/image'
import Link from 'next/link'
import {MdWbSunny} from 'react-icons/md';
import {FaMoon} from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import {setDarkModeTheme, setLightModeTheme} from '../../../store/theme/action';

type Props = {}

const Brandstartheader = (props: any) => {
  const dispatch= useDispatch()

    const changeTheme = () => {
        if(props.theme.lightMode){
          dispatch(setDarkModeTheme())
        } else{
          dispatch(setLightModeTheme())
        }
      }
  return (
    <header className="bg-light dark:bg-dark-background py-2 px-5 flex justify-between items-center">
            <Link href="/" >
                <a>
                    <Image
                    src="/img/logo/Braandly.svg"
                    alt="Braandly"
                    width={70}
                    height={28}
                    className="cursor-pointer mt-2"
                    />
                </a>
            </Link> 
            <div className="theme-switch text-xl cursor-pointer dark:text-light hover:text-warning" onClick={changeTheme}>
                {props.theme.lightMode ? <MdWbSunny className="" /> : <FaMoon className="" />}
            </div>
              
        </header>
  )
}

const mapStateToProps = (state:any) => {
  return state;
};

export default connect(mapStateToProps)(Brandstartheader);