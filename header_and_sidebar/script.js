const burgerButton = document.querySelector('.burgerButton');
const nameWrapper = document.querySelector('.nameWrapper');
const profilePopupWrapper = document.querySelector('.menuWrapper');
const userArrowIcon = document.querySelector('.userArrowIcon');
const primaryNavItems = document.querySelectorAll('.primaryNav');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
const closeResponsive = document.querySelector('.close');

let isOpenSidebar = false;
let isOpenProfilePopup = false;

// handling burger button
burgerButton.addEventListener('click', (e) => {
    e.stopPropagation()

    isOpenSidebar = !isOpenSidebar;

    burgerButton.classList.add('openBurgerButton');
    sidebar.classList.add('openSidebar');
    backdrop.classList.add('backdropActive');
})

// handling user profile popup
nameWrapper.addEventListener('click', (e) => {
    e.stopPropagation()

    isOpenProfilePopup = !isOpenProfilePopup;

    profilePopupWrapper.classList.toggle('openMenuWrapper');
    userArrowIcon.classList.toggle('openUserArrowIcon');
})

// closing user popup by clicking any place
document.addEventListener('click', (e) => {
    e.stopPropagation()

    isOpenProfilePopup = false;

    profilePopupWrapper.classList.remove('openMenuWrapper');
    userArrowIcon.classList.remove('openUserArrowIcon');
})

// handling sidebar styles
const handleActiveClassnames = (parent, handle = 'remove') => {
    if (handle === 'remove') {
        parent.classList.remove('activePrimaryNav')
        parent.nextElementSibling?.classList.remove('activeSecondaryNav')

        for (let item of parent.children) {
            item.classList.remove('activeItems')

            if (item.classList.contains('arrowIcon')) {
                item.classList.remove('activeArrowIcon')
            }
        }
    } else {
        parent.classList.add('activePrimaryNav')
        parent.nextElementSibling?.classList.add('activeSecondaryNav')

        for (let item of parent.children) {
            item.classList.add('activeItems')

            if (item.classList.contains('arrowIcon')) {
                item.classList.add('activeArrowIcon')
            }
        }
    }
}

// handling click on sidebar primary nav items
primaryNavItems.forEach((item) => item.addEventListener('click', (e) => {
    primaryNavItems.forEach((itemS) => {
        handleActiveClassnames(itemS)
    })

    handleActiveClassnames(e.currentTarget, 'add')
}))

// closing sidebar by clicking backdrop in responsive
backdrop.addEventListener('click', (e) => {
    backdrop.classList.remove('backdropActive');
    sidebar.classList.remove('openSidebar');
    burgerButton.classList.remove('openBurgerButton');
})

// closing sidebar in responsive
closeResponsive.addEventListener('click', (e) => {
    sidebar.classList.remove('openSidebar');
    backdrop.classList.remove('backdropActive');
    burgerButton.classList.remove('openBurgerButton');
})

