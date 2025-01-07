// Function to add the zoom effect to the corresponding section
function zoomSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('zoom-effect');  // Add zoom effect
        setTimeout(() => {
            section.classList.remove('zoom-effect');  // Remove zoom effect after 1 second
        }, 1000);  // Time in milliseconds (1000ms = 1 second)
    }
}

// Function to handle mouseover and touchstart events
function addZoomEffectEventListeners(linkSelector, sectionId) {
    const link = document.querySelector(linkSelector);
    if (link) {
        // Apply zoom on mouseover (hover)
        link.addEventListener('mouseover', function(event) {
            zoomSection(sectionId);
        });

        // Apply zoom on touch
        link.addEventListener('touchstart', function(event) {
            event.preventDefault();  // Prevent the default scroll behavior
            zoomSection(sectionId);
        });
    }
}

// Add event listeners to the navbar links
addZoomEffectEventListeners('a[href="#Korean"]', 'Korean');
addZoomEffectEventListeners('a[href="#Chinese"]', 'Chinese');
addZoomEffectEventListeners('a[href="#Japanese"]', 'Japanese');
addZoomEffectEventListeners('a[href="#Combination"]', 'Combination');
