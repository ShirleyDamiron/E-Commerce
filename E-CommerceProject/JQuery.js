const sliderUl = '.slider__slides';
const nextButton = '.slider__next';
const prevButton = '.slider__prev';
const slideCount = $(`${sliderUl} li`).length;
const slideWidth = $(`${sliderUl} li`).width();
const slideHeight = $(`${sliderUl} li`).height();
const sliderUlWidth = slideCount * slideWidth; //imagery
//, marginLeft: - slideWidth
console.log(slideWidth)
$(sliderUl).css({ width: sliderUlWidth, marginLeft: - slideWidth }); //adding 4000+px ul
$(`${sliderUl} li:last-child`).prependTo(sliderUl); //adding last li to the top of ul

function moveLeft() {
    $(sliderUl).animate({
        left: + slideWidth
    }, 200, function () {
        $(`${sliderUl} li:last-child`).prependTo(sliderUl);
        $(sliderUl).css('left', '');
    });
};

function moveRight() {
    $(sliderUl).animate({
        left: - slideWidth
    }, 200, function () {
        $(`${sliderUl} li:first-child`).appendTo(sliderUl);
        $(sliderUl).css('left', '');
    });
};

$(prevButton).click(function () {
    moveLeft();
});

$(nextButton).click(function () {
    moveRight();
});

// filter 
$('#filter').on('change',function () {
    const value = $(this).val()
    const allImages = $('.container').children('.image-row')

    if(value === 'none') {
        allImages.show()
        return;
    } 

    allImages.each(function() {
        if(!$(this).hasClass(value)) {
            $(this).hide()
        } else {
            $(this).show()
        }
    })
})    

// Valedation Form

$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("sform[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });