import { useMeQuery } from "generated/graphql-types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSessionAuth = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !data.me) {
            router.replace("/");
        }
    }, [loading, data, router]);
};
