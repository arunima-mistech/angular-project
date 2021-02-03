import { Directive, HostBinding } from '@angular/core';

@Directive ({
    selector:'[nwFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
}