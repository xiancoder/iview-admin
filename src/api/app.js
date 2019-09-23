import axios from 'axios'
export const api = {
    powerList ( // 页面权限
    ) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: '/api/system/menulist',
                data: { }
            }).then(res => {
                /* const menuList = res.data.data.list.listMenu
                const powerList = []
                for (let i = 0; i < menuList.length; i++) {
                    powerList.push(menuList[i].auth_name)
                    const menuListC = menuList[i].children
                    if (menuListC.length > 0) {
                        for (let k = 0; k < menuListC.length; k++) {
                            powerList.push(menuListC[k].auth_name)
                        }
                    }
                }
                resolve(powerList) */
                // 改造一下权限列表
                const menuList = res.data.data.list
                resolve(menuList)
            })
        })
    }
}
