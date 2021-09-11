import React, { useEffect, useState } from "react";
import EcommerceContext from "../Context/EcommerceContext";
import firebase from "../Config/firebase";

export const Profile = () => {
  const [userName, setUserName] = useState("");
  const [docId, setDocId] = useState("");

  //Cuando el componente se monta, me fijo si el usuario está logeado.
  //Si está logeado, obtengo el uid y lo utlizo para buscar el username en firestore, sino retorno y mando alerta de error.
  //Obtengo el username y lo pongo en el state (luego con JSX se obtendrá ese estado y se mostrará en pantalla.)
  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        getUserName(uid);
      } else {
        alert("You are not logged in");
        return;
      }
    });
    const getUserName = async (uid) => {
      const userData = await firebase.firestore
        .collection("usuarios")
        .where("id", "==", uid)
        .get();
      setDocId(userData.docs[0].id);
      setUserName({ name: userData.docs[0].data().name, id: uid });
    };
  }, []);

  //cuando se clickea save, se actualiza el nombre del usuario.
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    firebase.firestore
      .doc("usuarios/" + docId)
      .set({ ...userName, name: name });
  };

  return (
    <EcommerceContext.Consumer>
      {(context) => (
        <div style={{ minHeight: "85vh" }} className="flex">
          {context.userLogin && (
            <form className="p-6" onSubmit={handleSubmit}>
              <h2 className="text-4xl mb-14">Your profile</h2>
              <label className="text-2xl block mb-4">Name</label>
              <input
                id="nameInput"
                className="text-2xl mb-6"
                type="text"
                defaultValue={userName.name}
              />
              <button className="bg-blue-500 hover:bg-blue-300 active:bg-blue-400 py-2 px-4 text-white border rounded-full ">
                Save
              </button>
            </form>
          )}

          {!context.userLogin && (
            <div>You must be logged in to view your profile</div>
          )}
        </div>
      )}
    </EcommerceContext.Consumer>
  );
};
