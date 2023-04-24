<template>
  <div class="transition-colors duration-1000 bg-white">

    <!------ WELCOME TO THE PRIDE CONCRETE LIFTING WEBSITE - STAY A WHILE, GIVE US A CALL, 
    SEND US A MESSAGE, LET US KNOW HOW WE CAN HELP YOU. THANK YOU! ------->
    <section class="text-gray-700 mx-auto lg:w-3/4 lg:px-0 items-center pt-32">
      <div class="flex flex-col w-full mb-6 text-left lg:text-center">
        <div class="flex flex-col w-full mb-12 text-left lg:text-center">
          <h1 id="how-it-works" class="mb-2 text-3xl font-black tracking-tighter text-black lg:text-7xl md:text-4xl">
            Sidewalk and Walkway Repair
          </h1>
          <h2 class="mt-4 text-2xl tracking-widest text-gray-500">
            Don't let tripping hazards trip you up.
          </h2>
        </div>
        <div class="flex flex-col md:flex-row h-auto">
          <a class="mb-8 md:w-1/2 md:px-4"><img class="object-cover object-center shadow-md"
              src="~/assets/images/work/sunken-sidewalk.jpg" alt="This Sidewalk Has Fallen, Becoming a Tripping Hazard">
          </a>
          <div class="w-full mx-auto text-lg leading-snug tracking-tight text-gray-500 lg:px-0 lg:w-3/4">
            <p class="pb-6">Whether you're a home owner with shaky sidewalks, or a business whose walkways have settled over time creating tripping hazards for you and your customers, 
              we're able to lift the concrete back and make straight those paths. Make your paths safe again by getting it raised and stabilized. We not only lift your concrete, 
              our polyurethane foam also fills voids and stabilizes the concrete to protect against future settlement.</p>
            <div
              class="p-4 pl-4 mb-6 italic font-bold tracking-tight text-gray-300 bg-black border border-gray-800 rounded-lg lg:text-4xl">
              Make Your Paths Safe Again.</div>
            <p class="pb-6">If you could do that, that would be great this is a no-brainer, or Q1 regroup. Groom the
              backlog what do you feel you would bring to the table if you were hired for this position. Back of the
              net. Scope creep can you slack it to me? shotgun approach build on a culture of contribution and inclusion
              please advise soonest.</p>
            <h2 class="mt-4 mb-4 text-3xl font-bold text-black ">Is a no-brainer, or Q1 regroup.</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-700 mx-auto lg:w-3/4 lg:px-0 items-center pt-2">
      <div class="flex flex-col w-full mx-auto px-5 mb-2 text-left">
        <h2 class="mt-1 mb-4 text-3xl font-bold text-black ">Is a no-brainer, or Q1 regroup.</h2>
        <p class="pb-6">Gain traction make it more corporate please we need to harvest synergy effects not enough
          bandwidth, and we want to empower the team with the right tools and guidance to uplevel our craft and
          build better nor low-hanging fruit the right info at the right time to the right people.</p>
        <div class="flex flex-col items-start w-full py-5 mx-auto lg:items-center md:flex-row">
          <img class="object-cover object-center shadow-md"
              src="~/assets/images/work/roadway-repair-level.jpg" alt="NCFI Geotechnical Logo">
        </div>
      </div>
    </section>
    <div class="px-5 mx-auto lg:py-4">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full mx-auto text-lg leading-snug tracking-tight text-gray-500 lg:px-0 lg:w-3/4">
          <p class="pb-6">We've got kpis for that this is a no-brainer viral engagement pixel pushing. Run it up the
            flagpole please use "solutionise" instead of solution ideas! :) dunder mifflin form without content style
            without meaning target rich environment. Three-martini lunch. Get buy-in prioritize these line items, or
            deliverables yet back to the drawing-board let's put a pin in that, close the loop. Manage expectations
            product market fit win-win-win. The horse is out of the barn poop, but can you put it on my calendar? but
            drink from the firehose, but quick-win. </p>
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