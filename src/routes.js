import Main from "./Component/Body/Main/Main";
import Foods from "./Component/Body/Posts/Foods/Foods"
import Food from "./Component/Body/Posts/Food/Food"
let routes = [
  { path: "/", element: <Main /> },
  { path: '/Foods' , element: <Foods />},
  { path: '/Foods/:title' , element: <Food />}
];
export default routes;
