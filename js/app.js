const body = document.querySelector('.hamburger-close')
const showMenu = document.querySelector('.hamburger-logo')
const closeMenu = document.querySelector('.hamburger-close-logo')
showMenu.addEventListener('click',function(){
  body.className='hamburger-close hamburger-open'
  document.querySelector('.list').innerHTML= `<ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Products</a></li>
                                                <li><a href="#">Contact</a></li>
                                              </ul>`
})

closeMenu.addEventListener('click',function(){
  body.className='hamburger-close'
  // body.className='hamburger-close'
})
