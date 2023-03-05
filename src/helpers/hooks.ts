import { useEffect } from "react"

export const useEvent = (nameEvent: keyof DocumentEventMap, handler:(event:Event | MouseEvent)=>void)=>{

    useEffect(() => {
        document.addEventListener(nameEvent, handler, false);
        return () => {
            document.removeEventListener(nameEvent, handler, false  );
        }
    },[handler])

}