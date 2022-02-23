import { Alert } from 'antd';
import TextLoop from 'react-text-loop';

type Props = {}

const Notificationheader = (props: Props) => {
  return (
    <>
    <Alert
      banner
      type={"info"}
      message={
        <TextLoop mask>
          <div className='text-white dark:text-dark'>Welcome to Braandly Version 1.0 - The Complete Designer and Developer Branding Tools</div>
          <div className='text-white dark:text-dark'><a href="#">Support Braandly</a> today to help us deliver more to you </div>
        </TextLoop>
      }
      className={`bg-primary text-white dark:bg-warning dark:text-dark hidden md:flex items-between justify-between notify-header text-center font-medium text-base truncate`}
      style={{border: "none", color:"#fff"}}
      closable
    />
    </>
  )
}

export default Notificationheader