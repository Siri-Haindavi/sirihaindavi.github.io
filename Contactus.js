"use strict";



function validateEmails(email, confirmEmail) {
    return email === confirmEmail;
}

function displayThankYouMessage(formId) {
    const form = document.getElementById(formId);
    form.innerHTML = '<p>Thanks for submitting!</p>'; // This replaces the form content
}

function handleSubmit(event, formId) {
    event.preventDefault();

    // Collecting data from the form
    const form = document.getElementById(formId);
    const email = form.querySelector('[name="email1"]').value; // Updated to correct name
    const confirmEmail = form.querySelector('[name="confirm_email1"]').value; // Updated to correct name

    // Checking if emails match
    if (!validateEmails(email, confirmEmail)) {
        alert('Emails do not match!');
        return;
    } else {
        displayThankYouMessage(formId);
    }
}

document.getElementById('formWhereToGo').addEventListener('submit', function(event) {
    handleSubmit(event, 'formWhereToGo');
});



function validateFeedback(event) {
    event.preventDefault();
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = feedbackForm.querySelector('[name="feedback_message"]').value; // Corrected to feedback_message

    if (!feedbackMessage) {
        alert('Please enter details in the feedback!');
    } else {
        feedbackForm.innerHTML = '<p>Thanks for your feedback!</p>'; // This replaces the form content
    }
}

document.getElementById('feedbackForm').addEventListener('submit', validateFeedback);


// for slideshow 

document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides");
    var slideInterval = setInterval(showSlides, 3000); // Change image every 3 seconds

    function showSlides() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
    }

    var slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    slideshowContainer.addEventListener('mouseleave', function() {
        slideInterval = setInterval(showSlides, 3000);
    });
});



