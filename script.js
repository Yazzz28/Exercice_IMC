function calculerIMC(event) {
    event.preventDefault();

    let poids = parseFloat(document.getElementById("poids").value);
    let taille = parseFloat(document.getElementById("taille").value);

    let imc = poids / (taille * taille);
    document.getElementById("imc").textContent = imc.toFixed(2);

    // Calculer la position de l'IMC de l'utilisateur par rapport à la plage de poids saine
    let imcMin = 18.5;
    let imcMax = 40;
    let imcRange = imcMax - imcMin;
    let userPosition = (imc - imcMin) / imcRange * 100;

    // Mettre à jour la position de l'utilisateur sur la barre de progression
    let progressBar = document.querySelector('.progress');
    progressBar.style.width = userPosition + '%';

    // Mettre à jour les étiquettes d'IMC
    document.querySelector('.min-imc').textContent = 'IMC Min: ' + imcMin;
    document.querySelector('.max-imc').textContent = 'IMC Max: ' + imcMax;
    document.querySelector('.user-imc').textContent = 'Votre IMC: ' + imc.toFixed(2);
}

// Appeler la fonction lors de la soumission du formulaire
document.getElementById('form').addEventListener('submit', calculerIMC);
