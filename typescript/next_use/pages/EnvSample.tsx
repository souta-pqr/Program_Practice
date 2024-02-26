import { NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = () => {
    console.log("process.env.TEST", process.env.TEST);
    console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);

    return (
        <div>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <main>
                <p>{process.env.TEST}</p>
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    )
}

import { GetStaticProps } from "next";

export const getStaticPages: GetStaticProps = async (context) => {
    console.log("process.env.TEST", process.env.TEST)
    console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST)

    return {
        props: {},
    }
}

export default EnvSample;