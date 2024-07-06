import { setAuthToken } from "@/utils/axios/axios";
import { getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next/types";

// get session token 
export async function getApiToken(context: GetServerSidePropsContext) {
    const session: any = await getServerSession(context.req, context.res, {});
    const token: string = session?.myToken;
    setAuthToken(token);

    return session;
}
