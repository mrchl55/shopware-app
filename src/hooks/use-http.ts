import {useCallback, useState} from "react";

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const sendRequest = useCallback(async (url: string, method = 'GET', body: any = null, headers: any = {}) => {
        setIsLoading(true)
        setError(false)
        try {
            const response = await fetch(url, {
                method,
                body,
                headers
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setError(false)
            setIsLoading(false)
            return responseData
        } catch (err: any) {
            setError(err.message || true)
            setIsLoading(false)
            throw err;
        }

    }, [])
    return {isLoading, error, sendRequest}
}