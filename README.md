# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#IMAGE-API

In this mini project, you are required to create an image gallery using React5 The gallery should fetch a set of
images from given api, limit the results to 20 images, and display them in a user-friendly UI5 Upon clicking on
any photo, the user should be redirected to a single image view, where additional information, such as the title
and description of the image,

#Requirements

! Create a new React application using create-react-app or any preferred React boilerplate4
! Implement a gallery component that displays the first 20 images fetched from the server5 Each image
  should be displayed with a thumbnail and relevant details4
! Add functionality to handle user interaction5 Clicking on any thumbnail in the gallery should redirect the user
  to a new page showing the single image in a larger view4
! On the single image page, display the enlarged image along with its title and description4
! Use React Router Dom to handle navigation between the gallery and single image view4
! Ensure error handling for cases where the server request fails or returns no images.