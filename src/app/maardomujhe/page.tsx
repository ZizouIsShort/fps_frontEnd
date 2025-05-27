"use client"

export default function IKILLMYSELF() {
    const wtfa = async () => {
        try {
            const data = await fetch('http://localhost:3002/nice');
            const response = await data.json();
            console.log(response);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <>
            <h1>
            Scam Artist Ziyan Back At it again
            </h1>
            <div>
                <p>Yeah this is a fake commit to continue the streak</p>
                <button onClick={wtfa} className={'bg-green'}>MKC</button>
            </div>
        </>

    )
}