<template>
    <section class="max-w-4xl mx-auto my-16 shadow-2xl rounded-2xl">

        <h2 class="text-hard flex justify-center  bg-clifford text-center  rounded-tr-2xl rounded-tl-2xl">


            <div
                class="flex flex-col my-8  title-font font-medium items-center md:justify-start justify-center text-zinc-100 rounded">

                <img :src="biller.billerLogo" alt="" nss class="lg:h-24  h-16  p-4 ">

                <span class=" lg:text-4xl text-xl">{{ biller.billerName }} </span>
            </div>
        </h2>

        <div v-if="biller.loading" class="bg-white">
            <h2 class="text-hard text-center lg:text-4xl text-xl py-8">Loading ...
            </h2>
            <div class="flex items-center justify-center p-6">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
                </div>
            </div>
        </div>
        <div class="  p-6 bg-white  rounded-b-2xl">




            <!-- Product Selection -->
            <div class="mb-6">
                <label for="product-select" class="block text-sm font-medium text-zinc-700 mb-2">Select Product</label>
                <select id="product-select" v-model="selectedProductId" @change="handleProductSelection"
                    class="w-full p-3 border border-zinc-300 rounded-md">
                    <option value="" disabled>Choose a product</option>
                    <option v-for="product in biller.biller.products" :key="product.billPaymentProductId"
                        :value="product.billPaymentProductId">
                        {{ product.billPaymentProductName }}
                    </option>
                </select>
            </div>

            <!-- Product Details -->
            <div v-if="selectedProduct" class="mb-6 p-4 bg-clifford/5 rounded-md text-hard">
                <div class="grid grid-cols-2 gap-4">

                    <div v-if="selectedProduct.isAmountFixed">
                        <span class="text-sm text-zinc-500">Amount,</span>
                        <p>{{ selectedProduct.isAmountFixed ? 'Fixed' : 'Not Fixed' }}</p>
                    </div>
                    <div v-if="selectedProduct.isAmountFixed">
                        <span class="text-sm text-zinc-500">Amount to Pay.</span>
                        <p>{{ formatCurrency(selectedProduct.amount) }}</p>
                    </div>
                    <div>
                        <span class="text-sm text-zinc-500">Currency:</span>
                        <p>{{ selectedProduct.currency }}</p>
                    </div>

                </div>
            </div>

            <!-- Dynamic Form -->
            <div v-if="selectedProduct && selectedProduct.metadata && selectedProduct.metadata.customFields"
                class="border border-clifford/50 rounded-lg p-6 bg-zinc-50">
                <form @submit.prevent="submitForm">
                    <div class="space-y-6">
                        <!-- Amount Field (if not fixed) -->
                        <div v-if="!selectedProduct.isAmountFixed" class="grid gap-2">
                            <label for="amount" class="block text-sm font-medium text-zinc-700">
                                Amount ({{ selectedProduct.currency }}) *
                            </label>
                            <input id="amount" type="number" v-model="formData.amount" required
                                class="p-2 border border-zinc-300 rounded-md" placeholder="Enter amount" />
                        </div>

                        <!-- Custom Fields -->
                        <div v-for="field in sortedCustomFields" :key="field.variableId" class="grid gap-2">

                            <p class="text-sm text-red-500" v-if="field.validation">
                                Validation Required
                            </p>
                            <label :for="field.variable_name" class="block text-sm font-medium text-zinc-700">
                                {{ field.display_name }} {{ field.required ? '*' : '' }}
                            </label>

                            <!-- Dropdown for singleselect type -->
                            <select v-if="field.type === 'singleselect'" :id="field.variable_name"
                                v-model="formData[field.variable_name]" :required="field.required"
                                class="p-2 border border-zinc-300 rounded-md">
                                <option value="" disabled>Select an option</option>
                                <option v-for="option in field.customFieldDropDown" :key="option.id"
                                    :value="option.code">
                                    {{ option.description }}
                                </option>
                            </select>

                            <!-- Text input for alphanumeric type -->
                            <input v-else-if="field.type === 'alphanumeric'" :id="field.variable_name" type="text"
                                v-model="formData[field.variable_name]" :required="field.required"
                                class="p-2 border border-zinc-300 rounded-md"
                                :placeholder="`Enter ${field.display_name}`" />

                            <input v-else-if="field.type === 'date'" :id="field.variable_name" type="date"
                                v-model="formData[field.variable_name]" :required="field.required"
                                class="p-2 border border-zinc-300 rounded-md"
                                :placeholder="`Enter ${field.display_name}`" />


                            <input v-else-if="field.type === 'numeric'" :id="field.variable_name" type="number"
                                v-model="formData[field.variable_name]" :required="field.required"
                                class="p-2 border border-zinc-300 rounded-md"
                                :placeholder="`Enter ${field.display_name}`" />



                            <!-- Default input for other types -->
                            <input v-else :id="field.variable_name" type="text" v-model="formData[field.variable_name]"
                                :required="field.required" class="p-2 border border-zinc-300 rounded-md"
                                :placeholder="`Enter ${field.display_name}`" />
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="py-2 px-4 bg-clifford text-white rounded-md hover:bg-hard">
                            Continue
                        </button>
                    </div>
                </form>
            </div>



            <router-link to="/biller-by-category" class="flex justify-center">
                <button
                    class="flex my-8 bg-clifford hover:bg-hard title-font font-medium items-center md:justify-start justify-center text-zinc-100 rounded">

                    <img src="https://openglassicons.pages.dev/100glassIcons/Group%20184.svg" alt="" class="pl-2">

                    <span class="text-xl pr-4">Go Back</span>
                </button>
            </router-link>
        </div>
    </section>
