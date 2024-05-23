import { api } from "@/api/api";

class BouqueteService {
    async getAll(accessToken: string) {
        const data = await api
            .get("/bouquete/all", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((data) => data.data);

        return data;
    }
    async add(accessToken: string, name: string) {
        const bouquete = await api
            .post(
                "/bouquete/create",
                {
                    name,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((data) => data.data);

        return bouquete;
    }
}

export const bouqueteService = new BouqueteService();
