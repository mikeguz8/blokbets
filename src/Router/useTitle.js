import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - BlokBets`;
    }, [title])
};

export default useTitle;