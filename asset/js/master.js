let counter = 0
    document.getElementById('add').addEventListener('click', () => {
        let inp = document.getElementById('inp')
        if ((inp.value) != '') {
            let temp = document.createElement('div')
            temp.classList.add('box')
            temp.style.backgroundColor = `rgb(${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)})`
            temp.innerHTML = ` 
            <h2>${inp.value}</h2>
            <span class="material-symbols-outlined" onclick="edit(this)">edit</span>
            <span class="material-symbols-outlined" onclick="del(this)">delete</span>
            <input type="checkbox">
            `

            document.getElementById('notes').appendChild(temp)
            inp.value = null
            inp.focus()
            counter++
            note()

        } else {
            alert('poor kon....')
        }
    })
    function del(s) {
        s.parentElement.remove()
        counter--
        note()
    }
    function edit(s) {
        s.previousElementSibling.setAttribute('contenteditable', true)
    }
    function note() {
        document.getElementById('motto').innerHTML = counter + 'notes added'
    }

    document.getElementById('delAll').addEventListener('click', function () {
        let box = document.querySelectorAll('.box')
        box.forEach((val) => {
            let child = val.children
            if (child[3].checked) {

                val.remove()
                counter--
                note()
            }
        })
    })