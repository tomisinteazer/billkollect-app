<template>
    <div class="container mx-auto  px-4 max-w-6xl my-36">
        <h2 class="text-2xl font-bold mb-6">Remita Checkout Demo - Process RRR</h2>

        <form @submit.prevent="makePayment" id="payment-form">
            <div class="mb-6 relative">
                <input type="text"
                    class="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 peer pt-6"
                    id="js-rrr" name="rrr" v-model="rrr" placeholder=" " />
                <label for="rrr"
                    class="absolute text-gray-500 left-4 top-2 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                    Enter RRR
                </label>
            </div>

            <p class="mb-2"><strong>Note:</strong> To generate an RRR to use on this page,</p>
            <ul class="list-disc ml-5 mb-6">
                <li class="mb-1">
                    <a href="https://api.remita.net/#ed5722a2-4bf3-40a0-99c5-37f94cb94a55" target="_blank"
                        class="text-blue-600 hover:text-blue-800 underline">
                        Click here
                    </a>
                    to utilize our Invoice Generation API, or
                </li>
                <li>
                    <a href="https://demo.remita.net/remita/onepage/QATEST/biller.spa" target="_blank"
                        class="text-blue-600 hover:text-blue-800 underline">
                        Click here
                    </a>
                    to generate a Bill and go to the 'Bank Branch' Payment option to get the RRR
                </li>
            </ul>

            <button type="button" @click="makePayment"
                class="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RemitaCheckout',
    data() {
        return {
            rrr: '',
            paymentProcessed: false
        };
    },
    mounted() {
        this.loadRemitaScript();
    },
    methods: {
        loadRemitaScript() {
            return new Promise((resolve, reject) => {
                // Create script element
                const script = document.createElement('script');
                script.src = 'https://demo.remita.net/payment/v1/remita-pay-inline.bundle.js';
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        },
        makePayment() {
            if (!this.rrr) {
                alert('Please enter an RRR number');
                return;
            }

            const paymentEngine = window.RmPaymentEngine.init({
                key: "QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY",
                processRrr: true,
                transactionId: Math.floor(Math.random() * 1101233), // Dynamic transaction ID
                extendedData: {
                    customFields: [
                        {
                            name: "rrr",
                            value: this.rrr
                        }
                    ]
                },
                onSuccess: (response) => {
                    console.log('callback Successful Response', response);
                    this.paymentProcessed = true;
                    const xhr = new XMLHttpRequest();
                    xhr.open("GET", "https://remita.net/");
                    xhr.send();

                },
                onError: (response) => {
                    console.log('callback Error Response', response);
                    this.paymentProcessed = true;
                    window.location.href = "https://x.com";
                },
                onClose: () => {
                    console.log("closed");
                    setTimeout(() => {
                        if (!this.paymentProcessed) {
                            console.log("Payment was not completed. ");
                            this.paymentProcessed = true;
                        } else {
                            console.log("Payment was completed successfully.");
                        }
                    }, 2000);
                }
            });

            paymentEngine.showPaymentWidget();
        }
    }
};
</script>