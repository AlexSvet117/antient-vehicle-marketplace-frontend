import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='text-center'>
        <FaRegCopyright/> {new Date().getFullYear()} Antient Vehicle Marketplace
      
    </div>
  )
}

export default Footer
