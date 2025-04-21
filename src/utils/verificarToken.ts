import axios from "axios";

export const verificarToken = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
        axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
        try {
            const { status } = await axios.post("http://localhost:3000/api/usuarios", Headers)

            if (status === 200) {
                localStorage.setItem("token", token);
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