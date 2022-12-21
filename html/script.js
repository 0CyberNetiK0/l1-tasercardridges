window.addEventListener('message', (event) => {
    if (event.data.type === 'set') {
        event.data.bool ? doOpen() : doClose();
    }
    if (event.data.type === 'open') {
        doOpen();
    }
    if (event.data.type === 'close') {
        doClose();
    }

    if (event.data.type === 'update') {
        doUpdate(event.data.amount);
    }
});


/**
 * Open the NUI
 */
function doOpen() {
    document.getElementById('body').style.display = 'block';
}

/**
 * Close the NUI
 */
function doClose() {
    document.getElementById('body').style.display = 'none';
}

/**
 * 
 * @param {Number} amount Update the amount of ammo in the cardridge 
 */
function doUpdate(amount) {
    document.getElementById('number').innerHTML = amount;
}
