interface AppAdminProps {
    setApp: (app: boolean) => void;
}

export const AppAdmin = ({setApp}: AppAdminProps) => {
    return (
        <>
            <div>
                <h1>Admin</h1>
                <button onClick={() => setApp(true)}>Voltar</button>
            </div>
            <div>
                <h1>Teste</h1>
            </div>
        </>
    )
}