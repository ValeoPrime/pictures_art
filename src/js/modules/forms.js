const forms = (state) => {
    const AllForms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const upload = document.querySelectorAll('[name="upload"]')

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы вам перезвоним!',
        error: 'Что-то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    }

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    const postData = async (url, data) => {

        let res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран'
        })
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log('Загрузили файл', item.files[0]);
            let dots
            item.files[0].name.split('.')[0].length > 6 ? dots = '...' : dots = '.'
            const fileName = item.files[0].name.split('.').substring(0, 7) + dots + item.files[0].name.split('.')[1]
            
            item.previousElementSibling.textContent = fileName
        })
    })

    AllForms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()

            //Блок со статусом отправки данных из формы
            let messageStatus = document.createElement('div')
            messageStatus.classList.add('status')
            item.parentNode.appendChild(messageStatus)
            //end

            item.classList.add('animated', 'fadeOutUp')
            setTimeout(() => {
                item.style.display = 'none'
            }, 400);

            let statusImg = document.createElement('img')
            statusImg.setAttribute('src', message.spinner)
            statusImg.classList.add('animated', 'fadeInUp')

            messageStatus.appendChild(statusImg)

            let textMessage = document.createElement('div')
            textMessage.textContent = message.loading

            messageStatus.appendChild(textMessge)

            const formData = new FormData(item)
            let api
            item.closest('popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question

            postData(api, formData)
                .then(res => {
                    console.log('Ответ сервера',res);
                    statusImg.setAttribute('src', message.ok)
                    textMessage.textContent = message.success
                   
                })
                .catch((e) => {
                    console.log(e);
                    statusImg.setAttribute('src', message.fail)
                    textMessage.textContent = message.error
                })
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        messageStatus.remove()
                        item.style.display = 'block'
                        item.classList.remove('fadeOutUp')
                        item.classList.add('fadeInUp')
                    }, 5000)
                })
        })
    })
}

export default forms