</template>

<script>

import { useBillerStore } from '@/stores/demoda.js';

export default {
    data() {
        return {
            biller: useBillerStore(),
            selectedProductId: '',
            formData: {}
        };
    },

    watch: {
        billerProductsLength() {
            this.selectedProductId = this.biller.biller.products[0].billPaymentProductId;
            this.handleProductSelection();
        },
    },

    computed: {


        billerProductsLength() {
            return this.biller.biller.products?.length
        },




        selectedProduct() {
            if (!this.selectedProductId) return null;
            return this.biller.biller.products.find(
                product => product.billPaymentProductId === this.selectedProductId
            );
        },

        sortedCustomFields() {
            if (!this.selectedProduct || !this.selectedProduct.metadata || !this.selectedProduct.metadata.customFields) {
                return [];
            }

            return [...this.selectedProduct.metadata.customFields].sort(
                (a, b) => parseInt(a.sortOrder) - parseInt(b.sortOrder)
            );
        }
    },

    methods: {
        handleProductSelection() {
            if (this.selectedProduct) {
                // Initialize form data
                this.formData = {};

                // Add amount field if not fixed
                if (!this.selectedProduct.isAmountFixed) {
                    this.formData.amount = '';
                } else {
                    this.formData.amount = this.selectedProduct.amount;
                }

                // Initialize custom fields
                if (this.selectedProduct.metadata && this.selectedProduct.metadata.customFields) {
                    this.selectedProduct.metadata.customFields.forEach(field => {
                        this.formData[field.variable_name] = '';
                    });
                }
            }
        },

        submitForm() {
            const payload = {
                billerId: this.biller.biller.billerId,
                categoryId: this.biller.biller.categoryId,
                productId: this.selectedProductId,
                amount: parseFloat(this.formData.amount) || this.selectedProduct.amount,
                customFields: {}
            };

            // Add custom fields to payload
            if (this.selectedProduct.metadata && this.selectedProduct.metadata.customFields) {
                this.selectedProduct.metadata.customFields.forEach(field => {
                    payload.customFields[field.variable_name] = this.formData[field.variable_name];
                });
            }

            console.log('Payment submission payload:', payload);
            alert('Payment submitted successfully!');
        },

        formatCurrency(value) {
            const formatter = new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: this.selectedProduct ? this.selectedProduct.currency : 'NGN',
                minimumFractionDigits: 2
            });

            return formatter.format(value);
        }
    },

    mounted() {
        useBillerStore().fetchBiller()
    }
};
</script>
