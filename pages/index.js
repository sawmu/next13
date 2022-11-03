import Head from "next/head";
import Image from "next/image";
import Test from "../pages/test";


export default function Home() {
    return (
        <div>
            <a className="text-color-red underline text-[#50d71e]">Test</a>
            < Test />
        </div>
    );
}
