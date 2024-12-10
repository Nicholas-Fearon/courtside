'use client'

// will catch whatever error was thrown and display the message back to the user here.
export default function Error({error}) {
    return (
        <p>{error.message}</p>
    )
}