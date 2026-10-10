// Select all FAQ items
const faqs = document.querySelectorAll(".faq");

// Add click event to each question
faqs.forEach((faq) => {
    const question = faq.querySelector(".question");

    question.addEventListener("click", () => {

        // Close all other FAQs (only one stays open)
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });

        // Toggle the clicked FAQ
        faq.classList.toggle("active");
    });
});