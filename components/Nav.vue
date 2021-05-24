<template>
  <header :class="{ 'navbar--hidden': !showNavbar, 'scrolled': scrolled }"
    class="navbar w-screen flex items-center fixed p-3 z-50 flex body-font justify-between md:justify-between p-1">
    <Logo />
    
    <ul class="hidden md:flex justify-center">
      <li>
        <a class="items-center py-3 mt-2 text-base font-normal tracking-tight transition duration-500 ease-in-out transform text-white lg:mx-8 md:mt-0 md:mr-4 hover:text-blue-500"
          href="#services">Services</a></li>
      <li>
        <a class="items-center py-3 mt-2 text-base font-normal tracking-tight transition duration-500 ease-in-out transform text-white lg:mx-8 md:mt-0 md:mr-4 hover:text-blue-500"
          href="#how-it-works">How It Works</a></li>
      <li>
        <a class="items-center py-3 mt-2 text-base font-normal tracking-tight transition duration-500 ease-in-out transform text-white lg:mx-8 md:mt-0 md:mr-4 hover:text-blue-500"
          href="#about">About Us</a></li>
      <li>
        <a class="items-center py-3 mt-2 text-base font-normal tracking-tight transition duration-500 ease-in-out transform text-white lg:mx-8 md:mt-0 md:mr-4 hover:text-blue-500"
          href="#contact">Contact</a></li>
    </ul>
    
    <ul class="hidden md:flex flex-col">
      <li><a class="items-center py-3 mt-2 text-base font-normal tracking-tight text-white lg:mx-8 md:mt-0 md:ml-4"
          href="#contact">
          <fa :icon="['fas','envelope']" /> <strong>Send us an Email</strong>: contact@prideconcretelifting.com</a></li>
      <li><a class="items-center py-3 mt-2 text-base font-normal tracking-tight text-white lg:mx-8 md:mt-0 md:ml-4"
          href="tel:817-888-6254">
          <fa :icon="['fas','phone']" /> <strong>Give us a Call</strong>: 817-888-6254</a></li>
    </ul>

    <a id="burger" :class="isOpen ? 'toggled' : ''"
      class="md:hidden flex space-between transition duration-500 ease-in-out transform sm:target-burger"
      @click.prevent="drawer" aria-label="Open Menu">
      <ul class="buns">
        <li class="bun"></li>
        <li class="bun"></li>
      </ul>
    </a>

    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
      leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 h-screen fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>
    
    <aside
      class="transform flex flex-col justify-evenly h-screen top-0 left-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <Logo />
      <span @click="isOpen = false"
        class="flex items-center justify-center font-bold text-lg p-4 hover:bg-blue-800 text-white"><span class="mr-2">
          <fa class="w-6 h-6" :icon="['fas','id-card']" />
        </span>
        <span><a href="#about">About Us</a></span></span>
      <span @click="isOpen = false"
        class="flex items-center justify-center font-bold text-lg p-4 hover:bg-blue-800 text-white "><span class="mr-2">
          <fa class="w-6 h-6" :icon="['fas','tools']" />
        </span>
        <span><a href="#services">Services</a></span></span>
      <span @click="isOpen = false"
        class="flex items-center justify-center font-bold text-lg p-4 hover:bg-blue-800 text-white "><span class="mr-2">
          <fa class="w-6 h-6" :icon="['fas','project-diagram']" />
        </span>
        <span><a href="#how-it-works">How It Works</a></span></span>
      <span @click="isOpen = false"
        class="flex items-center justify-center font-bold text-lg p-4 hover:bg-blue-800 text-white "><span class="mr-2">
          <fa class="w-6 h-6" :icon="['fas','paper-plane']" />
        </span>
        <span><a href="#contact">Contact</a></span></span>
      <ul @click="isOpen = false" class="flex flex-col p-4">
        <li><a class="items-center py-3 mt-2 text-base font-normal tracking-tight text-white lg:mx-8 md:mt-0 md:ml-4"
            href="#contact">
            <fa :icon="['fas','envelope']" /> <strong>Send us an Email</strong>:<br />
            contact@prideconcretelifting.com</a>
        </li>
        <li><a class="items-center py-3 mt-2 text-base font-normal tracking-tight text-white lg:mx-8 md:mt-0 md:ml-4"
            href="tel:817-888-6254">
            <fa :icon="['fas','phone']" /> <strong>Give us a Call</strong>:<br /> 817-888-6254</a></li>
      </ul>
    </aside>

  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        scrolled: false,
        showNavbar: true,
        lastScrollPosition: 0
      };
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0;
      },
      drawer() {
        this.isOpen = !this.isOpen;
      },
      onScroll() {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement
          .scrollTop // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return
        } // Here we determine whether we need to show or hide the navbar
        this.showNavbar = currentScrollPosition < this
          .lastScrollPosition // Set the current scroll position as the last scroll position
        this.lastScrollPosition = currentScrollPosition
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    }
  };
</script>
<style scoped>
  .navbar {
    transform: translate3d(0, 0, 0);
    transition: all .2s ease-in;
  }

  .navbar.navbar--hidden {
    opacity: 0;
    visibility: hidden;
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
    transition: all 400ms;
  }

  /* remove blue outline */
  button:focus {
    outline: 0;
  }

  .scroll {
    transition: all .2s ease-in;
  }

  .target-burger {
    margin: 1.125em;
    width: 3.250em;
    height: 3.250em;
    display: block;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .target-burger:hover {
    cursor: pointer;
    -webkit-opacity: 0.45;
    -moz-opacity: 0.45;
    opacity: 0.45;
  }

  .toggled ul.buns li.bun {
    -webkit-transform: rotate(45deg) translateZ(0);
    transform: rotate(45deg) translateZ(0);
  }

  .toggled ul.buns li.bun:last-child {
    -webkit-transform: rotate(-45deg) translateZ(0);
    transform: rotate(-45deg) translateZ(0);
  }

  .buns {
    width: 1.625em;
    height: 1.625em;
    list-style: none;
    padding: 0;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    color: #fff;
  }

  .bun {
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    margin-top: -0.75px;
    -webkit-transform: translateY(-3.75px) translateZ(0);
    transform: translateY(-3.75px) translateZ(0);
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .bun:last-child {
    -webkit-transform: translateY(3.75px) translateZ(0);
    transform: translateY(3.75px) translateZ(0);
  }

  .scrolled {
    background-color: #000;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  }
</style>