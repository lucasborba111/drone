import { Context } from "../../Context";
import { useContext } from "react";
import "./LoadingModal.css";

export default function LoadingModal() {
  const { loading } = useContext(Context);

  return (
    <>
      {loading && (
        <div className="modal">
          <div className="modal-content">
            <img
              id="drone-img"
              alt="dronegif"
              src="/drone-sky.gif"
              height={100}
            />
            <p style={{ color: "#ffffff" }}>Calculando rota...</p>
          </div>
        </div>
      )}
    </>
  );
}
