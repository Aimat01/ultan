<template>
    <div class="containerToggles" :class = "background">
        <label class="switch">
            <input type="checkBox" v-model="isChecked" @change="toggleSwitch">
            <span class="slider"></span>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isChecked: false
        };
    },
    methods: {
        toggleSwitch() {
        }
    }
}
</script>

<style>
</style>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
}

.switch input{
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;       
    padding: 0;   
    appearance: none;
}

.switch input:not(:checked) + .slider:before {
    border-radius: 50%;
}

.switch input:checked + .slider:before {
    border-radius: 50%;
}


.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #35231a;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: #f5f0e0;
    transition: .4s;
}

input:checked + .slider {
    background-color: #f5f0e0;
}

input:checked + .slider:before {
    transform: translateX(15px);
    background-color: #35231a;
}

.h4 {
    margin-left: 10px;
}
</style>
