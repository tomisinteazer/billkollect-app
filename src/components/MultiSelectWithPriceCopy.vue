<template>
    <div class="w-full">
        <!-- Dropdown Button -->
        <div class="relative" ref="dropdownRef">
            <button @click="toggleDropdown"
                class="w-full border border-zinc-300 rounded-md px-4 py-2 text-left bg-white focus:outline-none focus:ring-2 focus:ring-clifford">
                <span v-if="selectedItems.length === 0" class="text-gray-400">Select options...</span>
                <span v-else class="flex flex-wrap gap-2">
                    <span v-for="item in selectedItems" :key="item.id"
                        class="bg-clifford/10 text-clifford text-sm px-2 py-1 rounded">
                        {{ item.description }} (₦{{ formatPrice(item.unitprice) }})
                    </span>
                </span>
            </button>

            <!-- Dropdown List -->
            <div v-if="isOpen"
                class="absolute z-10 mt-1 w-full bg-white border border-zinc-300 rounded-md shadow-lg max-h-60 overflow-auto">
                <button class="bg-blue-500 p-2 text-white w-full " @click="handleClickOutside">close</button>
                <ul>
                    <li v-for="option in uniqueOptions" :key="option.id"
                        class="flex items-center justify-between px-4 py-2 hover:bg-zinc-100 cursor-pointer"
                        @click="toggleItem(option)">
                        <div>
                            <div class="font-medium text-zinc-800">{{ option.description }}</div>
                            <div class="text-sm text-zinc-500">₦{{ formatPrice(option.unitprice) }}</div>
                        </div>
                        <input type="checkbox" class="form-checkbox text-clifford" :checked="isSelected(option)"
                            @change.stop />
                    </li>
                </ul>
            </div>
        </div>

        <!-- Total Price -->
        <div v-if="selectedItems.length" class="mt-4 text-sm text-zinc-700 font-semibold">
            Total: ₦{{ formatPrice(totalPrice) }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['field'],
    data() {
        return {
            selectedItems: [],
            isOpen: false
        };
    },
    computed: {
        totalPrice() {
            return this.selectedItems.reduce((sum, item) => sum + item.unitprice, 0);
        },
        uniqueOptions() {
            const map = new Map();
            this.field.customFieldDropDown.forEach((opt) => {
                if (!map.has(opt.code)) map.set(opt.code, opt);
            });
            return Array.from(map.values());
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        isSelected(option) {
            return this.selectedItems.some((item) => item.id === option.id);
        },
        toggleItem(option) {
            const index = this.selectedItems.findIndex((item) => item.id === option.id);
            if (index === -1) {
                this.selectedItems.push(option);
            } else {
                this.selectedItems.splice(index, 1);
            }
            this.emitSelected();
        },
        emitSelected() {

            console.log("emitSelected called");
            this.$emit('update:selected', {
                codes: this.selectedItems.map((i) => i.code),
                amount: this.totalPrice
            });
        },
        formatPrice(value) {
            return new Intl.NumberFormat('en-NG', {
                style: 'decimal',
                minimumFractionDigits: 0
            }).format(value);
        },
        handleClickOutside(event) {
            console.log("handleClickOutside called");
            if (this.$refs.dropdownRef && !this.$refs.dropdownRef.contains(event.target)) {
                this.isOpen = false;
            }
            this.isOpen = false;
        }
    },
    // mounted() {
    //     document.addEventListener('click', this.handleClickOutside);
    // },
    // beforeDestroy() {
    //     document.removeEventListener('click', this.handleClickOutside);
    // }
};
</script>

<style scoped>
/* Optional: Add custom scroll styles or additional hover effects */
</style>