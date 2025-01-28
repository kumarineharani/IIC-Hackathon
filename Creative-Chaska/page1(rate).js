document.addEventListener("DOMContentLoaded", () => {
    const categories = ["hygiene", "taste", "price"];
    const ratings = { hygiene: 0, taste: 0, price: 0 };

    categories.forEach(category => {
        const stars = document.querySelectorAll(#${category}-stars .star);
        const ratingText = document.getElementById(${category}-rating);

        stars.forEach((star, index) => {
            // Highlight stars on hover
            star.addEventListener("mouseover", () => highlightStars(stars, index));
            // Reset stars when hover ends
            star.addEventListener("mouseout", () => resetStars(stars, ratings[category]));
            // Set rating on click
            star.addEventListener("click", () => {
                ratings[category] = index + 1;
                ratingText.textContent = Rating: ${ratings[category]};
            });
        });
    });

    // Highlight stars up to the hovered index
    function highlightStars(stars, index) {
        stars.forEach((star, i) => {
            star.classList.toggle("active", i <= index);
        });
    }

    // Reset stars to reflect the selected rating
    function resetStars(stars, rating) {
        stars.forEach((star, i) => {
            star.classList.toggle("active", i < rating);
        });
    }

    // Handle Review Submission
    const submitButton = document.getElementById("submit-review");
    submitButton.addEventListener("click", () => {
        const reviewText = document.getElementById("review-text").value.trim();
        const overallRating =
            (ratings.hygiene + ratings.taste + ratings.price) / 3;

        if (reviewText === "" || !ratings.hygiene || !ratings.taste || !ratings.price) {
            alert("Please provide a rating for all categories and write a review.");
            return;
        }

        // Add the review to the reviews list
        const reviewsList = document.getElementById("reviews-list");
        const reviewItem = document.createElement("li");
        reviewItem.innerHTML = `
            <strong>Hygiene:</strong> ${ratings.hygiene} stars<br>
            <strong>Taste:</strong> ${ratings.taste} stars<br>
            <strong>Price:</strong> ${ratings.price} stars<br>
            <strong>Overall Rating:</strong> ${overallRating.toFixed(1)} stars<br>
            <strong>Review:</strong> ${reviewText}
        `;
        reviewsList.appendChild(reviewItem);

        // Reset form fields
        resetForm();
    });

    // Reset form fields after submission
    function resetForm() {
        const stars = document.querySelectorAll(".star");
        stars.forEach(star => star.classList.remove("active"));
        document.getElementById("review-text").value = "";
        document.getElementById("hygiene-rating").textContent = "Rating: 0";
        document.getElementById("taste-rating").textContent = "Rating: 0";
        document.getElementById("price-rating").textContent = "Rating: 0";

        // Reset ratings object
        Object.keys(ratings).forEach(key => {
            ratings[key] = 0;
        });
    }
});
