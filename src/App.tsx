import { useState, useEffect } from "react";
import { verificarToken } from "./utils/verificarToken";
import { AppAdmin } from "./admin/AppAdmin";
import { AppUser } from "./user/AppUser";

function App() {
    const [app, setApp] = useState<boolean>(true);

    useEffect(() => {
        verificarToken({ setApp });
    }, []);

    return (
        <>
            {app && <AppUser />}
            {!app && <AppAdmin setApp={setApp} />}
        </>
    );
}

export default App;