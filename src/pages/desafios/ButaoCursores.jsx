import './ButaoCursores.scss'
export const ButaoCursores = () => {
  // document.querySelectorAll('.btn').forEach(item => {

  //   item.addEventListener('dragstart', (e) => {
  //     e.currentTarget.classList.add('dragging');
  //     if (e.target.parentElement.className !== 'box') { return }
  //     e.dataTransfer.setData("box", e.target.parentElement.id);
  //     e.dataTransfer.setData("button", e.target.id);
  //   });

  //   item.addEventListener('dragend', (e) => {
  //     e.currentTarget.classList.remove('dragging');
  //   });

  //   item.addEventListener('click', (e) => {
  //     if (e.currentTarget == document.querySelector('.btn.movable')) { return }

  //     let btnCurrent = e.currentTarget;
  //     btnCurrent.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> LOADING';
  //     btnCurrent.classList.toggle('loader');

  //     setTimeout(() => {
  //       btnCurrent.classList.toggle('loader');

  //       // made clickable the disable button
  //       let oldDisabledBtn = document.querySelector(".btn.disabled");
  //       oldDisabledBtn.removeAttribute("disabled");
  //       oldDisabledBtn.classList.remove("disabled");

  //       //disable movable button
  //       let oldMovableBtn = document.querySelector(".btn.movable");
  //       oldMovableBtn.innerHTML = 'INTERAJA COMIGO';
  //       oldMovableBtn.classList.add("disabled");
  //       oldMovableBtn.classList.remove("movable");
  //       oldMovableBtn.setAttribute("draggable", false);
  //       oldMovableBtn.setAttribute("disabled", true);

  //       // made current button movable
  //       btnCurrent.classList.add('movable');
  //       btnCurrent.innerHTML = '<img src="/public/svg/d3/trelines.svg" alt="movable button"/> INTERAJA COMIGO';
  //       btnCurrent.setAttribute("draggable", true);
  //     }, 3000)

  //   })

  // });

  // document.querySelectorAll('.box').forEach(item => {
  //   item.addEventListener('dragover', (e) => {
  //     e.preventDefault();
  //   });

  //   item.addEventListener('drop', (e) => {

  //     let box = document.getElementById(e.dataTransfer.getData("box"));
  //     let btn = document.getElementById(e.dataTransfer.getData("button"));

  //     // if(){}
  //     box.appendChild(e.currentTarget.firstElementChild);
  //     e.currentTarget.appendChild(btn);
  //   });
  // });

  return (
    <div className="butaoCursores bg-[#130F1E] text-white min-h-screen">

      <h1 className="text-4xl text-center p-3 font-bold">Click esse butões</h1>

      <div id="app" className="flex flex-col gap-8 p-11">

        <div id="box1" className="box">
          <button id="primary" draggable="false" className=" bg-[#8257E5] hover:bg-[#9674E5] btn">
            INTERAJA COMIGO
          </button>
        </div>

        <div id="box2" className="box">
          <button id="secondary" disabled="true" draggable="false"
            className=" bg-[#3C3748] hover:bg-[#6A617F] btn disabled">
            INTERAJA COMIGO
          </button>
        </div>

        <div id="box3" className="box">
          <button id="tertiary" draggable="true" className="btn movable">
            <img src="/public/svg/d3/trelines.svg" alt="movable button" /> INTERAJA COMIGO
          </button>
        </div>

      </div>
    </div>
  )
}