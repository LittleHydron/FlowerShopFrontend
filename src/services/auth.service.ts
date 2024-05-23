import { api } from "@/api/api";

class AuthService {
    async login({ email, password }: { email: string; password: string }) {
        const accessToken = await api
            .post("/auth/login", {
                username: email,
                password,
            })
            .then((data) => data.data.accessToken);

        return accessToken;
    }
    async register({
        name,
        surname,
        email,
        password,
    }: {
        name: string;
        surname: string;
        email: string;
        password: string;
    }) {
        await api.post("/auth/register", {
            name,
            surname,
            username: email,
            password,
        });
    }
}

export const authService = new AuthService();
