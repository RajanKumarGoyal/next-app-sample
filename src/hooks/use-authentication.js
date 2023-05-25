import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useAuthentication(session) {

    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
    }, [router]);
}