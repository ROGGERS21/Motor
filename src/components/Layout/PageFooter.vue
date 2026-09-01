<template>
  <footer class="bg-black text-white px-6 py-12 md:px-16 lg:px-24">
    <div class="max-w-7xl mx-auto">
      
      <!-- Footer columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

        <!-- Column 1: Logo + Description + Socials -->
        <div class="space-y-6">
          <h1 class="uppercase text-xl font-bold cursor-pointer">
            <span class="text-white">Car</span>
            <span class="text-green-500">Book</span>
          </h1>

          <p class="text-gray-200 text-base leading-6 max-w-xs">
          fastest and easiest way to rent a car is to use an online booking aggregator or a dedicated mobile app to compare rates, upload your documentation digitally, and secure instant confirmation.
          </p>

          <!-- Social icons -->
          <div class="flex items-center gap-6 text-2xl">
            <FaBandsXTwitter class="cursor-pointer hover:text-green-500 transition" />
            <CgFacebook class="cursor-pointer hover:text-green-500 transition" />
            <BsInstagram class="cursor-pointer hover:text-green-500 transition" />
          </div>
        </div>

        <!-- Column 2: Information -->
        <FooterLinks
          title="Information"
          :links="informationLinks"
        />

        <!-- Column 3: Customer Support -->
        <FooterLinks
          title="Customer Support"
          :links="customerSupportLinks"
        />

        <!-- Column 4: Contact -->
        <div>
          <h2 class="text-white text-xl font-semibold mb-6">
            Have a Questions?
          </h2>

          <div class="space-y-5">
            
            <!-- Address -->
            <div class="flex items-start gap-4">
              <AkLocation class="text-xl flex-shrink-0 mt-1" />
              <p class="text-gray-200 leading-6">
                203 Fake St. Mountain View,
                San Francisco, California, USA
              </p>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-4">
              <BsTelephoneFill class="text-xl flex-shrink-0" />
              <p class="text-gray-200">
                +2 392 3929 210
              </p>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-4">
              <AnOutlinedMail class="text-xl flex-shrink-0" />
              <p class="text-gray-200">
                info@yourdomain.com
              </p>
            </div>

          </div>
        </div>
      

      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  FaBandsXTwitter,
  CgFacebook,
  BsInstagram,
  AkLocation,
  BsTelephoneFill,
  AnOutlinedMail
} from '@kalimahapps/vue-icons'

import FooterLinks from '../composables/FooterLinks.vue'

const informationLinks = [
  "About",
  "Services",
  "Terms and Conditions",
  "Best Price",
  "Guarantee",
  "Privacy & Cookies Policy",
]

const customerSupportLinks = [
  "FAQ",
  "Payment Option",
  "Booking Tips",
  "How it Works",
  "Contact Us",
]
</script>