import { MeDocument } from "generated/graphql-types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { serverClient } from "utils/server-client";

export const useSessionAuth = () => {
  const { data, isLoading } = useQuery(
    "me",
    async () => await serverClient.request(MeDocument)
  );
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !data?.me) {
      router.replace("/");
    }
  }, [isLoading, data, router]);
};
