
function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('hacamatNotes', notes);
    alert('Not kaydedildi!');
}

window.onload = () => {
    const saved = localStorage.getItem('hacamatNotes');
    if (saved) {
        document.getElementById('notes').value = saved;
    }
};
