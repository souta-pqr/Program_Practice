import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface PostProps {
    id: string;
}

const Post = ({ id }: PostProps) => {
    return (
        <div>
            <h1>Post: {id}</h1>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: "1",
            },
        },
        {
            params: {
                id: "2",
            },
        },
        {
            params: {
                id: "3",
            },
        },
    ];
    return { paths, fallback: false };
};

interface PostParams extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!.id,
        },
    };
};

export default Post;