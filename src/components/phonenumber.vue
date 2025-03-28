<template>
    <div class="w-full">
        <input type="text" :value="formattedPhoneNumber" @input="handleInput" placeholder="Phone Number"
            class="w-full bg-blue-100/30 backdrop-blur-md border border-blue-200 rounded-xl p-3 text-hard placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-hard lg:text-2xl"
            maxlength="16" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            phoneNumber: '',
            formattedPhoneNumber: ''
        }
    },
    methods: {
        handleInput(event) {
            const input = event.target.value.replace(/\D/g, '');

            // Limit to 10 digits
            const trimmedInput = input.slice(0, 10);

            // Format the phone number
            this.phoneNumber = trimmedInput;
            this.formattedPhoneNumber = this.formatPhoneNumber(trimmedInput);

            // Emit the raw phone number for parent component
            this.$emit('update:modelValue', this.phoneNumber);
        },

        formatPhoneNumber(digits) {
            if (digits.length === 0) return '';
            if (digits.length <= 3) return `(${digits}`;
            if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
            return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
        }
    }
}
</script>