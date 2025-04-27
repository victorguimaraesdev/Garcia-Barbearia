import { useState, useEffect } from "react";
import { AppAdmin } from "./admin/AppAdmin";
import { AppUser } from "./user/AppUser";
import API from "./utils/API";

function App() {
    const [app, setApp] = useState<boolean>(true);

    useEffect(() => {
        API.AuthServer({ setApp });
    }, []);

    return (
        <>
            {app ? <AppUser /> : <AppAdmin setApp={setApp} />}
        </>
    );
}

export default App;