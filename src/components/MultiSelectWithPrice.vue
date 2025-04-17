<template>
    <div class="w-full ">


        <!-- Dropdown Button -->
        <div class="relative" ref="dropdownRef">
            <button @click="toggleDropdown"
                class="w-full border p-2  border-zinc-300 rounded-md px-4 py-2 text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span v-if="selectedItems.length === 0" class="text-gray-400">Select options...</span>
                <span v-else class="flex flex-wrap gap-2">
                    <span v-for="item in selectedItems" :key="item.id"
                        class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded">
                        {{ item.description }} (₦{{ formatPrice(item.unitprice) }})
                    </span>
                </span>
            </button>

            <!-- Dropdown List -->
            <div v-if="isOpen"
                class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                <ul>
                    <li v-for="option in field.customFieldDropDown" :key="option.id"
                        class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        @click="toggleItem(option)">
                        <div>
                            <div class="font-medium">{{ option.description }}</div>
                            <div class="text-sm text-gray-500">₦{{ formatPrice(option.unitprice) }}</div>
                        </div>
                        <input type="checkbox" class="form-checkbox text-blue-600" :checked="isSelected(option)"
                            @change.stop />
                    </li>
                </ul>
            </div>
        </div>

        <!-- Total Price -->
        <div v-if="selectedItems.length" class="mt-4 text-sm text-gray-700 font-semibold">
            Total: ₦{{ formatPrice(totalPrice) }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MultiSelectWithPrice',
    props: {
        field: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
            selectedItems: [],
        }
    },
    computed: {
        totalPrice() {
            return this.selectedItems.reduce((sum, item) => sum + Number(item.unitprice), 0)
        },
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen
        },
        toggleItem(item) {
            const index = this.selectedItems.findIndex((i) => i.id === item.id)
            if (index === -1) {
                this.selectedItems.push(item)
            } else {
                this.selectedItems.splice(index, 1)
            }
        },
        isSelected(item) {
            return this.selectedItems.some((i) => i.id === item.id)
        },
        formatPrice(value) {
            return Number(value).toLocaleString()
        },
        handleClickOutside(event) {
            if (!this.$refs.dropdownRef.contains(event.target)) {
                this.isOpen = false
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside)
    },
}
</script>