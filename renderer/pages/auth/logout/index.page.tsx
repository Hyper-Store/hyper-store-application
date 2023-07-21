import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Logout() {
    const { push } = useRouter();

    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        push('/auth/login')
        return () => { }
    }, [])


    return (<></>)
}