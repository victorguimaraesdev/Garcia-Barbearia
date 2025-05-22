import axios from 'axios';

interface TokenStates {
    setApp: (app: boolean) => void;
}

class API {
    private address = "http://localhost:3000/api";
    private route = axios.create({ baseURL: `${this.address}` });

    private AuthLocal = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            this.route.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return true;
        }
    }

    public AuthServer = async ({ setApp }: TokenStates) => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
            try {
                const { status } = await axios.post(`${this.address}/api/usuarios`, Headers)

                if (status === 200) {
                    localStorage.setItem("token", token);
                    setApp(true);
                    return;
                }

                if (status === 202) {
                    localStorage.setItem("token", token);
                    setApp(false);
                    return;
                }

                if (status === 401) {
                    localStorage.removeItem("token");
                    return;
                }

            } catch (error) {
                console.error("Erro ao verificar o token:", error);
                localStorage.removeItem("token");
            }
        }
    }

    public GET = async (path: string) => {
        const isAuth = this.AuthLocal();
        if (!isAuth) return { data: null, status: 401 };
        const res = await this.route.get(path);
        return { data: res.data, status: res.status };
    }

    public POST = async (path: string, data: object) => {
        const res = await this.route.post(path, data);
        return { data: res.data, status: res.status };
    }

    public PUT = async (path: string, data: object) => {
        const res = await this.route.put(path, data);
        return { data: res.data, status: res.status };
    }

    public DELETE = async (path: string) => {
        const res = await this.route.delete(path);
        return { data: res.data, status: res.status };
    }
}

export default new API();