let url = 'https://jsonplaceholder.typicode.com/photos';
let key = `ZYuawb9fI8ER4_hABd1GjEzdeAU8068utxBWFTHKNuM`;

fetch('image.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);


        const imageUrls = {
            1: data.images[0].url,
            2: data.images[1].url,
            3: data.images[2].url,
        };
        const container = document.querySelector('#blogged');
        container.style.background = `url(${imageUrls[3]})`;
        container.style.backgroundPosition = 'center';
        container.style.backgroundRepeat = 'no-repeat'
        console.log(container);

        const rightArrow = document.querySelector('.fa-chevron-right')
        const leftArrow = document.querySelector('#uniqueId');
        const header = document.querySelector('header');
        const actualChat = document.querySelector('.actualChat');
        const button = document.querySelector('.button');
        const info = document.querySelector('.info');
        const chevron = document.querySelector('.chevron');
        const icons = document.querySelector('.icons');
        const absolut = document.querySelector('.absolut')

        function toggle() {
            randomImage();
            randomImage2()
        }

        function randomImage() {
            if (rightArrow) {
                if (container) {
                    const randomKey = Math.floor(Math.random() * 3) + 1;
                    container.innerHTML = '';
                    container.style.background = `url(${imageUrls[randomKey]})`;
                    container.style.backgroundPosition = 'center';
                    container.style.height = '100vh'
                    container.style.backgroundRepeat = 'no-repeat';
                    container.style.animation = 'fadeIn 0.4s ease-in'
                    container.appendChild(header);
                    container.appendChild(actualChat);
                    container.appendChild(button);
                    container.appendChild(info);
                    container.appendChild(chevron);
                    container.appendChild(icons);
                    container.appendChild(absolut);
                }
            } else {
                container.style.background = `url(${imageUrls[1]})`;
            }

        }

        function randomImage2() {
            if (leftArrow) {
                if (container) {
                    const randomKey = Math.floor(Math.random() * 3) + 1;
                    container.innerHTML = '';
                    container.style.background = `url(${imageUrls[randomKey]})`;
                    container.style.backgroundPosition = 'center';
                    container.style.height = '90vh'
                    container.style.backgroundRepeat = 'no-repeat';
                    container.style.animation = 'fadeIn 0.4s ease-in'

                    container.appendChild(header);
                    container.appendChild(actualChat);
                    container.appendChild(button);
                    container.appendChild(info);
                    container.appendChild(chevron);
                    container.appendChild(icons);
                    container.appendChild(absolut);
                }
            } else {
                container.style.background = `url(${imageUrls[1]})`;
            }
        }

        rightArrow.addEventListener('click', toggle);

        leftArrow.addEventListener('click', toggle)




    }).catch(error => console.log(error))