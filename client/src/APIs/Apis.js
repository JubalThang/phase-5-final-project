// export const currentUserfetch = () => {
//     let user = null
//     fetch('/api/me')
//         .then(res => {
//             if (res.ok) {
//                 res.json().then(data => {
//                     user = data
//                 })
//             }
//         })
//     return user
// }

export function currentUserfetch() {
    let currentUser = null
    fetch('/api/me')
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    currentUser = data
                    console.log(currentUser)
                })
            } else {
                return "no"
            }
        })

    return currentUser
}