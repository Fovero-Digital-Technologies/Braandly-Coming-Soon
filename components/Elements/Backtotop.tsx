import {MdArrowUpward} from 'react-icons/md';
import { BackTop } from 'antd';

const Backtotop = () => {
    const UpArrow:any = MdArrowUpward
    return(
        <BackTop>
            <div className="flex items-center justify-center bg-primary text-white hover:bg-primary-hov dark:bg-warning dark:text-dark dark:hover:bg-warning-hov p-3 rounded-full shadow text-lg">
                <UpArrow />
                </div>
        </BackTop>
    )
}

export default Backtotop;