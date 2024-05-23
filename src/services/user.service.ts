import { api } from "@/api/api";

class UserService {
    async getUserData(token: string) {
        const data = api
            .get("/auth/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((data) => data.data);

        return data;
    }

    async setCardType(userId: string, cardType: string, accessToken: string) {
        await api.put(`/user/${userId}`);
    }
}

export const userService = new UserService();
