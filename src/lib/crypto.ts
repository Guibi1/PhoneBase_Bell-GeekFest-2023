import { generatePrivateKey } from "$lib/generate";

export async function decrypt(
    f: typeof fetch,
    privateKey: string[],
    publicKey: string,
    data: string
) {
    const { result } = await f("/api/crypto/decrypt", {
        method: "POST",
        body: JSON.stringify({
            data: JSON.parse(data),
            secretKey: privateKey,
            publicKey: JSON.parse(publicKey),
        }),
    }).then((res) => res.json());

    return result as string;
}

export async function encrypt(f: typeof fetch, publicKey: string, data: string) {
    const result = await f("/api/crypto/encrypt", {
        method: "POST",
        body: JSON.stringify({ data, publicKey: JSON.parse(publicKey) }),
    }).then((res) => res.text());

    return result;
}

export async function generateKeyPairs(f: typeof fetch) {
    const privateKey = generatePrivateKey();

    const publicKey = await f("/api/crypto/generate", {
        method: "POST",
        body: JSON.stringify({ secretKey: privateKey }),
    }).then((res) => res.text());

    return { publicKey, privateKey };
}

export async function verifyPrivateKey(f: typeof fetch, privateKey: string[], publicKey: string) {
    if (privateKey.length !== 4) return false;

    const { success } = await f("/api/crypto/verify", {
        method: "POST",
        body: JSON.stringify({ secretKey: privateKey, publicKey: JSON.parse(publicKey) }),
    }).then((res) => res.json());

    return success as boolean;
}
