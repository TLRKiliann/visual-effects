import React, { useEffect } from 'react'

export default function DropDownComp() {

  const menuDropdown = () => {
    const rubriques = document.querySelectorAll('aside > ul > li > a');
    Array.prototype.forEach.call( rubriques, (rubrique) => {
      rubrique.onclick = ( e ) => {
        e.preventDefault();
        let li = rubrique.parentNode; // ul
        let openHeight = li.querySelector('ul').scrollHeight; // adjust automaticaly
        if ( li.classList.contains('active') )
        {
          li.querySelector('ul').style.height = '0px';
          li.classList.remove('active');
        }
        else {
          li.querySelector('ul').style.height = openHeight + 'px';
          li.classList.add('active');
        }
      }
    });
  }

  useEffect(() => {
    const callFn = () => {
      menuDropdown();
    }
    callFn();
    return () => console.log("menu drop-down loaded");
  }, [])

  return (
    <>
        <div className='dropdown--menu'>
          <aside>
            <ul>
                <li className='dropdown--tilte'>
                  <a onClick={menuDropdown}>Story of Nier</a>
                    <ul>
                        <li><a href="#">Draken Guard 1 - 2 - 3</a></li>
                        <li><a href="#">Nier Gestalt</a></li>
                        <li><a href="#">Nier Automata</a></li>
                    </ul>
                </li>
                <li className='dropdown--tilte'>
                  <a onClick={menuDropdown}>Heros</a>
                    <ul>
                        <li><a href="#">9S</a></li>
                        <li><a href="#">2B</a></li>
                        <li><a href="#">A2</a></li>
                    </ul>
                </li>
                <li className='dropdown--tilte'>
                  <a onClick={menuDropdown}>Bonus</a>
                    <ul>
                        <li><a href="#">Animation</a></li>
                        <li><a href="#">Game Play</a></li>
                        <li><a href="#">Goodies</a></li>
                    </ul>
                </li>
            </ul>
          </aside>
        </div>
    </>
  )
}
