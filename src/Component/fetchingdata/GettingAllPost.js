// import { ref, getDownloadURL, listAll } from "firebase/storage";
// import { useDispatch } from "react-redux";

// import { storage } from "../../firebase";
// import { socialReducer } from "./SocialSlice";





// export const GettingPost = () => {
//     const imageListRef = ref(storage, "images/")

//     const dispatch = useDispatch()
//     listAll(imageListRef).then((response) => {
//         response.items.forEach((url) => {
//             getDownloadURL(url).then((url => dispatch(socialReducer.allUserPost(url))))
//         });
//       })
// }


// export const GettingVideo = () => {
//     const dispatch = useDispatch()
//     const videoListRef = ref(storage, "video/");
    
//     listAll(videoListRef).then((response) => {
//         response.items.forEach((url) => {
//             getDownloadURL(url).then((url => dispatch(socialReducer.allUserPost(url))))
//         });
//       })
//     }
           
