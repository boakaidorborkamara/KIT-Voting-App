// let my_storage = window.localStorage;

           
            
//             let contes_name = document.getElementById("name");
//             let img_link = document.getElementById('image');
//             let id = 0;
//             let create_contes_btn = document.getElementById("create-contes");
            
//             let new_user = {};
//             let all_users = {};
            
//             function createContestant(){
//                 // my_storage.setItem()

//                 new_user = {
//                     name:contes_name.value,
//                     image: img_link.value,
//                     id: id += 1
//                 }

//                 // console.log(new_user);
//                 window.localStorage.getItem("alldata");
                
//                 all_users = all_users[new_user.name] = new_user;

//                 localStorage.setItem('alldata', JSON.stringify(all_users));
                
                
//                 // showUsers();
//                 console.log(localStorage);
//             }
            

            
//             // function showUsers(){
//             // let storage_items = JSON.parse(localStorage.getItem('alldata'));
//             // console.log(storage_items);

//             // let manipulated_data = Object.entries(storage_items);
           

//             // manipulated_data.forEach(ele => {
//             //     console.log(ele);

                 
               
//             //     let my_table = document.querySelector("table");
//             //     let my_html = ` 
//             //     <tr>
//             //         <td>${ele[1]}</td>
//             //         <td>${ele[1]}</td>
//             //         <td><img src="${img_link.value}" alt="Contestants image"></td>
//             //     </tr>
//             //     `
//             //     my_table.insertAdjacentHTML('beforeend', my_html);
//             // });
//             // }
           
           

          
//             create_contes_btn.addEventListener("click", createContestant);

let create_contestant_btn = document.getElementById("create-contestant-btn");

function createContestant(){
    let contestant_details = getContestantDetails();
    console.log(contestant_details);
}

//Getting the name and registration detail of new contestatant
function getContestantDetails(){
    let contestant_name = document.getElementById("name").value;
    let image_link = document.getElementById("image-url").value;
    let contestant_id = 0;
    contestant_id +=  1;
    return ({name: contestant_name, image: image_link, id: contestant_id });
}


create_contestant_btn.addEventListener("click", createContestant);