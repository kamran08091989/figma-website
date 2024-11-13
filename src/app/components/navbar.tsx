import Image from "next/image";
import logo from "@/app/assets/Logo.png"
import Link from "next/link";
const Navbar = () => {
    return(
        <>

        <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between  items-center">
            <div className="w-[191px] h-[34px]">
                <Image src={logo} alt="logo" />

                </div>

                <div className="w-[737.5px] h-[60px] justify-between items-center ">
                <div className="w-[549px] h-[23px]"> </div>
                <ul className="flex flex-row justify-between text-white">
                <Link href="/products">Products</Link> <br />
                <Link href="/solution">Solution</Link> <br />
                <Link href="/resources">Resources</Link> <br />
                <Link href="/pricing">Pricing</Link> <br />
        
                </ul>
                </div>
                <div className="w-[126px] h-[60px]" >
                    <button className="px-[40] py-4 rounded-lg bg-[#FFE492]">Login</button>

                </div>
            </div>

        </>
    )
}
export default Navbar;