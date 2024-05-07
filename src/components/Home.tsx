import myImage from './dns-servers.png'
import { Credentails } from "./Credentials";

export function Home() {
    return (
        <div className=" font-sans">
            <div className='lg:h-1/5 flex w-full'>
                <div className="w-4/5  green-accent-200 p-8 space-y-8 flex-cols justify-center items-center  ">
                    <div className="font-bold  text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"><i>Welcome to DNS Hub.</i></div>
                    <div className="lg:flex">
                        <div className="space-y-4 lg:space-y-2 ">
                            <div className=" text-4xl lg:text-5xl">
                                Streamline Your DNS Management with <i className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> <b>DNS Hub.</b></i>
                            </div>
                            <div className="text-xl lg:text-2xl">
                                DNS Hub provides a comprehensive
                                interface for effortless management of DNS
                                records on AWS Route 53.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                    <img src={myImage} alt="Description of Image" className=" w-64 " />
                </div>
            </div>


            <div className="lg:h-3/5  bg-white-200">
                <div>
                    <div className="flex flex-col lg:h-screen justify-center items-center">
                        <Credentails />
                    </div>
                </div>
            </div>
        </div>
    );
}