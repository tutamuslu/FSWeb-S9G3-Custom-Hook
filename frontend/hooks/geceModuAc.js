
import { useLocalStorage } from "./useLocalStorage";

export const geceModuAc = (initial) =>{
    const [geceModu, setGeceModu] = useLocalStorage("geceModu", initial);

    return [geceModu, setGeceModu];
}