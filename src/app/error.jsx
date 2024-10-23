'use client'
export default function ErrorPage({error, reset}) {

    return (
        <>
            <div>
                <div>{error.message}</div>
            </div>
        </>
    )
}
