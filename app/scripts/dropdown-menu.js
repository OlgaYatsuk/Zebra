class Menu {
    constructor (sSelector){
      console.log('header-menu constructor this', this);
        this.menu = $(sSelector);
        this.createEvents();
    }

    toggleSubmenu(event){
        $(event.currentTarget).children('.header-submenu').stop().toggle();
    }

    showSubmenu(event){
       // event.currentTarget - Js object which is bind with HTML element
      this.toggleSubmenu(event);
    }

    hideSubmenu(event){
      //  this.toggleSubmenu(event);
      // event.currentTarget - Js object which is bind with HTML element
      this.toggleSubmenu(event);
    }

    createEvents(){
        this.menu.find('.header-menu__item')
            .mouseover(this.showSubmenu.bind(this))
            .mouseout(this.hideSubmenu.bind(this))
        ;
    }
}

const menu = new Menu('.header-menu');
