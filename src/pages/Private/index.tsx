import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Private = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className="container-private">Rota privada</div>
      <p>Óla {auth.user?.name}, você está logado!</p>
    </>
  );
}
  
export default Private;
  