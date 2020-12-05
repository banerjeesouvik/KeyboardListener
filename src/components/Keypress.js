import { useEffect, useContext } from "react";
import keypress from "keypress.js";
import uniqid from "uniqid";
import KeypressContext from "../provider/KeypressProvider"

const listener = new keypress.Listener();

const Keypress = ({ description, callback, combo }) => {
  const { add, remove } = useContext(KeypressContext);

  useEffect(() => {
    const registeredCombo = listener.simple_combo(combo, callback);
    const listenerId = uniqid();
    add({ description, callback, combo, id:listenerId });

    return () => {
      listener.unregister_many([registeredCombo]);
      remove(listenerId);
    }
  }, []);

  return null
}

export default Keypress;
