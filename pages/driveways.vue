<template>
  <div class="transition-colors duration-1000 bg-white">

    <!------ WELCOME TO THE PRIDE CONCRETE LIFTING WEBSITE - STAY A WHILE, GIVE US A CALL, 
    SEND US A MESSAGE, LET US KNOW HOW WE CAN HELP YOU. THANK YOU! ------->
    <section class="text-gray-700 mx-auto lg:w-3/4 lg:px-0 items-center pt-32">
      <div class="flex flex-col w-full mx-auto px-5 mb-2 text-left">
        <h1 class="mb-2 text-3xl font-black tracking-tighter text-black lg:text-7xl md:text-4xl">
          Driveway Lifting &amp; Leveling
        </h1>
        <p class="mt-4 text-lg leading-snug tracking-tight text-gray-600 w-full">
          Driveways are the gateway to your home - we want to make sure you make a smooth entrance by lifting and
          stabilizing your concrete driveway.
          <br /><br />
          Settling happens whether it's from water eroding the soil beneath concrete or from heavy loads (such as driving or parking vehicles on it every day) compacting the soil. Your concrete needs a strong base, and with our polyurethane foam - we can raise your driveway back to grade and provide a new strong foundation so you don't have to worry about further settling.</p>
      </div>
      <div class="flex flex-col items-start px-5 py-4 mx-auto lg:items-center md:flex-row">
        <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          <img class="object-cover object-center shadow-md" alt="Pride Concrete Levels Driveways" loading="lazy"
            src="~assets/images/markets/we-lift-driveways.jpg">
        </div>
        <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          <h1 class="mb-8 text-2xl font-bold tracking-tighter text-left text-black title-font">No Easier Way to Raise a Fallen Driveway</h1>
          <p class="mb-8 text-base leading-relaxed text-left text-gray-700">Our concrete foam lifting and soil stablization process is the fastest and most reliable way to lift your driveway back to grade with minimal invasiveness. We use NCFI Geotechnical Polyurethane Formulations in all of our jobs - the expanding foam both lifts and fills voids underneath your driveway. Say goodbye to those bumpy landings and hello to smooth sailing.</p>
        </div>
      </div>
    </section>
    <div class="px-5 mx-auto lg:py-4">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full mx-auto text-lg leading-snug tracking-tight text-gray-500 lg:px-0 lg:w-3/4">
          <h2 class="mt-4 mb-4 text-3xl font-bold text-black ">Ready to Raise your Curb Appeal?</h2>
          <p class="pb-6">Contact us today to schedule a free estimate and discuss options for your driveway repair. Pride Concrete Lifting brings you over 20 years of experience in the Foam Lifting Industry providing the Care, Knowledge, and Pricing our customers deserve.</p>
        </div>
      </div>
    </div>


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
          <p class="mb-8 md:w-1/2 md:px-10 mt-4 mx-auto text-lg leading-snug tracking-tight text-gray-300">
            Fill out the form below to get in contact with us! We can also be reached via email at:
            <span class="md:text-xl text-blue-300">
              <fa :icon="['fas','envelope']" /> contact@prideconcretelifting.com</span> or via telephone at:
            <span class="md:text-xl text-blue-300"> <a href="tel:817-888-6254">
                <fa :icon="['fas','phone']" /> 817-888-6254</a></span>.
          </p>
        </div>

        <form name="PrideForm" id="myForm" method="post" data-netlify="true" enctype="application/x-www-form-urlencoded"
          @submit.prevent="checkForm"
          class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border md:rounded-lg lg:w-1/2">
          <input type="hidden" name="form-name" value="PrideForm" />
          <div class="flex flex-wrap mb-6 -mx-3">

            <!-- NAME -->
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label class="text-base leading-7 text-gray-600" for="grid-title">Name</label>
              <input
                class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                id="grid-title" type="text" name="name" v-model="formData.name" placeholder="eg. John Smith">
            </div>

            <!-- PHONE NUMBER -->
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label class="text-base leading-7 text-gray-600" for="grid-url">Phone Number</label>
              <input
                class="w-full px-4 py-2 mt-2 text-base text-black bg-blue-900 transition duration-500 ease-in-out transform border-transparent rounded-sm bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                id="grid-url" type="tel" name="telephone" v-model="formData.telephone" placeholder="(123) 456-7890">
            </div>
          </div>

          <div class="flex flex-wrap mb-2 -mx-3">

            <!-- EMAIL -->
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label class="text-base leading-7 text-gray-600" for="email"> Email <span
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
              <label class="text-base leading-7 text-gray-600" for="message">Message <span
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
  import axios from "axios";
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
            <div class="flex flex-col w-full mb-4 text-left p-4 lg:text-center">
              <h1 id="contact" class="mb-2 text-3xl font-bold text-black tracking-tighter lg:text-5xl md:text-4xl">
                <fa :icon="['fas','satellite-dish']" />  Contact Form Submitted!
              </h1>
              <p class="mt-4 text-lg tracking-wide text-black">
                Thank you for reaching out to us - we will contact you as soon as we are able.
              </p>
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

<style>
  header {
    background-color: #000 !important;
  }

  button:hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }

  .left-image {
    background-image: url('~/assets/images/markets/poolside-gallery-image.jpg');
  }
</style>