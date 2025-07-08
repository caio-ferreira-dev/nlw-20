import { Navigate, useParams } from "react-router-dom";

type RoomsParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomsParams>();

  if (!params.id) {
    return <Navigate replace to="/" />;
  }

  return <div>Detalhes da Sala</div>;
}
