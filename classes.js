let allDaysVisible = false;
allDaysButton.addEventListener('click', () => {
    if (!allDaysVisible) {
        // Display content for all days
        displayAllDaysContent();
        allDaysContent.style.display = 'block';
        navDropdown.selectedIndex = -1; // Deselect any specific day
    } else {
        // Hide the content
        allDaysContent.style.display = 'none';
        // Display content for the currently selected day
        const selectedDay = navDropdown.selectedIndex;
        displayDayContent(selectedDay);
    }
    // Toggle visibility status
    allDaysVisible = !allDaysVisible;
});
