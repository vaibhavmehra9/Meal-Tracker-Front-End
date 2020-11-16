import { toast } from "react-toastify";

function showToast(msg = "hola", type = "info") {
  toast(msg, {
    type,
  });
}

export default showToast;
