import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setloading] = useState();

    useEffect(() => {
        fetch('../../public/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenus(data)
                setloading(false)
            })
    })
    return [menus, loading];
};

export default useMenu;