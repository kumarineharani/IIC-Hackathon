function showPackageDetails(packageId) {
    const packages = document.querySelectorAll('.package');
    packages.forEach(pkg => pkg.style.display = 'none');

    const customizationSection = document.querySelector('.customization');
    customizationSection.style.display = 'block';

    const selectedPackage = document.getElementById(packageId);
    const basePrice = parseInt(selectedPackage.querySelector('.price').textContent.replace('₹', '').replace('/Person', ''));

    document.getElementById('totalPrice').textContent = basePrice;
}

document.getElementById('calculatePrice').addEventListener('click', () => {
    const basePrice = parseInt(document.getElementById('totalPrice').textContent);

    const hotelMultiplier = parseInt(document.getElementById('hotel').value);
    const rentalPrice = document.getElementById('rent').value === 'car' ? 5000 : document.getElementById('rent').value === 'bike' ? 2000 : 0;

    const flightPrice = document.getElementById('flight').checked ? 10000 : 0;
    const trainPrice = document.getElementById('train').checked ? 5000 : 0;

    const activitiesCount = parseInt(document.getElementById('activities').value);
    const activitiesPrice = activitiesCount * 500;

    const extraMealsCount = parseInt(document.getElementById('extraMeals').value);
    const mealsPrice = extraMealsCount * 800;

    const guidePrice = document.getElementById('guide').checked ? 2000 : 0;

    const totalPrice = basePrice + rentalPrice + flightPrice + trainPrice + activitiesPrice + mealsPrice + guidePrice;

    document.getElementById('totalPrice').textContent = totalPrice;
});
