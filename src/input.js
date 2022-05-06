// let users = [
//     {
//       id: 1,
//       name: 'admin',
//       password: 'admin',
//       isAdmin: true,
//     },
  
//     {
//       id: 2,
//       name: 'user1',
//       password: 'user123',
//       isAdmin: false,
//     },
  
//     {
//       id: 3,
//       name: 'kenny',
//       password: 'kenny123',
//       isAdmin: false,
//     },
//   ]
//   const login = () => {
//    const username= document.getElementById("username").value;
//    const password = document.getElementById("password").value;
//     // if(username === "" ||  password === ""){
//     //        alert("Username and Password is required")
//     // }else{ 
//     //      alert("i am in")
//     //   try {
//         users.find()((user) => {
//           // if (user.name === username && user.password === password) {
//           if (
//             user.isAdmin &&
//             username === user.name &&
//             password === user.password
//           ) {
//             console.log(`${user.name} is an admin`)
//             window.location = './admin.html'
//           } else if (user.name === username && user.password === password) {
//             console.log(`${user.name} is a user, log in successful`)
//             window.location = './home.html'
//           }
//           else {
//             alert("Login error")
//           }
//         })
//     //   }
//     //    catch (error) {
//         console.log(error)
//       }
// //     }
// // }
    
    
     function hello (){
//         // e.prevenDefault()
   const username= document.getElementById("username").value;
   const password = document.getElementById("password").value;

        if ( username === "admin" && password === "admin" ){ 
        //  alert ( "Welcome admin")
      
             
        window.location.href = "https://www.w3docs.com/";
       
    }  
    

        else if (username === "user" && password === "user"){
            // alert("welcome 😊")
           
            window.location = './home.html' 
            
            

        }
        

        else { 
            alert("OOps 😒 !! invalid details")
        }

    }
function letshow(){
    const showpasswordIcon = document.getElementById('show');
    const password = document.getElementById('password');
    showpasswordIcon.addEventListener('click' , ()=> {
        if (password.type === "password"){
             password.type = "text";
            // alert("ksksk")
        }
        else {
            password.type = "password"
        }
       
    })
}