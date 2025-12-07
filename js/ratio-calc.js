document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DOM Elemek Hivatkozásai
    const methodSelect = document.getElementById('method');
    const coffeeInput = document.getElementById('coffeeGrams');
    const calculateBtn = document.getElementById('calculateBtn');
    const waterNeededDisplay = document.getElementById('waterNeeded');

    // 2. Eseményfigyelő Beállítása
    // CSAK a gomb kattintását figyeljük
    calculateBtn.addEventListener('click', calculateRatio);

    // Kezdeti állapot beállítása: Üres vagy alapértelmezett üzenet
    waterNeededDisplay.textContent = "Kattints a 'Számítás' gombra az eredményhez.";

    // 3. Fő Számítási Logika
    function calculateRatio() {
        // Bemeneti adatok beolvasása és tisztítása
        const coffeeGrams = parseFloat(coffeeInput.value);
        const ratio = parseFloat(methodSelect.value);

        // Validáció: Ellenőrzi, hogy a bemenet érvényes, pozitív szám-e
        if (isNaN(coffeeGrams) || coffeeGrams <= 0) {
            waterNeededDisplay.textContent = "Hiba: Kérlek, adj meg érvényes, pozitív kávémennyiséget (grammban).";
            return;
        }

        // Kiszámítás
        const waterNeeded = coffeeGrams * ratio;
        
        // Eredmény megjelenítése a HTML-ben
        const methodName = methodSelect.options[methodSelect.selectedIndex].text.split('(')[0];
        
        waterNeededDisplay.innerHTML = `
            A(z) **${methodName}** módszerhez (${ratio}:1 arány)
            **${coffeeGrams} gramm** kávéhoz
            <br>
            összesen **${waterNeeded.toFixed(0)} ml** víz szükséges.
        `;
    }
});