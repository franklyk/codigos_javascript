const inputFile = document.querySelector('#input-image');
const previewImage = document.querySelector('#preview-image');
if (inputFile) {
    inputFile.addEventListener('change', function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', function (e) {
                const readertTarget = e.target;
                const img = document.createElement('img');
                img.src = readertTarget.result;
                img.classList.add('rounded-circle');
                img.setAttribute('id', 'image');
                previewImage.appendChild(img);
            });
            var oldImage = document.getElementById("image");
            if(oldImage){
                oldImage.remove(this);
            }
            reader.readAsDataURL(file);
        } else {

        }

    })

}


const inputFile2= document.querySelector('#img_prod');
const pictureImage = document.querySelector('.picture_image');
const pictureImageElement = '<i class="fa fa-camera"></i>';
pictureImage.innerHTML = pictureImageElement;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();


        reader.addEventListener('load', function(e){
            const readertTarget = e.target;

            const img = document.createElement('img');

            img.src = readertTarget.result;

            img.classList.add('picture_img');
            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file)
    }else{
        pictureImage.innerHTML = pictureImageElement;
    }

})



const inputFileDetail1 = document.querySelector('#img_prod_detail1');
const pictureImageDetail1 = document.querySelector('.picture_image_detail1');
const pictureImageElementDetail1 = '<i class="fa fa-camera"></i>';
pictureImageDetail1.innerHTML = pictureImageElementDetail1;

inputFileDetail1.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();


        reader.addEventListener('load', function(e){
            const readertTarget = e.target;

            const img = document.createElement('img');

            img.src = readertTarget.result;

            img.classList.add('picture_img');
            pictureImageDetail1.innerHTML = '';
            pictureImageDetail1.appendChild(img);
        });

        reader.readAsDataURL(file)
    }else{
        pictureImageDetail1.innerHTML = pictureImageElementDetail1;
    }

})

const inputFileDetail2 = document.querySelector('#img_prod_detail2');
const pictureImageDetail2 = document.querySelector('.picture_image_detail2');
const pictureImageElementDetail2 = '<i class="fa fa-camera"></i>';
pictureImageDetail2.innerHTML = pictureImageElementDetail2;

inputFileDetail2.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();


        reader.addEventListener('load', function(e){
            const readertTarget = e.target;

            const img = document.createElement('img');

            img.src = readertTarget.result;

            img.classList.add('picture_img');
            pictureImageDetail2.innerHTML = '';
            pictureImageDetail2.appendChild(img);
        });

        reader.readAsDataURL(file)
    }else{
        pictureImageDetail2.innerHTML = pictureImageElementDetail2;
    }

})

const inputFileDetail3 = document.querySelector('#img_prod_detail3');
const pictureImageDetail3 = document.querySelector('.picture_image_detail3');
const pictureImageElementDetail3 = '<i class="fa fa-camera"></i>';
pictureImageDetail3.innerHTML = pictureImageElementDetail3;

inputFileDetail3.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();


        reader.addEventListener('load', function(e){
            const readertTarget = e.target;

            const img = document.createElement('img');

            img.src = readertTarget.result;

            img.classList.add('picture_img');
            pictureImageDetail3.innerHTML = '';
            pictureImageDetail3.appendChild(img);
        });

        reader.readAsDataURL(file)
    }else{
        pictureImageDetail3.innerHTML = pictureImageElementDetail3;
    }

})

const inputFileDetail4 = document.querySelector('#img_prod_detail4');
const pictureImageDetail4 = document.querySelector('.picture_image_detail4');
const pictureImageElementDetail4 = '<i class="fa fa-camera"></i>';
pictureImageDetail4.innerHTML = pictureImageElementDetail4;

inputFileDetail4.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();


        reader.addEventListener('load', function(e){
            const readertTarget = e.target;

            const img = document.createElement('img');

            img.src = readertTarget.result;

            img.classList.add('picture_img');
            pictureImageDetail4.innerHTML = '';
            pictureImageDetail4.appendChild(img);
        });

        reader.readAsDataURL(file)
    }else{
        pictureImageDetail4.innerHTML = pictureImageElementDetail4;
    }

})



// if (inputFile) {
//     inputFile.addEventListener('change', function (e) {
//         const file = e.target.files[0];
//         if (file) {
            
//             const reader = new FileReader();
//             console.log(reader);
//             reader.addEventListener('load', function (e) {
//                 const readertTarget = e.target;

//                 const img = document.createElement('img');

//                 img.src = readertTarget.result;
                
//                 console.log(img);
//                 previewImage.appendChild(img);
//             })

//             reader.readAsDataURL(file);
//         }
//     })
// }

