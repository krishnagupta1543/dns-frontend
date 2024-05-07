import { Credentails } from "./Credentials";

export function Home() {
        return (
        <div className="font-sans">
            <div className="lg:h-2/5  bg-gray-300 p-8 space-y-8 flex-cols justify-center items-center  ">
                <div className="font-bold  text-3xl lg:text-4xl text-blue-500">Welcome to DNS Hub.</div>

                <div className="space-y-2">
                    <div className=" text-4xl lg:text-5xl">
                    Streamline Your DNS Management with <i className="text-blue-500"> <b>DNS Hub</b></i>
                    </div>
                    <div className="text-xl lg:text-2xl">
                        DNS Hub provides a comprehensive
                        interface for effortless management of DNS
                        records on AWS Route 53.
                    </div>
                </div>
            </div>
            <div className="lg:h-3/5">
                <div>
                    <div className="flex flex-col lg:h-screen justify-center items-center">
                        <Credentails />
                    </div>
                </div>
            </div>
        </div>
    );
}
