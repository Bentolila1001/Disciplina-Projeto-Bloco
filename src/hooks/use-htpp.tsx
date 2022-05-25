import { useState, useCallback } from "react"

type props = {
    requestConfig: {
        url: string,
        method: string,
        headers: {},
        body: string
    }
    applyData: (data: any) => {}
}

const useRequest = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async ({ applyData, requestConfig }: props) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? requestConfig.body : null,
            })

            if (!response.ok) {
                throw new Error('Request failed')
            }

            const data = await response.json()
            applyData(data)

        } catch (err: any) {
            setError(err.message || 'Ops, Something went wrong')
        }
        setLoading(false)
    }, [])

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useRequest

