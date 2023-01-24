 document.querySelectorAll('.btn').forEach(item => {

        item.addEventListener('dragstart', (e) => {
            e.currentTarget.classList.add('dragging');
            e.dataTransfer.setData("box", e.target.parentElement.id);
            e.dataTransfer.setData("button", e.target.id);
        });

        item.addEventListener('dragend', (e) => {
            e.currentTarget.classList.remove('dragging');
        });

        item.addEventListener('click', (e) => {
            if(e.currentTarget == document.querySelector('.btn.movable')){return}

            let btnCurrent = e.currentTarget;
            btnCurrent.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> LOADING';
            btnCurrent.classList.toggle('loader');

            setTimeout(() => {
                btnCurrent.classList.toggle('loader');

                // made clickable the disable button
                let oldDisabledBtn = document.querySelector(".btn.disabled");
                oldDisabledBtn.removeAttribute("disabled");
                oldDisabledBtn.classList.remove("disabled");

                //disable movable button
                let oldMovableBtn = document.querySelector(".btn.movable");
                oldMovableBtn.innerHTML = 'INTERAJA COMIGO';
                oldMovableBtn.classList.add("disabled");
                oldMovableBtn.classList.remove("movable");
                oldMovableBtn.setAttribute("draggable", false);
                oldMovableBtn.setAttribute("disabled",true);

                // made current button movable
                btnCurrent.classList.add('movable');
                btnCurrent.innerHTML='<img src="./assets/reorder-three.svg" alt="movable button"> INTERAJA COMIGO';
                btnCurrent.setAttribute("draggable", true);
            }, 3000)

        })

    });

    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        item.addEventListener('drop', (e) => {

            let box = document.getElementById(e.dataTransfer.getData("box"));
            let btn = document.getElementById(e.dataTransfer.getData("button"));
            box.appendChild(e.currentTarget.firstElementChild);
            e.currentTarget.appendChild(btn);
        });
    });