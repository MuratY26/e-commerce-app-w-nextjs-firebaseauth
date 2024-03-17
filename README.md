An E-Commerce themed website built by Nextjs(App Router) and uses Firebase authentication. 

After signing in by Firebase client sdk, api routes and admin sdk is used to create session cookies so authorization can be handled on the server. Nextjs middleware is utilized to implement protected routes(checkout page).

To adhere to the philosophy of Next.js, minimum amount of client components are used. Cart state is updated by custom events throughout the site.

Used CSS libraries:
-CSS modules
-Tailwind CSS
-Material UI
-React-icons

Things to improve:
-No user info is stored, cart state is stored in local storage, store user's cart info in a db, fetch it on login
-Use product id to query a specific product's info.

ScreenShots:

![ss2](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/905019e7-e307-4569-9402-60b9b59f07dc)

![ss1](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/2059e43a-5b65-4143-9dc6-c8b999f769ef)

![ss5](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/636eea55-57a3-427a-98f4-11d3bf220b7a)

![ss3](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/2a823982-e10a-4208-9290-764b4e0043e1)

![ss4](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/fcdfdbb9-e33f-4e99-a423-80d779612425)

![ss66](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/9a1bf5e4-c206-48aa-8a9b-279d745c037b)

Protected page, user cant reach it if not signed in.

![ss7](https://github.com/MuratY26/e-commerce-app-w-nextjs-firebaseauth/assets/97476056/d80647b3-aa96-4078-afa3-33433810eeee)
