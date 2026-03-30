const shrinkBtn = document.getElementById('shrinkBtn');
const demoObject = document.getElementById('demoObject');
const demoText = document.getElementById('demoText');
const demoBtn = document.getElementById('demoBtn');

let isShrunk = false;

shrinkBtn.addEventListener('click', () => {
  if (isShrunk) {
    // Restore
    demoObject.style.transform = 'scale(1)';
    demoText.textContent = 'Restored to full size! Feel the magic of ShrinkSack.';
    shrinkBtn.textContent = 'Shrink Object';
    isShrunk = false;
  } else {
    // Shrink
    demoObject.style.transform = 'scale(0.18)';
    demoText.textContent = 'Shrunk! Your item is now pocket-sized. Click again to restore.';
    shrinkBtn.textContent = 'Restore Object';
    isShrunk = true;
  }
});

demoBtn.addEventListener('click', () => {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
});
