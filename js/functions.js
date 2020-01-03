$(document).on('click', 'a[href^="#"]', function (event) {
    if (event.currentTarget.className.includes("carousel-control")) { return }

    event.preventDefault();

    const offsetToScroll = possibleMobile() ? 0 : 20;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - offsetToScroll
    }, 'slow');

    $('label.hamburguer-menu input').prop('checked', false);
});

const showNavbar = function () {
    const headerHeight = $('header').height() - 70;
    if ($(window).scrollTop() > headerHeight) {
        $('nav').parent().removeClass('hidden-content');
    } else if ($(window).scrollTop() < headerHeight) {
        $('nav').parent().addClass('hidden-content');
    }
};


$(document).ready(function () {
    $('#spinner-loading').addClass('hidden');
    $('#site-content').removeClass('hidden');

    AOS.init();

    $(window).scroll(function () {
        showNavbar();
    });

    $('#my-years').text(calculateAge(new Date(1993, 08, 09)));
});

function calculateAge(birthday) {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$('#go-to-top').on('click', function (_event) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

$('#send-contact-form').on('click', function (event) {
    const $form = $(event.currentTarget).parents('.form-horizontal');
    const $name = $form.find('#inputName');
    const $email = $form.find('#inputEmail');
    const $body = $form.find('#inputBody');
    const $emptyFormAlert = $form.find('#empty-form-alert');

    if (!$name.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Sin nombre no sé a quién le respondo! :)');
    } else if (!$email.val()) {
        event.preventDefault();
        $emptyFormAlert.text('¡El email es muy importante!');
    } else if (!$body.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Vamos, unas palabras más...');
    } else {
        $emptyFormAlert.text('¡Mensaje enviado, gracias!');
    }
})

function possibleMobile() {
    return window.innerWidth <= 800;
}

$('#experience #projects-all').on('click', function (e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').removeClass('hidden');
})
$('#experience #projects-fullstack').on('click', function (e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').addClass('hidden');
    $('#experience #unpie').removeClass('hidden');
    $('#experience #protagonistas').removeClass('hidden');
})
$('#experience #projects-frontend').on('click', function (e) {
    $('#experience .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#experience .project').addClass('hidden');
    $('#experience #construcciones').removeClass('hidden');
    $('#experience #modernizacion').removeClass('hidden');
})

new TypeIt('#main', {
    speed: 25,
    startDelay: 1000
  })
  .type('I\'m a Full Stack Web Developer...<br/>And also worked on Hybrid app frameworks like Ionic, React-Native & Flutter.')
  .go();