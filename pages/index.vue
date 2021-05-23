<template>
  <div class="transition-colors duration-1000 bg-white dark:bg-gray-700">

    <!------ WELCOME TO THE PRIDE CONCRETE LIFTING WEBSITE - STAY A WHILE, GIVE US A CALL, 
    SEND US A MESSAGE, LET US KNOW HOW WE CAN HELP YOU. THANK YOU! ------->

    <section class="h-screen bg-center body-font bg-patterns outer-container">
      <div class="container px-8 pt-32 md:pt-40 pb-24 mx-auto lg:px-4 ">

        <div class="flex flex-col w-full mb-8 text-center">
          <h1 class="mb-6 text-4xl font-bold tracking-tighter text-white md:text-8xl lg:text-6xl title-font">
            Concrete Lifting
            <br class="hidden lg:block">
            and Soil Stabilization
          </h1>
          <p class="mx-auto text-lg leading-snug tracking-tight text-white lg:w-1/2">
            We take pride in being able to deliver superior results in our concrete lifting and soil stabilization work.
            Our team has over 20 years of experience in the concrete lifting industry, and we bring all of that
            knowledge with us when we come to do the job.</p>
        </div>

        <div class="flex justify-center">
          <div class="flex flex-col mt-8 md:flex-row">
            <a href="#contact"><button
                class="group inline-flex items-center px-5 py-3 mt-2 text-white transition-all duration-500 ease-in-out transform bg-black rounded-lg focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-900 focus:outline-none">
                <fa
                  class="group-hover:filter group-hover:transform group-hover:drop-shadow-lg group-hover:scale-150 transition-all duration-500 ease-in-out w-6 h-6"
                  :icon="['fas','paper-plane']" />
                <span class="flex flex-col items-start ml-4 leading-none">
                  <span class="mb-1 text-xs text-blueGray-400">FREE ESTIMATES</span>
                  <span class="font-medium text-white title-font">Leave Us A Message</span>
                </span>
              </button></a>
          </div>
        </div>

      </div>
    </section>

    <!------ WHAT IS PRIDE CONCRETE ABOUT, WELL LET ME TELL YOU... ------->
    <section class="mb-12 body-font">
      <div class="container px-5 py-10 mx-auto lg:px-24 ">
        
        <!-- ABOUT SECTION -->
        <div class="container">
          <div class="flex flex-col w-full mb-2 text-left px-4">
            <img class="mx-auto md:w-1/3 mb-10" src="~/assets/images/logo.png" alt="Pride Concrete Lifting - We Take Pride in our Work and our Experience.">
            <h1 id="about"
              class="mb-2 text-3xl font-black tracking-tighter text-black text-center lg:text-5xl md:text-4xl">
              Professional Concrete Lifting and Stabilization Using Time-Tested Industry Standards
            </h1>
            <p class="mt-4 text-lg leading-snug tracking-tight text-gray-400">
              We've been lifting concrete for a long time, and with that experience we're able to employ tried and true
              methods alongside today's more efficient technology to get the job done quicker, safer, and cheaper - with
              no loss of the quality that we pride ourselves on.
            </p>
          </div>
          <div class="flex flex-col md:flex-row h-auto">
            <div class="mb-8 md:w-1/2 md:px-4">
              <h2 class="mt-4 mb-4 text-3xl font-bold text-black ">We Turn This...</h2>
              <img class="shadow-md" src="~/assets/images/work/fallen_curb.png" alt="Fallen Sidewalk Curb">
            </div>
            <div class="mb-8 md:w-1/2 md:px-4">
              <h2 class="mt-4 mb-4 text-3xl font-bold text-black ">Into This...</h2>
              <img class="shadow-md" src="~/assets/images/work/raised_curb.png" alt="Sidewalk Curb Now Raised">
            </div>
          </div>
        </div>
        <!------------------->
        
        <!-- SERVICES SECTION -->
        <div class="container md:px-5 lg:pt-4 lg:py-4">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full px-4 mt-4 text-lg leading-snug tracking-tight text-gray-400 lg:px-0">
              <h2 id="services" class="mt-4 mb-4 text-3xl font-bold text-black ">We Work Where the Concrete Is</h2>
              <p class="pb-6">
                Concrete is everywhere - Your home is built on top of it, your driveway was poured with it, the roads
                you drive on and the sidewalks you walk on, even the airport runways commercial airlines rely on for a
                safe landing!
              </p>
              <div
                class="p-4 pl-4 mb-6 italic font-bold tracking-tight text-gray-300 bg-black border border-gray-800 rounded-lg lg:text-4xl">
                Stable and Level Concrete is Critical to the Safety of our Infrastructure</div>
              <p class="pb-6">We depend on the concrete to hold us up, but over time soil erosion and constant pressure
                causes that concrete to sink, and that's where we come in to lift that concrete back to its proper place
                and stabilize it for the future.</p>
            </div>
          </div>
          <div class="container flex flex-col items-center py-4 md:flex-row">
            <section class="py-8 px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="hidden md:block md:w-1/2 px-4">
                  <div class="h-full w-full bg-cover shadow-md left-image"></div>
                </div>
                <div class="md:w-1/2 h-auto px-4">
                  <div class="mb-8"><img class="shadow-md" src="~/assets/images/markets/airport-gallery-image.jpg"
                      alt="Airport Runway"></div>
                  <div><img class="shadow-md" src="~/assets/images/markets/residential-gallery-image.jpg"
                      alt="Residential Neighborhood"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!---------------------->

        <!-- ADDITIONAL INFO SECTION -->
        <div class="container flex flex-col items-center px-5 py-8 mx-auto">
          <div class="flex flex-col w-full mb-6 text-left lg:text-center">
            <h1 class="mb-2 text-3xl font-black tracking-tighter text-black lg:text-5xl md:text-4xl">
              Stagnant Water Got You Itching?
            </h1>
            <p class="mt-4 text-lg leading-snug tracking-tight text-gray-400">
              Over time, as concrete settles water can form "bird baths" and not drain properly. While the birds may
              enjoy a place to swim, these standing puddles of water are the perfect breeding ground for mosquitoes
              and a chance for disease to spread.
            </p>
          </div>
          <div class="flex flex-col md:flex-row h-auto">
            <div class="mb-8 md:w-1/2 md:px-4">
              <h2 class="mt-4 mb-4 text-3xl font-bold text-black text-center">Standing Water Before</h2>
              <img class="shadow-md" src="~/assets/images/work/alley_before.png" alt="Standing Water in an Alleyway">
            </div>
            <div class="mb-8 md:w-1/2 md:px-4">
              <h2 class="mt-4 mb-4 text-3xl font-bold text-black text-center">Water Draining After</h2>
              <img class="shadow-md" src="~/assets/images/work/alley_after.png"
                alt="Water-Free Alleyway After Concrete Lifting">
            </div>
          </div>
          <div class="flex flex-col md:flex-row h-auto">
            <div class="mb-8 md:w-1/2 md:px-4">
              <h2 class="mt-4 mb-4 text-3xl font-bold text-black text-center">Non-Draining Water</h2>
              <img class="shadow-md" src="~/assets/images/work/alley2_before.png" alt="Non-Draining Water in an Alley">
            </div>
            <div class="mb-8 md:w-1/2 md:px-4">
              <h2 class="mt-4 mb-4 text-3xl font-bold text-black text-center">Water Draining After Leveling</h2>
              <img class="shadow-md" src="~/assets/images/work/alley2_after.png"
                alt="Water Flowing Properly After Being Raised">
            </div>
          </div>
        </div>
        <!----------------------------->
        
        <!-- HOW IT WORKS SECTION -->
        <div class="flex flex-col w-full mb-6 text-left lg:text-center">
          <div class="flex flex-col w-full mb-12 text-left lg:text-center">
            <h1 id="how-it-works" class="mb-2 text-3xl font-black tracking-tighter text-black lg:text-5xl md:text-4xl">
              Want to See How It Works?
            </h1>
            <h2 class="mt-4 text-2xl tracking-widest text-gray-400">
              Minimally Invasive. Quick. Effective.
            </h2>
          </div>
          <div class="flex flex-col md:flex-row h-auto">
            <a class="mb-8 md:w-1/2 md:px-4" href="https://www.ncfigeo.com/"><img class=""
                src="~/assets/images/NCFI/NCFI GEo DB R.png" alt="NCFI Geotechnical Logo">
            </a>
            <p class="mb-8 md:w-1/2 md:px-4 mt-4 text-lg leading-snug tracking-tight text-gray-400">
              Pride Concrete Lifting proudly uses NCFI Geotechnical Polyurethane Formulations in all of our jobs. To
              achieve the goal of lifting pavement, asphalt, or any other concrete material foundation - we inject a
              polyurethane formulation underneath the material that fills any voided space and as the formulation sets
              up
              it begins to expand to bring the concrete back to grade and filling the voided space ensuring long lasting
              results.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
          <div class="flex p-4 lg:w-1/3 ">
            <div class="flex-grow">
              <div class="w-full mb-2">
                <img alt="Foam Being Injected Under Concrete" style="height:400px;"
                  class="object-cover object-center w-full h-64 rounded-sm lg:h-auto"
                  src="~/assets/images/NCFI/1st step slab lift graphic.png">
              </div>
              <h1 class="mb-2 text-2xl font-semibold font-black title-font">
                Foam is Injected</h1>
              <p class="text-lg leading-snug tracking-tight text-gray-400">
                After assessing the material to be raised, a 1/2" or 5/8" hole is drilled to precise depths to gain
                access to the foundation of the affected area.
                .</p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/3 ">
            <div class="flex-grow pl-6">
              <div class="w-full mb-2">
                <img alt="Foam Expanding Underneath Concrete" style="height:400px;"
                  class="object-cover object-center w-full h-64 rounded-sm lg:h-auto"
                  src="~/assets/images/NCFI/2nd step slab lift graphic.png">
              </div>
              <h1 class="mb-2 text-2xl font-semibold font-black title-font">
                Expansion of Foam</h1>
              <p class="text-lg leading-snug tracking-tight text-gray-400">
                A polyurethane foam is then carefully injected into the subgrade, that expands and lifts the material
                back to proper grade. </p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/3 ">
            <div class="flex-grow pl-6">
              <div class="w-full mb-2">
                <img alt="Foam Causing Concrete to Lift" style="height:400px;"
                  class="object-cover object-center w-full h-64 rounded-sm lg:h-auto"
                  src="~/assets/images/NCFI/3rd step slab lift graphic.png">
              </div>
              <h1 class="mb-2 text-2xl font-semibold font-black title-font">
                Lifting and Stabilization</h1>
              <p class="text-lg leading-snug tracking-tight text-gray-400">
                Once level has been achieved, the foam will then solidify and all voids underneath will be filled,
                preventing future sinkage or damage to the concrete.
              </p>
            </div>
          </div>
        </div>
        <!-------------------------->

      </div>
    </section>

    <!-- CONTACT US AND LET US GIVE YOU A FREE ESTIMATE -->
    <section>
      <div class="bg-black items-center py-6">
        
        <div class="flex flex-col w-full mb-4 text-left p-4 lg:text-center">
          <h1 id="contact" class="mb-2 text-3xl font-bold text-white tracking-tighter lg:text-5xl md:text-4xl">
            Send Us A Message.
          </h1>
          <p class="mt-4 text-lg tracking-wide text-white">
            Let Us Know How we Can Help You
          </p>
          <p class="mb-8 md:w-1/2 md:px-10 mt-4 mx-auto text-lg leading-snug tracking-tight text-gray-400">
            Fill out the form below to get in contact with us! We can also be reached via email at:
            <fa :icon="['fas','envelope']" /> contact@prideconcretelifting.com or via telephone at:
            <fa :icon="['fas','phone']" /> 817-888-6254.
          </p>
        </div>
        
        <form name="PrideForm" id="myForm" method="post" data-netlify="true" enctype="application/x-www-form-urlencoded"
          @submit.prevent="checkForm"
          class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border md:rounded-lg lg:w-1/2">
          <input type="hidden" name="form-name" value="PrideForm" />
          <div class="flex flex-wrap mb-6 -mx-3">
            
            <!-- NAME -->
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label class="text-base leading-7 text-gray-500" for="grid-title">Name</label>
              <input
                class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                id="grid-title" type="text" name="name" v-model="formData.name" placeholder="John Smith">
            </div>
            
            <!-- PHONE NUMBER -->
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label class="text-base leading-7 text-gray-500" for="grid-url">Phone Number</label>
              <input
                class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                id="grid-url" type="tel" name="telephone" v-model="formData.telephone" placeholder="(123) 456-7890">
            </div>
          </div>
          
          <div class="flex flex-wrap mb-2 -mx-3">
            
            <!-- EMAIL -->
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label class="text-base leading-7 text-gray-500" for="email"> Email <span
                  class="text-red">*</span></label>
              <input
                class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                id="email" type="email" name="email" v-model="formData.email" placeholder="email@example.com"
                required="">
            </div>

          </div>
          
          <div class="flex flex-wrap mb-6 -mx-3">
            <!-- MESSAGE -->
            <div class="w-full px-3">
              <label class="text-base leading-7 text-gray-500" for="message">Message <span
                  class="text-red">*</span></label>
              <textarea
                class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                id="description" type="text" name="message" v-model="formData.message" placeholder="Your Message..."
                required=""></textarea>
            </div>
          </div>
          
          <div class="flex items-center w-full pt-4">
            
            <!-- ERRORS! -->
            <p v-if="errors.length" class="text-red p-3">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
            </p>

            <!-- SUBMIT -->
            <button type="submit" name="button"
              class="w-full py-3 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-900 border-blue-600 rounded-sm text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
              Submit
              <fa
                class="group-hover:filter group-hover:transform group-hover:drop-shadow-lg group-hover:scale-150 transition-all duration-500 ease-in-out w-6 h-6"
                :icon="['fas','paper-plane']" />
            </button>
          </div>

        </form>

      </div>
    </section>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: null,
          telephone: null,
          email: null,
          message: null
        },
        errors: [],
        jsonld: {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "image": "~/assets/images/PCL.png",
          "name": "Pride Concrete Lifting",
          "email": "contact@prideconcretelifting.com",
          "description": "Concrete Lifting and Repair and Soil Stabilization for Driveways Repair, Pool Deck Lifting with foam injection in Dallas & Fort Worth."
        }
      }
    },
    metaInfo() {
      return {
        title: 'Pride Concrete Lifting and Repair in Dallas / Fort Worth',
        meta: [{
          name: "description",
          content: 'Concrete Foam Lifting and Repair in Dallas / Fort Worth - Driveway, Pools, Warehouses, and Other Concrete Leveling by Industry Professionals.'
        }],
        script: [{
          innerHTML: JSON.stringify(this.jsonld),
          type: 'application/ld+json'
        }]
      }
    },
    methods: {
      encode(data) {
        const formData = new FormData();
        for (const key of Object.keys(data)) {
          formData.append(key, data[key]);
        }
        return formData;
      },
      checkForm: function (e) {
        if (this.formData.email && this.formData.message) {
          const axiosConfig = {
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          };
          axios.post(
              location.href,
              this.encode({
                'form-name': e.target.getAttribute("name"),
                ...this.formData,
              }),
              axiosConfig
            )
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .then(document.getElementById("myForm").innerHTML = `
            <div>
              Contact Form Submitted! Thank you!
            </div>
            `)
          e.preventDefault();
        }
        this.errors = [];
        if (!this.formData.email) {
          this.errors.push('Email required.');
        }
        if (!this.formData.message) {
          this.errors.push('Message required.');
        }
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>
  .outer-container {
    background-image: linear-gradient(rgb(0, 0, 0, 0.75), rgba(255, 255, 255, 0)), url("~assets/images/mega-highway-pride-concrete-can-lift-everything.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: 100vh;
  }

  button:hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }

  .left-image {
    background-image: url('~/assets/images/markets/poolside-gallery-image.jpg');
  }
</style>