import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware'

const authStore = (set: any) => ({
    auth: {
        isLoggedIn: false,
    },


    login: () => {
        set((state: any) => ({
            auth: {
                ...state.auth,
                isLoggedIn: true,
            }
        }));
        // set({ isLoggedIn: true, });
        // localStorage.setItem('isLoggedIn', 'true');
    },

    logout: () => {
        set({
            auth: {
                isLoggedIn: false,
            }
        });
        // set({ isLoggedIn: false });
        // localStorage.setItem('isLoggedIn', 'false');
    },
})


// const useAuthStore = create(
//     devtools(
//         persist(authStore, {
//             name: "auth",
//         })
//     )
// )

const useAuthStore = create(
    devtools(authStore, { name: "auth", })
)



export default useAuthStore;
