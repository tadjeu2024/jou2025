const navItems = document.querySelectorAll('nav li a');
const sections = document.querySelectorAll('main section');

navItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        const targetSectionId = item.getAttribute('href').substring(1);

        navItems.forEach((navItem, navIndex) => {
            if (navIndex === index) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        });
        
        sections.forEach((section) => {
            if (section.id === targetSectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
