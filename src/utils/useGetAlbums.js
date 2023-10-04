import { useEffect, useState } from "react";

export const useGetAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/natcardozo/afab243c1b858a8d70dcee5a0904e5fd/raw")
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error(error))
    }, [])

    return albums;
}
