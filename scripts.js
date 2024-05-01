document.getElementById('Abutton').addEventListener('click', function () {
    // Change the color of the A-C-E line to #003DA5
    map.setPaintProperty('subway-lines-layer', 'line-color', [
        'match',
        ['get', 'name'], // Property name in GeoJSON containing line names
        // Color each line differently based on its name
        'A-C-E', '#003DA5', // #003DA5 for Line A, C, and E lines overlapping 
        'A', '#003DA5', //Only the A line
        'C', '#ADD8E6', //Only the C line
        'E', '#ADD8E6', //Only the E line
        'A-E', '#003DA5', // A and E overlap
        'A-C', '#003DA5', //A and C overlap
        'C-E', '#ADD8E6', //C and E overlap
        // Default color if line name does not match any case
        '#cccccc'
    ]);

    // Add animation code here for the A line
    let isBlue = true; // Initial state of the color
    const interval = setInterval(() => {
        // Toggle between blue and light blue
        const color = isBlue ? '#ADD8E6' : '#003DA5';
        map.setPaintProperty('subway-lines-layer', 'line-color', [
            'match',
            ['get', 'name'], 
            // Color each line differently based on its name
            'A-C-E', isBlue ? '#ADD8E6' : '#003DA5', 
            'A', color, 
            'C', '#ADD8E6', 
            'E', '#ADD8E6', 
            'A-E', isBlue ? '#ADD8E6' : '#003DA5', 
            'A-C', isBlue ? '#ADD8E6' : '#003DA5', 
            'C-E', '#ADD8E6', 
            // Default color if line name does not match any case
            '#cccccc'
        ]);
        isBlue = !isBlue; // Toggle the state
    }, 2000); // Change color every 2 second
});

document.getElementById('Ebutton').addEventListener('click', function () {
    // Change the color of the E line to blue
    map.setPaintProperty('subway-lines-layer', 'line-color', [
        'match',
        ['get', 'name'], 
        'A-C-E', '#003DA5', 
        'A', '#ADD8E6', 
        'C', '#ADD8E6', 
        'E', '#003DA5', 
        'A-E', '#003DA5', 
        'A-C', '#ADD8E6', 
        'C-E', '#003DA5', 
        '#cccccc'
    ]);

    // Add animation code here for the E line
    let isBlue = true; 
    const interval = setInterval(() => {
        const color = isBlue ? '#ADD8E6' : '#003DA5';
        map.setPaintProperty('subway-lines-layer', 'line-color', [
            'match',
            ['get', 'name'], 
            'A-C-E', isBlue ? '#ADD8E6' : '#003DA5', 
            'A', '#ADD8E6', 
            'C', '#ADD8E6', 
            'E', color, 
            'A-E', isBlue ? '#ADD8E6' : '#003DA5', 
            'A-C', '#ADD8E6',
            'C-E', '#003DA5', 
            '#cccccc'
        ]);
        isBlue = !isBlue;
    }, 4400); 
});

document.getElementById('Cbutton').addEventListener('click', function () {
    map.setPaintProperty('subway-lines-layer', 'line-color', [
        'match',
        ['get', 'name'], 
        'A-C-E', '#003DA5', 
        'A', '#ADD8E6', 
        'C', '#003DA5', 
        'E', '#ADD8E6', 
        'A-E', '#ADD8E6', 
        'A-C', '#003DA5', 
        'C-E', '#003DA5', 
        '#cccccc'
    ]);

    let isBlue = true; 
    const interval = setInterval(() => {
        const color = isBlue ? '#ADD8E6' : '#003DA5';
        map.setPaintProperty('subway-lines-layer', 'line-color', [
            'match',
            ['get', 'name'], 
            'A-C-E', isBlue ? '#ADD8E6' : '#003DA5', 
            'A', '#ADD8E6', 
            'C', color, 
            'E', '#ADD8E6', 
            'A-E', '#ADD8E6', 
            'A-C', color, 
            'C-E', color, 
            '#cccccc'
        ]);
        isBlue = !isBlue; 
    }, 4400); 
});


let AcounterValue = 0; // Initialize the counter value

// Function to update the A counter
function updateACounter() {
    AcounterValue++; // Increment the counter value
    // Update the content of the <span> element with the new counter value
    document.getElementById('AcounterValue').textContent = AcounterValue;
}

// Call the updateACounter function every 2 seconds
setInterval(updateACounter, 2000);

let EcounterValue = 0; 
function updateECounter() {
    EcounterValue++; 
    document.getElementById('EcounterValue').textContent = EcounterValue;
}
setInterval(updateECounter, 4400);



let CcounterValue = 0; 
function updateCCounter() {
    CcounterValue++; 
    document.getElementById('CcounterValue').textContent = CcounterValue;
}

setInterval(updateCCounter, 4400);

