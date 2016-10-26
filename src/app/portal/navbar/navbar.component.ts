import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'portal-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
    ngOnInit(): void {
        $(function () {
            $('body').addClass('landing-page');
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
            // Page scrolling feature
            $('a.page-scroll').bind('click', function (event:any) {
                let link = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(link.attr('href')).offset().top - 50
                }, 500);
                event.preventDefault();
                $('#navbar').collapse('hide');
            });

            let docElem = document.documentElement,
                header = document.querySelector('.navbar-default'),
                didScroll = false,
                changeHeaderOn = 200;
            function init() {
                window.addEventListener('scroll', function (event:any) {
                    if (!didScroll) {
                        didScroll = true;
                        setTimeout(scrollPage, 250);
                    }
                }, false);
            }
            function scrollPage() {
                let sy = scrollY();
                if (sy >= changeHeaderOn) {
                    $(header).addClass('navbar-scroll');
                }else {
                    $(header).removeClass('navbar-scroll');
                }
                didScroll = false;
            }
            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }
            init();
        });
    }
}

