import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import CryptoJS from "crypto-js";
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export function encrypt(text: string, key: string) {
  return CryptoJS.AES.encrypt(text, key).toString();
}
