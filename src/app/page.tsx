"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const { user, isSignedIn } = useUser();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            const email = user.primaryEmailAddress?.emailAddress || "";
            const username = user?.username || "";

            console.log(email);
            console.log(username);

            fetch("api/syncuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: user.id,
                    email: email,
                    username: username,
                })
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Request failed with status " + res.status);
                }
            })
                .then((data) => {
                    console.log("Success:", data);
                    setLoading(false);
                    router.push("/test");
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert(error);
                });
        }
    }, [user, isSignedIn, router]);

    return (
        <>
            <h1>
                Hello mc
            </h1>
        </>
    );
}