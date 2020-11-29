import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();
    const { pid } = router.query;

    return <p>Post ID {pid}</p>;
}
