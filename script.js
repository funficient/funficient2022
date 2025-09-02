// create a select and append #menu
var $select = $("<select></select>")
$("#menu").append($select)
// cycle over menu links

$("#menu a").each(function(){
  var $anchor = $(this);
  //create an option 
  var $option = $("<option></option>");
  //deal with selected options depending on current page.
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //options's vallue is the href
  $option.val($anchor.attr("href"));
  //options's text is the text of link
  $option.text($anchor.text());
  //append option to sellect
  $select.append($option);  
});


//bind change listner to the select.
$select.change(function(){
  //go to select's location
  window.location = $select.val();
});


//retreat details accordian script

document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion buttons
    const accordionButtons = document.querySelectorAll('.rs-accordion-button');
    const signupButton = document.querySelector('.rs-signup-button');

    // Track expanded items
    let expandedItems = new Set();

    // Function to toggle accordion
    function toggleAccordion(button) {
  const itemId = button.getAttribute('data-accordion-id');
  const content = document.getElementById(`content-${itemId}`);
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    button.setAttribute('aria-expanded', 'false');
    content.hidden = true;
  } else {
    button.setAttribute('aria-expanded', 'true');
    content.hidden = false;
  }
}


    // Add click event listeners to accordion buttons
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleAccordion(this);
        });

        // Add keyboard support
        button.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleAccordion(this);
            }
        });
    });

    // Add click event listener to signup button
    if (signupButton) {
        signupButton.addEventListener('click', function() {
            // Handle signup action
            console.log('Sign up clicked');
            // You can add your signup logic here
            alert('Sign up functionality would be implemented here');
        });

        // Add keyboard support for signup button
        signupButton.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    }

    // Add focus management for better accessibility
    accordionButtons.forEach(button => {
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid rgba(182, 151, 121, 1)';
            this.style.outlineOffset = '2px';
        });

        button.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Initialize any dynamic attributes from the original script
    const containerElement = document.querySelector('.rs-content-container');
    if (containerElement) {
        containerElement.setAttribute('space', '87');
    }

    const imageRowTop = document.querySelector('.rs-image-row-top');
    if (imageRowTop) {
        imageRowTop.setAttribute('space', '11');
    }

    const imageRowBottom = document.querySelector('.rs-image-row-bottom');
    if (imageRowBottom) {
        imageRowBottom.setAttribute('space', '11');
    }
});
